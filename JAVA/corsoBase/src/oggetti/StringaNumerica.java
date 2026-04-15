package oggetti;

import java.util.Scanner;

public class StringaNumerica {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

		System.out.println("inserisci una stringa");
		
		Scanner s = new Scanner(System.in);
		String frase = s.nextLine();
		
		
		for (char c : frase.toCharArray()) {
		
			
			if (c < '0' || c > '9') {
				
				System.out.println("frase non numerica");
				
			}else{
				System.out.println("frase numerica");
				
			}
		}
	}
}
