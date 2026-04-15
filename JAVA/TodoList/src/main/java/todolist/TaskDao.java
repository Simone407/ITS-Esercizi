package todolist;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;

public class TaskDao {
	private final String URL = "jdbc:postgresql://localhost:5432/todoApp";
	private final String USER = "simone";
	private final String PSW = "";

	private Connection getConnection() throws SQLException {
		return DriverManager.getConnection(URL, USER, PSW);
	}

	public void createTable() {
		String sql = "create table if not exists tasks (id serial primary key, task varchar(255) not null, done boolean default false)";
		try (Connection conn = getConnection(); Statement stmt = conn.createStatement()) {
			stmt.execute(sql);
			System.out.println("Tabella tasks creata o verificata.");
		} catch (SQLException e) {
			e.printStackTrace();
		}
	}

	public void save(Task task) {
		String sql = "insert into tasks (task, done) values (?, ?)";
		try (Connection conn = getConnection();
				PreparedStatement pstmt = conn.prepareStatement(sql, Statement.RETURN_GENERATED_KEYS)) {
			pstmt.setString(1, task.getTask());
			pstmt.setBoolean(2, task.isDone());
			pstmt.executeUpdate();

			ResultSet rs = pstmt.getGeneratedKeys();
			if (rs.next()) {
				task.setId(rs.getInt(1));
			}
			System.out.println("Task salvato: " + task);
		} catch (SQLException e) {
			e.printStackTrace();
		}
	}

	public List<Task> findAll() {
		List<Task> tasks = new ArrayList<>();
		String sql = "select * from tasks order by id";
		try (Connection conn = getConnection();
				Statement stmt = conn.createStatement();
				ResultSet rs = stmt.executeQuery(sql)) {
			while (rs.next()) {
				Task task = new Task();
				task.setId(rs.getInt("id"));
				task.setTask(rs.getString("task"));
				task.setDone(rs.getBoolean("done"));
				tasks.add(task);
			}
		} catch (SQLException e) {
			e.printStackTrace();
		}
		return tasks;
	}
	

}
