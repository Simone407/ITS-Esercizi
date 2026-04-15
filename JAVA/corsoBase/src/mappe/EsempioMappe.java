package mappe;

import java.util.HashMap;
import java.util.Map.Entry;
import java.util.Set;

public class EsempioMappe {

	public static void main(String[] args) {

		HashMap<Integer, Studente> mappa = new HashMap<>();
		
		System.out.println(mappa);
		
		
		Studente s = new Studente(123, "Mario", 2020);
		mappa.put(s.getMatricola(),s); 
		
		
		Studente s2 = new Studente(432, "Giulia", 2021);
		mappa.put(s2.getMatricola(),s2);
		
		System.out.println(mappa);
		
		
		Set<Entry<Integer,Studente>> set = mappa.entrySet();
		
		for(Entry<Integer,Studente> entry : set) {
			System.out.println(entry.getKey() + ":" + entry.getValue());
		}
		
		//inserisco una chiave doppia
		Studente s3 = new Studente(123, "Anna", 2020);
		if(!mappa.containsKey(s3.getMatricola()))
				mappa.put(s3.getMatricola(), s3);
		
		
		mappa.putIfAbsent(s3.getMatricola(), s3);
		
		
		set = mappa.entrySet();
		
		for(Entry<Integer,Studente> entry : set) {	
			System.out.println(entry.getKey() + ":" + entry.getValue());
		}
		
		
		
	}

}
