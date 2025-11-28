
/* Esercizio n. 3
Letto dalla tastiera un numero intero n > 0, stampare il fattoriale di n.
Definizione di fattoriale: per n>1
n! = n * ( n -1 ) * ( n -2 )... * 1.
Per n= 1, n! = 1 */

import java.util.Scanner;

public class terzo {
    public static void main(String[] args) {
        
        Scanner s = new Scanner(System.in);

        System.out.println("Inserisci un numero: ");
        int n = s.nextInt();

        int ris = 1;

        for (int i = n; i>=2; i--){

            ris *= i;
        }

        System.out.println("il fattoriale di " + n + " è: " + ris);
    }
}

