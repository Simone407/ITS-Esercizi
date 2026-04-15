package pila;

import java.util.LinkedList;


public class PilaGenerica {
	
	private LinkedList<Object> pila;
	
	
	public PilaGenerica() {
        pila = new LinkedList<>();
    }
	
	
	public void add(Object element) {
        pila.addLast(element);  
    }
	
    
    public Object remove() {
    	
        if (pila.isEmpty()) {
            return null; 
        }
        
        return pila.removeLast();  
    }
	
	

	public static void main(String[] args) {
		
		LinkedList<Integer> pilagenerica = new LinkedList<>();
		
		pilagenerica.add(21);
		pilagenerica.add(43);
		pilagenerica.add(6523);
		pilagenerica.add(56);
		

		
		
		for (Integer Object: pilagenerica) {
			
			System.out.println(Object);
				
		}
		
		System.out.println("");


		System.out.println("ho rimosso l'ultimo elemento: " + pilagenerica.removeLast());
		
		pilagenerica.add(67);
		
		
		System.out.println("");
		
		
		for (Integer Object: pilagenerica) {
			
			System.out.println(Object);
				
		}
		
		
		

	}

}
