package jdbcDatabase;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class Database {

	private static final String URL = "jdbc:postgresql://localhost:5432/biblioteca";
	private static final String USER = "simone";
	private static final String PSW = "";

	public static Connection getConnection() throws SQLException {

		return DriverManager.getConnection(URL, USER, PSW);
	}

}
