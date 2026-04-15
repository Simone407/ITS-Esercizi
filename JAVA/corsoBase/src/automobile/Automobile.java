package automobile;

import java.util.ArrayList;
import java.util.List;
import java.util.function.Predicate;

public class Automobile {
    private String marca;
    private String modello;
    private String targa;
    
    public Automobile(String marca, String modello, String targa) {
        this.marca = marca;
        this.modello = modello;
        this.targa = targa;
    }
    
    public String getMarca() {
        return marca;
    }
    
    public String getModello() {
        return modello;
    }
    
    public String getTarga() {
        return targa;
    }
    
    // Metodo statico per filtrare le automobili
    public static List<Automobile> filtraAutomobili(List<Automobile> automobili, Predicate<Automobile> filtro) {
    	
        List<Automobile> risultato = new ArrayList<>();
        for (Automobile auto : automobili) {
            if (filtro.test(auto)) {
                risultato.add(auto);
            }
        }
        return risultato;
    }
    
 
    public int getNumeroTarga() {
    	
        String numeri = targa.replaceAll("[^0-9]", "");
        return numeri.isEmpty() ? 0 : Integer.parseInt(numeri);
    }
    
    @Override
    public String toString() {
        return marca + " " + modello + " (" + targa + ")";
    }
}
