package EserciziProcedurali;
import java.util.Scanner;
import java.lang.Math;

public class Esercizio1 {

	public static void main(String[] args) {

		
		System.out.println("Inserisci due numeri interi: ");
		
		Scanner s = new Scanner(System.in);
		
		int n = s.nextInt();
		
		Scanner s1 = new Scanner(System.in);
		int k = s.nextInt();
		
		
		double risultato = Math.pow(n, k);
		
		System.out.println(risultato);
	}

}
