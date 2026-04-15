package liste;

import java.util.LinkedList;

public class EsempioLinkedList {

	public static void main(String[] args) {
		

		LinkedList<String> fiori = new LinkedList<>();
		
		System.out.println(fiori);
		System.out.println(fiori.size());
		fiori.add("rosa");
		fiori.add("viola");
		fiori.add("orchidea");
		fiori.add("tulipano");
		
		for (String string: fiori) {
			
			System.out.println(string);
		
		}
		
		
		fiori.add("narciso");
		
		System.out.println("");
		
		
		for (String string: fiori) {
					
			System.out.println(string);
				
		}
		
		
		
		fiori.add("margherita");
		
		System.out.println("");
		
		
		for (String string: fiori) {
					
			System.out.println(string);
				
		}
		
		
		System.out.println(fiori.indexOf("rosa"));
		
		
		System.out.println("ho rimosso l'ultimo: " + fiori.removeLast());
		System.out.println("ho rimosso il primo: " + fiori.removeFirst());
		
		
		System.out.println("");
		
		for (String string: fiori) {
			
			System.out.println(string);
				
		}
		
	}
}
