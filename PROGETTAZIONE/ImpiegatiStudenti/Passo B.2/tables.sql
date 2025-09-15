


create table posizionemilitare (
	nome stringa primary key
);



create table persona (
	cf codicefiscale primary key,
	nome stringa not null,
	cognome stringa not null,
	nascita date not null,
	maternita intgez,
	genere genere not null,
	pos_mil stringa,
	foreign key (pos_mil)
		references posizionemilitare(nome),

	-- [V.Persona.Genere.compl_disj]
	
	-- Per ogni p: Persona
    -- p.genere = 'Uomo' 
    -- 	  se e solo se
    --    esiste un link uomo_pos_mil 
    --    che coinvolge p

    -- si può scrivere così, ma è più lungo:
    -- check (
    --	(genere = 'Uomo' and (pos_mil is not null)
    --		or
    --	(genere <> 'Uomo' and (pos_mil is null))
    --	),

    check ( 
    	(genere = 'Uomo') 
    	= 
    	(pos_mil is not null)
    	),
    check ( 
    	(genere = 'Donna') 
    	= 
    	(maternita is not null)
    	)

);

create table studente(
	persona codicefiscale primary key,
	foreign key (persona)
		references persona(cf),
	matricola intgz not null,
	unique(matricola)
);

create table impiegato (
	persona codicefiscale primary key,
	foreign key (persona)
		references persona(cf),
	stipendio realgez not null,
	ruolo ruolo not null
);

create table responsabile (
	impiegato codicefiscale primary key,
	foreign key (impiegato)
		references impiegato(persona)
);

create table progetto (
	id serial primary key,
	nome stringa not null
);

create table resp_prog (
	responsabile codicefiscale not null,
	progetto integer not null,
	foreign key (responsabile)
		references responsabile(impiegato),
	foreign key (progetto)
		references progetto(id),
	primary key (responsabile, progetto)
);

-- Vincoli non implementabili direttamente
--	nello schema relazionale


-- [V.Impiegato.Responsabile]
-- Per ogni i: Impiegato
--  - se i partecipa a un link resp_isa_prog, 
-- allora i.ruolo = 'Progettista

-- [V.Persona.occupazione.disj]
--	- Non esiste p: Persona tale che
-- esistono sia un link imp_isa_pers 
--	che un link stud_isa_pers che coinvolgono p





