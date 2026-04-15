
package EserciziProcedurali;
import java.util.Scanner;
import java.util.ArrayList;
import java.util.List;

public class Esercizio6 {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        
        System.out.print("Inserisci n: ");
        int n = input.nextInt();
        
        if (n <= 0) {
            System.out.println("Errore: inserisci un numero positivo!");
            input.close();
            return;
        }
        
        List<Integer> fattori = new ArrayList<>();
        int copia_n = n;
        
       
        while (n % 2 == 0) {
            fattori.add(2);
            n /= 2;
        }
        
        
        for (int i = 3; i * i <= n; i += 2) {
            while (n % i == 0) {
                fattori.add(i);
                n /= i;
            }
        }
        
        
        if (n > 1) {
            fattori.add(n);
        }
        
       
        if (fattori.size() == 1 && fattori.get(0) == copia_n) {
            System.out.println("Il numero è primo");
        } else {
            System.out.print("Fattori primi di " + copia_n + ": ");
            for (int i = 0; i < fattori.size(); i++) {
                if (i < fattori.size() - 1) {
                    System.out.print(fattori.get(i) + " * ");
                } else {
                    System.out.print(fattori.get(i));
                }
            }
            System.out.println();
        }
        
        input.close();
    }
}
