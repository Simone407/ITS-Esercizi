public class Primitivi {
    public static void main(String[] args) {
        
        /* COMMENTO PIU RIGHE */

        int a = 0;
        System.out.println(a);

        double x = 2;
        System.out.println(x);

        int n = 1000;
        byte numero = (byte) n;

        System.out.println(numero);
        System.out.println(n);

        char lettera = '\n';
        boolean flag = false;

        System.out.println(lettera);
        System.out.println(flag);

        int num1= 10;
        int num2= 4;
        double div = (double) num1/num2;
        System.out.println(div);
        
        //----------------------------------------------------------------------//
        
        // CICLO IF
        int d = 4;    

        if (d>3){
            System.out.println("corretto");
        }
        else
            System.out.println("errore");



        // CICLO FOR
        for (int i = 0; i <=10; i++){

            System.out.println(i);

        }

        /*
        etichetta:
        for(int i =0; i< 20; i++){
            for(int j =0; j< 10; j++){
                if(i==12 && j==5)
                    continue etichetta;
                System.out.println(j);
        }
        System.out.println(" -- "+i);
        } 
        */
        





    }
}
