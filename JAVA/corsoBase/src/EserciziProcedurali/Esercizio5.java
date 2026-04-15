package EserciziProcedurali;
import java.util.Scanner;

public class Esercizio5 {
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
        
        double cateto1 = Math.abs(x2 - x1);  
        double cateto2 = Math.abs(y2 - y1);  
        
        
        double ipotenusa = Math.sqrt(
            Math.pow(cateto1, 2) + Math.pow(cateto2, 2)
        );
        
      
        double perimetro = cateto1 + cateto2 + ipotenusa;
        
        System.out.println("Cateto 1: " + cateto1);
        System.out.println("Cateto 2: " + cateto2);
        System.out.println("Ipotenusa: " + ipotenusa);
        System.out.println("Perimetro: " + perimetro);
        
        input.close();
    }
}
