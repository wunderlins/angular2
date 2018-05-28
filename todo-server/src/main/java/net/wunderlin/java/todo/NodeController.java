package net.wunderlin.java.todo;

import java.sql.SQLException;
import java.util.ArrayList;
import java.util.Optional;

import javax.annotation.PostConstruct;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class NodeController {
	
	/**
	 * Open the Database on Startup
	 */
	@PostConstruct
	public void init() {
		String f = System.getProperty("user.dir") + "/nodes.db";
		System.out.println("Database file: " + f);
		try {
			Database.open(f);
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
    @RequestMapping({"/node","/node/{id}"})
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
    @RequestMapping({"/node/children","/node/{id}/children"})
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
    
    
}
