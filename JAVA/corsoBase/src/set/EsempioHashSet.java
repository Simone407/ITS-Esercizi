package set;
import java.util.HashSet;
import java.util.TreeSet;

import azienda.Impiegato;

public class EsempioHashSet {

	public static void main(String[] args) {

		HashSet<Impiegato> set = new HashSet<>();
		
		System.out.println(set);
		System.out.println(set.size());
		
		set.add(new Impiegato("mario", 1200, new Date()));
		set.add(new Impiegato("giulio", 1200, new Date()));
		set.add(new Impiegato("benedetta", 1400, new Date()));
		set.add(new Impiegato("alessio", 1600, new Date()));
		set.add(new Impiegato("giulia", 1100, new Date()));
		set.add(new Impiegato("paolo", 1670, new Date()));
		
		
		for (Impiegato impiegato: set) {

			System.out.println(impiegato);
		}
		
		
		
		TreeSet<Impiegato> tSet = new TreeSet<>();
		tSet.add(new Impiegato("mario", 1200, new Date()));
		tSet.add(new Impiegato("giulio", 1200, new Date()));
		tSet.add(new Impiegato("benedetta", 1400, new Date()));
		tSet.add(new Impiegato("alessio", 1600, new Date()));
		tSet.add(new Impiegato("giulia", 1100, new Date()));
		tSet.add(new Impiegato("paolo", 1670, new Date()));
		
		for (Impiegato impiegato: set) {

			System.out.println(impiegato);
		}
		
		
		
		
		
	}

}
