package jdbc.dao;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

import jdbc.dto.LibroDTO;
import jdbcDatabase.Database;

public class LibroDAO {

	public static List<LibroDTO> findAll() throws SQLException {
		String sqlSelect = "Select id, titolo, autore, prezzo from libro order by id";
		List<LibroDTO> libri = new ArrayList<>();
		Connection conn = null;
		try {
			conn = Database.getConnection();
			PreparedStatement psSelect = conn.prepareStatement(sqlSelect);
			ResultSet rs = psSelect.executeQuery();
			while (rs.next()) {
				LibroDTO l = new LibroDTO(rs.getInt("id"), rs.getString("titolo"), rs.getString("autore"),
						rs.getDouble("prezzo"));
				libri.add(l);
			}

		} catch (SQLException e) {
			System.out.println("Errore nella lettura dei libri " + e.getMessage());
		} finally {
			if (conn != null) {
				conn.close();
			}
		}

		return libri;
	}

	public boolean insert(LibroDTO l) {

		int chiave = -1;
		String insertSql = "Insert into libro (titolo,autore,prezzo) values(?,?,?)";
		try (Connection conn = Database.getConnection();
				PreparedStatement psInsert = conn.prepareStatement(insertSql, Statement.RETURN_GENERATED_KEYS)) {
			psInsert.setString(1, l.getTitolo());
			psInsert.setString(2, l.getAutore());
			psInsert.setDouble(3, l.getPrezzo());
			int righe = psInsert.executeUpdate();
			if (righe == 0) {
				throw new SQLException("Non è ststa inserita nessuna riga");
			}

			try (ResultSet keys = psInsert.getGeneratedKeys()) {
				if (keys.next()) {
					System.out.println("Id libro " + keys.getInt(1));
					chiave = keys.getInt(1);
					l.setId(chiave);
					return true;
				}
			}
			// throw new SQLException("Non ho recuperato l'id");

			return false;
		} catch (SQLException e) {
			System.out.println("Errore nell'inserimento " + e.getMessage());
			return false;

		}
	}
}