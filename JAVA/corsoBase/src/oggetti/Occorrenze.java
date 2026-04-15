package oggetti;

import java.util.Scanner;

public class Occorrenze {

	public static void main(String[] args) {
		// TODO Auto-generated method stub


		System.out.println("inserisci una stringa");
		
		Scanner s = new Scanner(System.in);
		String frase = s.nextLine();
		
		System.out.println("inserisci un carattere");
		
		Scanner sc = new Scanner(System.in);
		String carattere = sc.nextLine();
		
		
		
		int lunghezza = frase.length(); 
		
		for (int i = 0; i < lunghezza; i++) {
			
		
		    char c = frase.charAt(i); 
		    
		    System.out.println("Carattere all'indice " + i + ": " + c);
		}

		
		
	}
		
}


