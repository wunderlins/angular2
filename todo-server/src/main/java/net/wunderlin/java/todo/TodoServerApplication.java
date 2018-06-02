package net.wunderlin.java.todo;

import java.sql.SQLException;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.ExitCodeGenerator;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class TodoServerApplication {

	/*
	private static final Logger logger = LoggerFactory.getLogger(TodoServerApplication.class);
	@Bean
	public ExitCodeGenerator exitCodeGenerator() {
		logger.info("Shutting down Databse");
		try {
			Database.close();
		} catch (SQLException e) {
			e.printStackTrace();
		}
		return () -> 0;
	}
	*/
	
	public static void main(String[] args) {
		SpringApplication.run(TodoServerApplication.class, args);
	}
	

}
