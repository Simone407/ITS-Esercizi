package com.spring.utenti.dto;

public class ModificaMateriaDTO {

	private int id;
	private String nuovaMateria;

	public ModificaMateriaDTO() {
		super();
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getNuovaMateria() {
		return nuovaMateria;
	}

	public void setNuovaMateria(String nuovaMateria) {
		this.nuovaMateria = nuovaMateria;
	}
}
