package com.spring.utenti.service;

import com.spring.utenti.dao.DAOUtenteMappa;
import com.spring.utenti.entity.Utente;

public class UtenteService {
	
	
	private DAOUtenteMappa dao = new DAOUtenteMappa() ;
	
	public boolean registra(Utente utente) {
		
		return dao.insert(utente);
		
	}
 
}
