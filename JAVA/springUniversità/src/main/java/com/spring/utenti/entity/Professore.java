package com.spring.utenti.entity;

public class Professore {
	
	private String id;
	private String nome;
	private String cognome;
	private String materia;
	
	public Professore() {
		super();
	}

	public Professore(String id, String nome, String cognome, String materia) {
		super();
		this.id = id;
		this.nome = nome;
		this.cognome = cognome;
		this.materia = materia;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
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

	public String getMateria() {
		return materia;
	}

	public void setMateria(String materia) {
		this.materia = materia;
	}
	
	
	

}
