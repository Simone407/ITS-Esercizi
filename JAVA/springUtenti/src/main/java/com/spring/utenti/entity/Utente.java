package com.spring.utenti.entity;

public class Utente {

	
	private int IdUtente;
	
	private String nome, cognome, mail, telefono;
	
	public Utente() {	
	}

	public Utente(int idUtente, String nome, String cognome, String mail, String telefono) {
		super();
		this.IdUtente = idUtente;
		this.nome = nome;
		this.cognome = cognome;
		this.mail = mail;
		this.telefono = telefono;
	}

	public int getIdUtente() {
		return IdUtente;
	}

	public void setIdUtente(int idUtente) {
		IdUtente = idUtente;
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

	public String getMail() {
		return mail;
	}

	public void setMail(String mail) {
		this.mail = mail;
	}

	public String getTelefono() {
		return telefono;
	}

	public void setTelefono(String telefono) {
		this.telefono = telefono;
	}
	
	
	
	
	
}
	