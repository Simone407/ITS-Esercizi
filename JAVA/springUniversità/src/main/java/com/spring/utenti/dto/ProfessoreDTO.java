package com.spring.utenti.dto;

public class ProfessoreDTO {

	private int id;
	private String nome;
	private String cognome;
	private String materiaDInsegnamento;

	public ProfessoreDTO() {
	}

	public ProfessoreDTO(int id, String nome, String cognome, String materiaDInsegnamento) {
		this.id = id;
		this.nome = nome;
		this.cognome = cognome;
		this.materiaDInsegnamento = materiaDInsegnamento;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getCognome() {
		return cognome;
	}

	public void setCognome(String cognome) {
		this.cognome = cognome;
	}

	public String getMateriaInsegnamento() {
		return materiaDInsegnamento;
	}

	public void setMateriaInsegnamento(String materiaDInsegnamento) {
		this.materiaDInsegnamento = materiaDInsegnamento;
	}
}
