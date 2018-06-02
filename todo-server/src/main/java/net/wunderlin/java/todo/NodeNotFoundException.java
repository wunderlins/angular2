package net.wunderlin.java.todo;

import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.http.HttpStatus;

@ResponseStatus(HttpStatus.NOT_FOUND)
class NodeNotFoundException extends RuntimeException {

	private static final long serialVersionUID = 5896745137050949481L;
	public int nodeId = 0;

	public NodeNotFoundException(int nodeId) {
		super("could not find node '" + nodeId + "'.");
		this.nodeId = nodeId;
	}
}