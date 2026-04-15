package EserciziProcedurali;

import java.util.Scanner;

public class Esercizio2 {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        
        System.out.print("Inserisci n: ");
        int n = input.nextInt();
        
        System.out.print("Inserisci k: ");
        int k = input.nextInt();
        
        long somma = 0;  
        
        System.out.print("Sommatoria: ");
        
        for (int i = 1; i <= n; i++) {
            long termine = (long) Math.pow(k, i);  // k^i
            somma += termine;
            
  
            if (i < n) {
                System.out.print(termine + " + ");
            } else {
                System.out.print(termine);
            }
        }
        
        System.out.println(" = " + somma);
        
        input.close();
    }
}

