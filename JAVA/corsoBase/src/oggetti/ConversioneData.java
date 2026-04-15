package oggetti;

import java.util.Scanner;

public class ConversioneData {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		System.out.println("inserisci una data nel formato: GG/MM/AAAA");
		
		Scanner s = new Scanner(System.in);
		
		String data = s.nextLine();
		System.out.println(data);
		
		
		String giorno = data.substring(0,2); 
		String mese = data.substring(3,5); 
		String anno = data.substring(6); 
		
		switch (mese) {
		
		  case "01":
			  mese = " Gennaio ";
		    break; 
		  case "02":
			  mese = " Febbraio ";
		    break;
		  case "03" :
			  mese = " Marzo ";
			  break;
		  case "04" :
			  mese = " Aprile ";
			  break;
		  case "05" :
			  mese = " Maggio ";
			  break;
		  case "06" :
			  mese = " Giugno ";
			  break;
		  case "07" :
			  mese = " Luglio ";
			  break;
		  case "08" :
			  mese = " Agosto ";
			  break;
		  case "09" :
			  mese = " Settembre ";
			  break;
		  case "10" :
			  mese = " Ottobre ";
			  break;
		  case "11" :
			  mese = " Novembre ";
			  break;
		  case "12" :
			  mese = " Dicembre ";
			  break;
		  default:
		    mese = " Errore nella data ";
		}

		System.out.println("la data è: "+ giorno + mese + anno);
			
	}
}
