package com.example;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(path = "/gestioneutenti")
public class UtenteController {

    @GetMapping(path = "/cerca/{idUtente}", produces = "application/json")
    public Utente cercaUtente(@PathVariable Integer idUtente) {
        // funzione di ricerca
    }

    @PostMapping(path = "/registra", consumes = "application/json")
    public void registra(@RequestBody Utente utente) {
        // funzione d'inserimento
    }
}
