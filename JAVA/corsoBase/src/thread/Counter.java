package thread;

public class Counter extends Thread {
	private int max;
	
	
	public Counter(String nome, int max) {	
		super(nome);
		this.max = max;
	}

	
	@Override
	public void run() {
		for(int i = 1; i <=max; i++) {
			try {
				Thread.sleep((int)Math.random()*10);
			} catch (InterruptedException e) {
				e.printStackTrace();
			}
			System.out.println(Thread.currentThread().getName()+ "-" +i);
		}	
	}
}
