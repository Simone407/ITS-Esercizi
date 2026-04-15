package prenotazionevoli;
public class Cliente {
	
    public Cliente(String string, int i, Assegnatore assegnatore) {
		// TODO Auto-generated constructor stub
	}

	public static void main(String[] args) {
       
        Assegnatore assegnatore = new Assegnatore();
        
        
        Cliente c1 = new Cliente("Mario Rossi", 5, assegnatore);
        Cliente c2 = new Cliente("Luca Bianchi", 8, assegnatore);
        Cliente c3 = new Cliente("Anna Verdi", 10, assegnatore);
        Cliente c4 = new Cliente("Giuseppe Neri", 3, assegnatore);
        Cliente c5 = new Cliente("Sara Gialli", 6, assegnatore);
        
        c1.start();
        c2.start();
        c3.start();
        c4.start();
        c5.start();
        
        try {
            c1.join();
            c2.join();
            c3.join();
            c4.join();
            c5.join();
            
            System.out.println("\nPosti rimanenti: " + assegnatore.getTotalePosti());
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

	private void start() {
		// TODO Auto-generated method stub
		
	}
}
