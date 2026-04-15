package traghetto;

import java.util.ArrayList;

public class Auto implements Tariffabile {
    private String targa;
    private TipoAuto tipo;
    private ArrayList<Persona> passeggeri;
    private static final int MAX_PASSEGGERI = 5;
    
    public Auto(String targa, TipoAuto tipo, Persona conducente) {
        this.targa = targa;
        this.tipo = tipo;
        this.passeggeri = new ArrayList<>();
        this.passeggeri.add(conducente);
    }
    
    public void aggiungiPasseggero(Persona p) throws Exception {
        if (passeggeri.size() >= MAX_PASSEGGERI) {
            throw new Exception("Auto piena! Massimo " + MAX_PASSEGGERI + " passeggeri");
        }
        passeggeri.add(p);
    }
    
    public String getTarga() {
        return targa;
    }
    
    public TipoAuto getTipo() {
        return tipo;
    }
    
    public ArrayList<Persona> getPasseggeri() {
        return passeggeri;
    }
    
    @Override
    public double calcolaTariffa() {
        double totale = tipo.getTariffa();
        for (Persona p : passeggeri) {
            totale += p.calcolaTariffa();
        }
        return totale;
    }
    
    @Override
    public String toString() {
        return "Auto " + tipo + " (" + targa + ") con " + passeggeri.size() + " passeggeri";
    }
}
