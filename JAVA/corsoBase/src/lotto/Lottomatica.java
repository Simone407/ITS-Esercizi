package lotto;

import java.util.HashSet;
import java.util.Scanner;
import java.util.Random;

public class Lottomatica {

    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);
        Random random = new Random();

        HashSet<Integer> estrazione = estraiNumeri(random);
        HashSet<Integer> giocata = inserisciGiocata(scanner);


        int numeriIndovinati = verificaVittoria(estrazione, giocata);

        mostraRisultati(estrazione, giocata, numeriIndovinati);

        scanner.close();
    }


    public static HashSet<Integer> estraiNumeri(Random random) {
        HashSet<Integer> numeri = new HashSet<>();

        while (numeri.size() < 5) {
            int numero = random.nextInt(90) + 1; 
            numeri.add(numero);
        }

        return numeri;
    }

    public static HashSet<Integer> inserisciGiocata(Scanner scanner) {
        HashSet<Integer> giocata = new HashSet<>();

        System.out.println("Inserisci i tuoi numeri (da 1 a 5):");
        System.out.println("Numeri compresi tra 1 e 90");

        while (giocata.size() < 5) {
            System.out.print("Inserisci numero " + (giocata.size() + 1) + 
                           " (oppure 0 per terminare): ");

            int numero = scanner.nextInt();

            if (numero == 0) {
                if (giocata.isEmpty()) {
                    System.out.println("Devi inserire almeno 1 numero!");
                    continue;
                }
                break;
            }

            if (numero < 1 || numero > 90) {
                System.out.println("Numero non valido! Deve essere tra 1 e 90.");
                continue;
            }

            if (!giocata.add(numero)) {
                System.out.println("Numero già inserito! Scegline un altro.");
            }
        }

        return giocata;
    }


    public static int verificaVittoria(HashSet<Integer> estrazione, HashSet<Integer> giocata) {
        int contatore = 0;

  
        for (Integer numero : giocata) {
           
            if (estrazione.contains(numero)) {
                contatore++;
            }
        }

        return contatore;
    }


    public static void mostraRisultati(HashSet<Integer> estrazione, HashSet<Integer> giocata, int numeriIndovinati) {
        System.out.println("\n=== RISULTATI ===");
        System.out.println("Numeri estratti: " + estrazione);
        System.out.println("La tua giocata: " + giocata);
        System.out.println("Numeri indovinati: " + numeriIndovinati);        

        String risultato;
        switch (numeriIndovinati) {
            case 5:
                risultato = "CINQUINA! Hai vinto!";
                break;
            case 4:
                risultato = "QUATERNA! Ottima giocata!";
                break;
            case 3:
                risultato = "TERNO! Ben fatto!";
                break;
            case 2:
                risultato = "AMBO! Hai indovinato 2 numeri!";
                break;
            case 1:
                risultato = "ESTRATTO! Hai indovinato 1 numero!";
                break;
            default:
                risultato = "Non hai vinto. Riprova!";
        }

        System.out.println(risultato);

        System.out.println("\n===============");
    }
}