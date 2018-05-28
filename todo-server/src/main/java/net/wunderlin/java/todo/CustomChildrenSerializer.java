package net.wunderlin.java.todo;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import com.fasterxml.jackson.core.JsonGenerator;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.SerializerProvider;
import com.fasterxml.jackson.databind.ser.std.StdSerializer;

public class CustomChildrenSerializer extends StdSerializer<List<Node>> {

	private static final long serialVersionUID = 6946001365555279349L;

	public CustomChildrenSerializer() {
		this(null);
	}

	public CustomChildrenSerializer(Class<List<Node>> t) {
		super(t);
	}

	@Override
	public void serialize(List<Node> items, JsonGenerator generator, SerializerProvider provider)
			throws IOException, JsonProcessingException {
		// fetch a list of node ids, this will create additional database lookups
		List<Integer> ids = new ArrayList<>();
		for (Node item : items) {
			ids.add(item.getId());
		}
		
		generator.writeObject(ids);
	}

}