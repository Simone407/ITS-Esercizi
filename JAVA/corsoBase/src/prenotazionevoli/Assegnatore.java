public class Assegnatore {
    private int postiDisponibili;
    private static final int POSTI_TOTALI = 20;
    
    public Assegnatore() {
        this.postiDisponibili = POSTI_TOTALI;
    }
    
    
    public synchronized void assegnaPosti(String cliente, int numPosti) 
            throws PostiNonDispException {
        
       
        if (numPosti > postiDisponibili) {
            throw new PostiNonDispException(
                "Posti non disponibili. Richiesti: " + numPosti + 
                ", Disponibili: " + postiDisponibili
            );
        }
        
        
        postiDisponibili -= numPosti;
        
       
        System.out.println("Cliente: " + cliente + 
                         " - Posti assegnati: " + numPosti + 
                         " - Posti rimanenti: " + postiDisponibili);
    }
    
    public synchronized int getTotalePosti() {
        return postiDisponibili;
    }
}
