package net.wunderlin.java.todo;

import java.io.File;
import java.net.URI;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Map;
import java.util.Optional;

import javax.annotation.PostConstruct;
import javax.servlet.http.HttpServletRequest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.env.Environment;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

/**
 * RESTful service for creating/updating and deleting nodes
 * <p>
 * supported methods: GET/PUT/POST/DELETE for nodes.
 * <p>
 * The convenience method /node/{id}/children does only support GET. Multiple children 
 * must be manipulated individually through the /node/{id} interface.
 * 
 * https://spring.io/guides/tutorials/bookmarks/
 * @author wus
 */
@RestController
@RequestMapping("/api")
public class NodeController {
	@Value("${todo-server.dburi}")
	private String dburi;
	
	@Autowired
	private HttpServletRequest request;
	
	@Autowired
	private Environment environment;
	
	private static final Logger logger = LoggerFactory.getLogger(NodeController.class);
	
	/**
	 * if the DEV profile is loaded, then CORS will automatically be disabled
	 * @see CorsFilter
	 */
	public static boolean disable_cors = false;
	
	/**
	 * Check if we could get a valid node from the DB
	 * <p>
	 * if the id is -2, this means the node could not be found in the database which should result in a 404.
	 * 
	 * @param n Created Node
	 * @param id
	 * @throws Exception
	 */
	private void isValidNode(Node n, int id) throws Exception{
		if (n.getId() == -2)
			throw new NodeNotFoundException(id);
	}
	
	/**
	 * Open the Database on Startup
	 */
	@PostConstruct
	public void init() {
		
		// find DB file path
		String f = System.getProperty("user.dir") + "/nodes.db";
		f = dburi;
		f = f.replaceFirst("^~", System.getProperty("user.home"));
		
		// check if we are in dev environment, if so, disable CORS
		logger.info("Active Profiles: [" + String.join(",", this.environment.getActiveProfiles()) + "]");
		if (Arrays.asList(environment.getActiveProfiles()).contains("dev")) {
			NodeController.disable_cors = true;
		}
		
		// open and initialize Database
		boolean create_structure = false;
		File fh = new File(f);
		if(!fh.exists()) { 
			create_structure = true;
		}
		
		try {
			Database.open(f);
			logger.info("Opening Databse: " + f);
			if (create_structure) {
				logger.info("Creating table Structure.");
				Node n = new Node();
				n.createTable();
			}
		} catch (SQLException e1) {
			e1.printStackTrace();
		}
	}
	
    /**
     * Serve an Node
     * <p>
     * Fetches a node, if parameter {id} is not present, then the Root node is fetched (node id==0).
     * 
     * @param id Optional, defaults to 0 which is the Root node
     * @return
     * @throws Exception 
     */
    @GetMapping({"/node","/node/{id}"})
    public Node node(@PathVariable Optional<Integer> id) throws Exception {
    	// check if optional parameter is present. if not, fetch the Root node.
    	int requestId = 0;  
        if (id.isPresent()) {
        	requestId = id.get(); //returns the id
        }
        logger.info("GET id: " + Integer.toString(requestId));
    	// prevent following references up (parent) and down (children):
    	// http://www.baeldung.com/jackson-bidirectional-relationships-and-infinite-recursion
    	
    	Node n = new Node(requestId);
    	isValidNode(n, requestId);

        return n;
    }
    
    /**
     * Serve an Node
     * <p>
     * Fetches a node, if parameter {id} is not present, then the Root node is fetched (node id==0).
     * 
     * @param id Optional, defaults to 0 which is the Root node
     * @return
     * @throws Exception 
     */
    @GetMapping({"/node/children","/node/{id}/children"})
    public ArrayList<Node> children(@PathVariable Optional<Integer> id) throws Exception {
    	// check if optional parameter is present. if not, fetch the Root node.
    	int requestId = 0;  
        if (id.isPresent()) {
        	requestId = id.get(); //returns the id
        }
        logger.info("GET Children id: " + Integer.toString(requestId));
    	// prevent following references up (parent) and down (children):
    	// http://www.baeldung.com/jackson-bidirectional-relationships-and-infinite-recursion
        Node n = new Node(requestId);
    	isValidNode(n, requestId);
		
        ArrayList<Node> children = n.getChildren();
        
        //children.forEach((c) -> System.out.println(c.getCtime()));
        
        return children;
    }
    
    /**
     * Update an existing node
     * 
     * @param id
     * @param input
     * @return
     * @throws Exception
     */
    @PostMapping({"/node","/node/{id}"})
	ResponseEntity<?> update(@PathVariable Integer id, @RequestBody Map<String, Object> input) throws Exception {
		int oid = (int) input.get("id");
		logger.info("POST id: " + oid);
		Node n = new Node(oid);
    	isValidNode(n, oid);
		
		n.setName((String) input.get("name"));
		try {
			n.store();
		} catch (SQLException e) {
			throw new NodeException(oid, e.getMessage());
		}
		
		URI location = ServletUriComponentsBuilder
				.fromCurrentRequest().path("")
				.buildAndExpand(oid).toUri();
		
		return ResponseEntity.created(location).build();
	}
    
    /**
     * create a new node
     * 
     * @param input
     * @return
     */
    @PutMapping("/node")
	ResponseEntity<?> create(@RequestBody Map<String, Object> input) {
		Node n = new Node();
		n.setName((String) input.get("name"));
		try {
			n.setParent((int) input.get("parentId"));
		} catch (Exception e1) {
			throw new NodeException(-1, e1.getMessage());
		}
		
		try {
			n.store();
		} catch (SQLException e) {
			throw new NodeException(-1, e.getMessage());
		}
		
		HttpHeaders headers = new HttpHeaders();
		headers.add("Location", request.getRequestURL().toString() + "/" + n.getId());
		return new ResponseEntity<Object>(n, headers, HttpStatus.OK);
	}

    /**
     * Delete an existing Node
     * 
     * @param id
     * @return
     * @throws Exception
     */
    @DeleteMapping("/node/{id}")
	ResponseEntity<?> delete(@PathVariable Integer id) throws Exception {
    	logger.info("DELETE: " + id);
		Node n = new Node(id);
    	isValidNode(n, id);
		
		try {
			n.delete();
		} catch (SQLException e) {
			throw new NodeException(id, e.getMessage());
		}
		
		HttpHeaders headers = new HttpHeaders();
		headers.add("Location", request.getRequestURL().toString());
		return new ResponseEntity<Object>("{\"success\": true}", headers, HttpStatus.OK);
	}
}
