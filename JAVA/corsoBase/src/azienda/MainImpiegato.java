opackage azienda;

import java.util.Date;

public class MainImpiegato {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		System.out.println("Numero impiegati: " + Impiegato.getContatore());
		
		Impiegato imp1 = new Impiegato("Mirko", 1500, new Date());
		System.out.println(imp1);
	
		System.out.println("Numero impiegati: " + Impiegato.getContatore());
		
		Impiegato imp2 = new Impiegato("Dini", 1800, new Date(125,5,5));
		System.out.println(imp2);
		
		System.out.println("Numero impiegati: " + Impiegato.getContatore());
		
		System.out.println("dopo l'aumento...");
		System.out.println(m1);
		System.out.println(m2);
		
		azienda.assume(m1);
		azienda.assume(m2);
		System.out.println(azienda);
		
		azienda.incrSalarioPerTutti(100);
		System.out.println(azienda);
		 
	}

}
