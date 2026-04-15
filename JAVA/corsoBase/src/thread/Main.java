package thread;

public class Main {

	public static void main(String[] args) {
		
		System.out.println(Thread.currentThread().getName());
	
		Counter c1 = new Counter("pippo",20);
		c1.start();
		
		Counter c2 = new Counter("pluto",20);
		c2.start();
		
		
		CountDown cd = new CountDown("minni",50);
		Thread t = new Thread(cd, cd.getNome());
		t.start();
		
		try {
			Thread.sleep(1000);
		} catch (InterruptedException e) {
			e.printStackTrace();
		}
		System.out.println("lavoro finito");		
	}
}
