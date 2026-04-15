package adapter;

import java.time.LocalDate;
import azienda.Impiegato;


public class AdattatoreImpiegato implements dipendente{

	private Impiegato impiegato ;
	
	@Override
	public String getNominativo() {
		
		return this.impiegato.getNome() ;
	}

	@Override
	public double getRetribuzioneAnnua() {

		return this.impiegato.getSalario() * 13;
	}

	@Override
	public int getAnniAnzianita() {
		int annoAttuale = LocalDate.now().getYear();
		
		return annoAttuale - this.impiegato.getAnnoAssunzione();
	}

	public Impiegato getImpiegato() {
		return impiegato;
	}

	public void setImpiegato(Impiegato impiegato) {
		this.impiegato = impiegato;
	}

	@Override
	public String toString() {
		//return "AdattatoreImpiegato [impiegato=" + impiegato + "]";
		 return "Adattatore Impiegato: " + getNominativo() + "\n" + "RAL " + getRetribuzioneAnnua() + "\n" + "anzianità: " + getAnniAnzianita() + " anni" ;
	}

		
	
	

}
