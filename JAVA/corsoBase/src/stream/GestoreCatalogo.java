package stream;

import java.util.*;
import java.util.stream.*;

public class GestoreCatalogo {
    
    private ArrayList<Prodotto> catalogo;
    
    public GestoreCatalogo(ArrayList<Prodotto> catalogo) {
        this.catalogo = catalogo;
    }
    
    // 1. Il numero di categorie
    public long numeroCategorie() {
        return catalogo.stream()
                .map(Prodotto::getCategoria)
                .distinct()
                .count();
    }
    
    // 2. Le categorie ordinate in ordine alfabetico, senza elementi doppi
    public List<String> categorieOrdinate() {
        return catalogo.stream()
                .map(Prodotto::getCategoria)
                .distinct()
                .sorted()
                .collect(Collectors.toList());
    }
    
    // 3. I nomi dei prodotti ordinati per prezzo crescente
    public List<String> prodottiOrdinatiPerPrezzo() {
        return catalogo.stream()
                .sorted(Comparator.comparingDouble(Prodotto::getPrezzo))
                .map(Prodotto::getDescrizione)
                .collect(Collectors.toList());
    }
    
    // 4. I prodotti ordinati in base allo sconto
    public List<Prodotto> prodottiOrdinatiPerSconto() {
        return catalogo.stream()
                .sorted(Comparator.comparingDouble(Prodotto::getSconto).reversed())
                .collect(Collectors.toList());
    }
    
    // 5. Il prodotto con lo sconto maggiore
    public Optional<Prodotto> prodottoScontoMaggiore() {
        return catalogo.stream()
                .max(Comparator.comparingDouble(Prodotto::getSconto));
    }
    
    // 6. La somma dei prezzi dei prodotti alimentari
    public double sommaPrezziAlimentari() {
        return catalogo.stream()
                .filter(p -> p.getCategoria().equals("alimentare"))
                .mapToDouble(Prodotto::getPrezzo)
                .sum();
    }
    
    // 7. Un Optional vuoto a seguito di una ricerca per categoria inesistente
    public Optional<Prodotto> cercaProdottoPerCategoria(String categoria) {
        return catalogo.stream()
                .filter(p -> p.getCategoria().equals(categoria))
                .findFirst();
    }
    
    // 8. Il prodotto con prezzo più alto nella categoria media
    public Optional<Prodotto> prodottoPiuCaroMedia() {
        return catalogo.stream()
                .filter(p -> p.getCategoria().equals("media"))
                .max(Comparator.comparingDouble(Prodotto::getPrezzo));
    }
    
    // 9. I nomi dei prodotti non disponibili
    public List<String> prodottiNonDisponibili() {
        return catalogo.stream()
                .filter(p -> !p.isDisponibilita())
                .map(Prodotto::getDescrizione)
                .collect(Collectors.toList());
    }
    
  
    public static void main(String[] args) {
        ArrayList<Prodotto> catalogo = new ArrayList<Prodotto>();
        catalogo.add(new Prodotto(133, "latte", "alimentare", 100, true, 2.5, 0));
        catalogo.add(new Prodotto(134, "latte UHT", "alimentare", 0, false, 2.5, 0));
        catalogo.add(new Prodotto(113, "pomodori", "alimentare", 50, true, 1.5, 5));
        catalogo.add(new Prodotto(123, "libro", "media", 10, true, 10, 5));
        catalogo.add(new Prodotto(155, "maglietta", "abbigliamento", 20, true, 25, 10));
        catalogo.add(new Prodotto(184, "cd musicale", "media", 0, false, 12.5, 0));
        catalogo.add(new Prodotto(143, "smartphone", "elettronica", 80, true, 250, 10));
        catalogo.add(new Prodotto(144, "cuffie", "elettronica", 0, false, 250, 10));
        
        GestoreCatalogo gestore = new GestoreCatalogo(catalogo);
        
        System.out.println("1. Numero di categorie: " + gestore.numeroCategorie());
        System.out.println("\n2. Categorie ordinate: " + gestore.categorieOrdinate());
        System.out.println("\n3. Prodotti ordinati per prezzo: " + gestore.prodottiOrdinatiPerPrezzo());
        System.out.println("\n4. Prodotti ordinati per sconto: ");
        gestore.prodottiOrdinatiPerSconto().forEach(p -> 
            System.out.println("   " + p.getDescrizione() + " - sconto: " + p.getSconto() + "%"));
        System.out.println("\n5. Prodotto con sconto maggiore: " + 
            gestore.prodottoScontoMaggiore().map(Prodotto::getDescrizione).orElse("nessuno"));
        System.out.println("\n6. Somma prezzi alimentari: " + gestore.sommaPrezziAlimentari());
        System.out.println("\n7. Ricerca categoria 'giocattoli': " + 
            gestore.cercaProdottoPerCategoria("giocattoli"));
        System.out.println("\n8. Prodotto più caro categoria media: " + 
            gestore.prodottoPiuCaroMedia().map(Prodotto::getDescrizione).orElse("nessuno"));
        System.out.println("\n9. Prodotti non disponibili: " + gestore.prodottiNonDisponibili());
    }
}

