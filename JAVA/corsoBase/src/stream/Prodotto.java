package stream;

public class Prodotto {
    private int codice;
    private String descrizione;
    private String categoria;
    private int quantita;
    private boolean disponibilita;
    private double prezzo;
    private double sconto;
    
    public Prodotto(int codice, String descrizione, String categoria, 
                    int quantita, boolean disponibilita, double prezzo, double sconto) {
        this.codice = codice;
        this.descrizione = descrizione;
        this.categoria = categoria;
        this.quantita = quantita;
        this.disponibilita = disponibilita;
        this.prezzo = prezzo;
        this.sconto = sconto;
    }
    
    public int getCodice() { return codice; }
    public String getDescrizione() { return descrizione; }
    public String getCategoria() { return categoria; }
    public int getQuantita() { return quantita; }
    public boolean isDisponibilita() { return disponibilita; }
    public double getPrezzo() { return prezzo; }
    public double getSconto() { return sconto; }

    
    public void setCodice(int codice) { this.codice = codice; }
    public void setDescrizione(String descrizione) { this.descrizione = descrizione; }
    public void setCategoria(String categoria) { this.categoria = categoria; }
    public void setQuantita(int quantita) { this.quantita = quantita; }
    public void setDisponibilita(boolean disponibilita) { this.disponibilita = disponibilita; }
    public void setPrezzo(double prezzo) { this.prezzo = prezzo; }
    public void setSconto(double sconto) { this.sconto = sconto; }
}
