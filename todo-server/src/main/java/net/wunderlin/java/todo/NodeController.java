package net.wunderlin.java.todo;

import java.net.URI;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.Map;
import java.util.Optional;

import javax.annotation.PostConstruct;
import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

// https://spring.io/guides/tutorials/bookmarks/
@RestController
@RequestMapping("/api")
public class NodeController {
	
	@Autowired
	private HttpServletRequest request;
	
	/**
	 * Open the Database on Startup
	 */
	@PostConstruct
	public void init() {
		String f = System.getProperty("user.dir") + "/nodes.db";
		System.out.println("Database file: " + f);
		try {
			Database.open(f);
			System.out.println("Opening Databse");
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
     */
    @GetMapping({"/node","/node/{id}"})
    public Node node(@PathVariable Optional<Integer> id) {
    	// check if optional parameter is present. if not, fetch the Root node.
    	int requestId = 0;  
        if (id.isPresent()) {
        	requestId = id.get(); //returns the id
        }
    	System.out.println("id: " + Integer.toString(requestId));
    	// prevent following references up (parent) and down (children):
    	// http://www.baeldung.com/jackson-bidirectional-relationships-and-infinite-recursion
        return new Node(requestId);
    }
    
    /**
     * Serve an Node
     * <p>
     * Fetches a node, if parameter {id} is not present, then the Root node is fetched (node id==0).
     * 
     * @param id Optional, defaults to 0 which is the Root node
     * @return
     * @throws SQLException 
     */
    @GetMapping({"/node/children","/node/{id}/children"})
    public ArrayList<Node> children(@PathVariable Optional<Integer> id) throws SQLException {
    	// check if optional parameter is present. if not, fetch the Root node.
    	int requestId = 0;  
        if (id.isPresent()) {
        	requestId = id.get(); //returns the id
        }
    	System.out.println("id: " + Integer.toString(requestId));
    	// prevent following references up (parent) and down (children):
    	// http://www.baeldung.com/jackson-bidirectional-relationships-and-infinite-recursion
        Node n = new Node(requestId);
        ArrayList<Node> children = n.getChildren();
        
        return children;
    }
    
    // TODO: add error handling
    @PostMapping({"/node","/node/{id}"})
	ResponseEntity<?> update(@PathVariable Integer id, @RequestBody Map<String, Object> input) {
		//System.out.println("POST: " + Integer.toString(id));
		//System.out.println(input);
		int oid = (int) input.get("id");
		Node n = new Node(oid);
		n.setName((String) input.get("name"));
		//System.out.println("Name: " + (String) input.get("name"));
		//n.setDescription((String) input.get("description")); 
		try {
			n.store();
		} catch (SQLException e) {
			e.printStackTrace();
		}
		
		URI location = ServletUriComponentsBuilder
				.fromCurrentRequest().path("")
				.buildAndExpand(oid).toUri();
		
		// System.out.println(request.getRequestURL().toString());
		
		return ResponseEntity.created(location).build();
		//return ResponseEntity.noContent().build();
	}
    
    // TODO: add error handling
    @PutMapping("/node")
	ResponseEntity<?> create(@RequestBody Map<String, Object> input) {
		Node n = new Node();
		n.setName((String) input.get("name"));
		try {
			n.setParent((int) input.get("parentId"));
		} catch (Exception e1) {
			e1.printStackTrace();
		}
		
		try {
			n.store();
		} catch (SQLException e) {
			e.printStackTrace();
		}
		
		/*
		URI location = ServletUriComponentsBuilder
				.fromCurrentRequest().path("/{id}")
				.buildAndExpand(n.getId()).toUri();
		*/
		
		HttpHeaders headers = new HttpHeaders();
		headers.add("Location", request.getRequestURL().toString() + "/" + n.getId());
		return new ResponseEntity<Object>(n, headers, HttpStatus.OK);
	}
}
