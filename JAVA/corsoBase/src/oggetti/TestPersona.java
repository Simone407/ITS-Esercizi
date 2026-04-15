package oggetti;

public class TestPersona {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		Persona p = new Persona("giulio",34,85);

		p.eta = 38;
		
		System.out.println(p.nome);
		System.out.println(p.eta);
		
		
		p.setEta(40);
		
		
	}

	
		
	
	
	
	
}
