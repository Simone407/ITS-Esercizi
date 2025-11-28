
/* Esercizio n. 2 (Sommatoria)
Scrivere un programma che legge dalla tastiera due interi n >0 e k >0 e stampa il risultato della sommatoria 
k + k^2+ k^3+...+ k^n */

import java.util.Scanner;

public class secondo {
    public static void main(String[] args) {
        
        Scanner s = new Scanner(System.in);

        System.out.println("Aggiungi il primo numero: ");
        int n = s.nextInt();

        System.out.println("Aggiungi il secondo numero: ");
        int k = s.nextInt();

        int sommatoria = 0 ;

        for (int i = 1; i <= n; i++){

            sommatoria += Math.pow(k, i);
        }

        System.out.println(sommatoria);

    }
}
