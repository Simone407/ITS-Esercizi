package lambda;

import java.util.ArrayList;
import java.util.List;

public class GestoreMele {

	public static void main(String[] args) {
		
	// creo una lista di mele

		
		ArrayList<Mela> cassetta = new ArrayList<>();
		
		cassetta.add(new Mela("rossa", 100));
		cassetta.add(new Mela("verde", 120));	
		cassetta.add(new Mela("rossa", 210));	
		cassetta.add(new Mela("gialla", 121));	
		cassetta.add(new Mela("verde", 130));	
		cassetta.add(new Mela("rossa", 210));
		cassetta.add(new Mela("gialla", 310));
		cassetta.add(new Mela("rossa", 200));
		
		
		// stampiamo le sole mele verdi
		List<Mela> risultato = filtraPerColore(cassetta);
		
		System.out.println("MELE VERDI: ");
		
		for(Mela mela: risultato) {
			System.out.println(mela);
		}
		
		System.out.println("");
		
		// stampiamo le sole mele più pesanti di 150
		risultato = filtraPerPeso(cassetta);
		
		System.out.println("MELE PIU' PESANTI DI 150: "  );
		
		for(Mela mela: risultato) {
			System.out.println(mela);
		}
		
		
		System.out.println("");
		
		risultato = filtraMele(cassetta, mela -> mela.getColore().equals("gialla"));
		for(Mela mela: risultato) {
			System.out.println(mela);
		}
		
	}
	

	public static List<Mela> filtraPerColore(List<Mela> cassetta){
		
		ArrayList<Mela> listaFiltrata = new ArrayList<>();
		
		for (Mela mela: cassetta) {
			
			if (mela.getColore().equals("verde")) {
				
				listaFiltrata.add(mela);
			}
		}
		return listaFiltrata;
	}
	
	
	
	public static List<Mela> filtraPerPeso(List<Mela> cassetta){
		
		ArrayList<Mela> listaFiltrata = new ArrayList<>();
		
		for (Mela mela: cassetta) {
			
			if (mela.getPeso() > 150) {
				
				listaFiltrata.add(mela);
			}
		}
		return listaFiltrata;
	}
	
	
	
	public static List<Mela> filtraMele(List<Mela> cassetta, Criterio criterio){
		
		ArrayList<Mela> filtrata = new ArrayList<>();
		
		for (Mela mela: cassetta) {
			
			if (criterio.test(mela) == true) {
				
				filtrata.add(mela);
			}
		}
		return filtrata;
	}
	
	
	
}
