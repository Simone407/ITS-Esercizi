import java.util.Scanner;

/* Esercizio n. 1
Letti dalla tastiera due interi n > 0 e k > 0, stampare il valore di n^k. */



public class primo {
    public static void main(String[] args) {
        
        Scanner s = new Scanner(System.in);

        System.out.println("Aggiungi il primo numero: ");
        int n = s.nextInt();

        System.out.println("Aggiungi il secondo numero: ");
        int k = s.nextInt();

        int ris = 1;

        for (int i = 1; i <= k; i++){

            ris = ris *= n;

        }

        System.out.println("Risultato: " + ris);



        //CON MATH POW

        /* 
            double risultato = Math.pow(n, k);
            System.out.println("Risultato: " + risultato);
        */


    }
}