package com.spring.utenti.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.spring.utenti.entity.Utente;

@RestController
@RequestMapping(path="/utenti")

public class UtenteController {
	
	
	@GetMapping (path="/registra", consumes = "application/json")
	public boolean registra(@RequestBody Utente utente) {
		
		// fake 
		System.out.println("Ho registrato l'utente " + utente.getNome());
		return true;
		
	}
	
	@GetMapping(path="/cerca/{idUtente}")
	public Utente cercaPerId(@PathVariable int idUtente){
		
		//fake
		return new Utente(idUtente, "mario", "rossi", "rossi@gmail.com", "542356435");	
	}
	
	
	

}
	