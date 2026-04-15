package EserciziProcedurali;

import java.util.Scanner;

public class Esercizio7 {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        
        System.out.print("Inserisci giorno : ");
        int g = input.nextInt();
        
        System.out.print("Inserisci mese : ");
        int m = input.nextInt();
        
        
        int[] giorni_mese = {
            0,  
            31, 
            28, 
            31, 
            30, 
            31, 
            30, 
            31, 
            31, 
            30, 
            31, 
            30, 
            31  
        };
        
        
        if (m < 1 || m > 12 || g < 1 || g > giorni_mese[m]) {
            System.out.println("giorno o mese non corretto/i");
            input.close();
            return;
        }
        
       
        int giorni_trascorsi = 0;
        
     
        for (int i = 1; i < m; i++) {
            giorni_trascorsi += giorni_mese[i];
        }
        
       
        giorni_trascorsi += (g - 1);
        
        System.out.println("Dall'inizio dell'anno sono trascorsi " + 
                          giorni_trascorsi + " giorni");
        
        input.close();
    }
}

