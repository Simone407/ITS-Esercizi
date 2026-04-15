package traghetto;

import java.util.LinkedList;
import java.util.Queue;

public class Biglietteria {
    private double cassa;
    private Queue<Tariffabile> coda;
    
    public Biglietteria() {
        this.cassa = 0;
        this.coda = new LinkedList<>();
    }
    
    public void aggiungiInCoda(Tariffabile t) {
        if (t != null) {
            coda.offer(t);
        }
    }
    
    public Tariffabile riceviPagamento() throws CodaVuotaException {
        if (coda.isEmpty()) {
            throw new CodaVuotaException("Errore nel ricevere il pagamento: coda vuota!");
        }
        
        Tariffabile primo = coda.peek();
        double tariffa = primo.calcolaTariffa();
        cassa += tariffa;
        coda.poll();
        
        return primo;
    }
    
    public double getCassa() {
        return cassa;
    }
    
    public int dimensioneCoda() {
        return coda.size();
    }
}
