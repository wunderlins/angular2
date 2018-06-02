package net.wunderlin.java.todo;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)
class NodeException extends RuntimeException {

	private static final long serialVersionUID = 1260934908649264748L;
	public int nodeId = 0;

	public NodeException(int nodeId, String message) {
		super(String.format("Node Error: %d: %s", nodeId, message));
		this.nodeId = nodeId;
	}
}
