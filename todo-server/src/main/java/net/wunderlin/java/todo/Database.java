package net.wunderlin.java.todo;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;

public abstract class Database {
	
	public enum NodeType {
		ROOT(0),
		NODE(1),
		TASK(10);
		
		private int type = 0;
		
		NodeType(int type) {
			this.type = type;
		}
		
		int getType() {
			return this.type;
		}
	}
	
	static protected String url = "";
	static Connection conn = null;
	static Statement stmt = null;

	protected boolean loaded = false;
	protected boolean dirty = false;
	protected ResultSet rs = null;
	
	public int node_type = NodeType.NODE.getType();
	
	public static void open(String db_file) throws SQLException {
		url = "jdbc:sqlite:" + db_file;
		
		try {
			Class.forName("org.sqlite.JDBC");
		} catch (ClassNotFoundException e1) {
			e1.printStackTrace();
		}
		
		try {
			conn = DriverManager.getConnection(url);
			stmt = conn.createStatement();
		} catch (SQLException e) {
			System.out.println(e.getMessage());
		}
	}
	
	public static void close() throws SQLException {
		conn.close();
	}
	
	public void load() throws SQLException, Exception {
		rs = loadStmt().executeQuery();
	}
	
	public void store() throws SQLException {}
	
	public void insert() throws SQLException {
		insertStmt().execute();
	}
	
	public void update() throws SQLException {
		updateStmt().execute();
	}
	
	public void delete() throws SQLException {
		deleteStmt().execute();
	}
	
	public void createTable() throws SQLException {
		ArrayList<String> sql = createStmt();
		sql.forEach((s) -> {
			try {
				stmt.execute(s);
			} catch (SQLException e) {
				e.printStackTrace();
			}
		}); 
	}
	
	public abstract PreparedStatement deleteStmt();
	public abstract PreparedStatement loadStmt();
	public abstract PreparedStatement insertStmt();
	public abstract PreparedStatement updateStmt();
	public abstract ArrayList<String> createStmt();

}
