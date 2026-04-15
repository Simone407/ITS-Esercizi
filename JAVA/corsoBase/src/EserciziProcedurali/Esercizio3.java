package EserciziProcedurali;

import java.util.Scanner;

public class Esercizio3 {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        
        System.out.print("Inserisci n: ");
        int n = input.nextInt();
        
        if (n <= 0) {
            System.out.println("Errore: inserisci un numero positivo!");
            input.close();
            return;
        }
        
        long fattoriale = 1;  
        
        System.out.print(n + "! = ");
        
        for (int i = n; i >= 1; i--) {
            fattoriale *= i;
            
            if (i > 1) {
                System.out.print(i + " × ");
            } else {
                System.out.print(i);
            }
        }
        
        System.out.println(" = " + fattoriale);
        
        input.close();
    }
}
