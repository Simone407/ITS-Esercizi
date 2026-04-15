package EserciziProcedurali;

import java.util.Scanner;

public class Esercizio4 {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        
        System.out.print("Inserisci x1: ");
        double x1 = input.nextDouble();
        System.out.print("Inserisci y1: ");
        double y1 = input.nextDouble();
        
        System.out.print("Inserisci x2: ");
        double x2 = input.nextDouble();
        System.out.print("Inserisci y2: ");
        double y2 = input.nextDouble();
        
        double lato_orizzontale = Math.abs(x2 - x1);
        double lato_verticale = Math.abs(y2 - y1);
        
        boolean isQuadrato = (lato_orizzontale == lato_verticale);
        
        if (isQuadrato) {
            System.out.println("Figura: QUADRATO");
            double lato = lato_orizzontale;
            double perimetro = 4 * lato;
            double area = lato * lato;
            System.out.println("Lato: " + lato);
            System.out.println("Perimetro: " + perimetro);
            System.out.println("Area: " + area);
        } else {
            System.out.println("Figura: RETTANGOLO");
            double perimetro = 2 * (lato_orizzontale + lato_verticale);
            double area = lato_orizzontale * lato_verticale;
            System.out.println("Lato orizzontale: " + lato_orizzontale);
            System.out.println("Lato verticale: " + lato_verticale);
            System.out.println("Perimetro: " + perimetro);
            System.out.println("Area: " + area);
        }
        
        input.close();
    }
}
