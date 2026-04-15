import java.sql.Statement;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.Scanner;

import jdbc.dao.LibroDAO;
import jdbc.dto.LibroDTO;

public class App {

	public static void main(String[] args) {

		// final String URL = "jdbc:postgresql://localhost:5432/biblioteca";
		// final String USER = "simone";
		// final String PSW = "";

		
			
			
			LibroDAO libroDao= new LibroDAO();
			LibroDTO libro1 = new LibroDTO("informatica", "epstein", 6.7);
			int chiave = libroDao.insert("informatica", "epstein", 6.7);
			
			/*
			 * Connection conn = DriverManager.getConnection(URL, USER, PSW); String
			 * insertSql = "Insert into libro (titolo,autore,prezzo) values(?,?,?)";
			 * 
			 * try (PreparedStatement psInsert = conn.prepareStatement(insertSql,
			 * Statement.RETURN_GENERATED_KEYS)) { psInsert.setString(1, "La bibbia 2 ");
			 * psInsert.setString(2, "Sconosciuto"); psInsert.setDouble(3, 50.00); int righe
			 * = 0; // psInsert.executeUpdate();
			 * 
			 * if (righe == 1) { try (ResultSet keys = psInsert.getGeneratedKeys()) { if
			 * (keys.next()) { System.out.println("Id libro " + keys.getInt(1)); } } }
			 * System.out.println("ho inserito  " + righe + " righe"); }
			 * 
			 * // SELECT String selectSql = "Select id,titolo,autore,prezzo from libro";
			 * 
			 * try (PreparedStatement psSelect = conn.prepareStatement(selectSql)) {
			 * 
			 * ResultSet rs = psSelect.executeQuery();
			 * System.out.println("----------LISTA LIBRI-------------");
			 * 
			 * while (rs.next()) { int id = rs.getInt("id"); String titolo =
			 * rs.getString("titolo"); String autore = rs.getString("autore"); double prezzo
			 * = rs.getDouble("prezzo");
			 * 
			 * System.out.println(id + " - " + titolo + " - " + autore + " - " + prezzo); }
			 * 
			 * }
			 */
		

	}
}