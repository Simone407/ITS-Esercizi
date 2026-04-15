package todolist;

import java.util.List;
import java.util.Scanner;

public class AppTask {
	public static void main(String[] args) {
		TaskDao dao = new TaskDao();
		dao.createTable();

		Scanner scanner = new Scanner(System.in);
		boolean running = true;

		while (running) {
			System.out.println("=============================");
			System.out.println("====== TODO LIST ======");
			System.out.println("1. Aggiungi task");
			System.out.println("2. Lista tasks");
			System.out.println("3. Esci");
			System.out.print("Scegli: ");
			System.out.println("\n=============================");

			int choice = scanner.nextInt();
			scanner.nextLine();

			switch (choice) {
			case 1:
				System.out.print("Nuovo task: ");
				Task newTask = new Task(scanner.nextLine());
				dao.save(newTask);
				break;
			case 2:
				List<Task> tasks = dao.findAll();
				if (tasks.isEmpty()) {
					System.out.println("Nessun task.");
				} else {
					for (Task t : tasks) {
						System.out.println(t);
					}
				}
				break;
			case 3:
				running = false;
				break;
			default:
				System.out.println("Scelta non valida.");
			}
		}
		scanner.close();
	}
}

//creare progetto maven
// nuovo db tasks
// creare tabella tasks: id serial PK, task varchar(255), done boolean (false)

// APPTASK (Main)
// TASKDAO
//TASK