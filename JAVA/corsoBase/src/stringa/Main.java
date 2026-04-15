package stringa;

public class Main {

	public static void main(String[] args) {
		
		Main main = new Main();
		boolean palindroma = main.isPalindroma("osso");
		
		System.out.println("la parola è palindorma?:  " + palindroma);
		
		int occ = main.contaOccorrenze("Lorem Impsum Lorem Ipsum test prova Stringa","o");
		System.out.println("numero occorrenze: " + occ);
		
	}
	
	
	public boolean isPalindroma(String str1) {
		
		String str2 = "";
		
		for (int i = str1.length()-1; i>=0; i--){
			
			str2 += str1.charAt(i);
		}
			
	return str2.equals(str1);	
			
	}
	
	public int contaOccorrenze(String str, String token) {
	    // conta le occorrenze del token nella stringa
	    
	    int occorrenze  =0;
	    
	    for (int i = 0; i<=str.length()-token.length(); i++) {
	    		
	    		String tmp = str.substring(i,i+token.length());
	    		if (tmp.equals(token)) {
	    			
	    			occorrenze++;
	    		}
	    		
	    }
	    
	   return occorrenze;
	}
}