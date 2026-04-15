package oggetti;

public class Persona {

	// attributi
	String nome;
	int eta;
	double peso;
	
	// costruttori 
	public Persona(String nome, int eta, double peso) {
		this.nome = nome;
		this.eta = eta;
		this.peso = peso;
	}

	public Persona(String nome, double peso) {
		this.nome = nome;
		this.peso = peso;
		//this.eta = 0;
	}

	public double getPeso() {
		return peso;
	}

	public void setPeso(double peso) {
		this.peso = peso;
	}

	public String getNome() {
		return nome;
	}

	public void setEta(int eta) {
		if (eta > 0 )
			this.eta = eta;
	}

	public int getEta() {
		return eta;
	}
	
	
	
	
	
	
	
	
	
}
