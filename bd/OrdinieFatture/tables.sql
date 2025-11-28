
CREATE TYPE StatoOrdine AS enum ('In Preparazione', 'Inviato', 'Da Saldare','Saldato');


CREATE TABLE città(
	nome varchar primary key
	PRIMARY KEY (città,nome)
	FOREIGN KEY (regione) REFERENCES regione(nome)
	FOREIGN KEY (nazione) REFERENCES nazione(nome)
)


CREATE TABLE regione(
	nome varchar not null, 
	PRIMARY KEY (regione,nome)
	FOREIGN KEY (città) REFERENCES città(nome)
	FOREIGN KEY (nazione) REFERENCES nazione(nome)
)

CREATE TABLE nazione(
	nome varchar primary key
	PRIMARY KEY (nazione,nome)
	FOREIGN KEY (città) REFERENCES città(nome)
	FOREIGN KEY (regione) REFERENCES regione(nome)
)


CREATE TABLE direttore(

	nome varchar primary key,
	cognome varchar,
	datanascita date,
	anniservizio integer check (value >= 0),
	cf: CodiceFiscale
) 


CREATE TABLE fornitore(

	ragioneSociale varchar primary key,
	partitaiva: partitaIva not null,
	indirizzo: Indirizzo not null,
	telefono: Telefono not null,
	email: email not null
)


CREATE TABLE dipartimento(

	nome: varchar null,
	indirizzo: Indirizzo not null
)

CREATE TABLE ordine(

	dataStipula date primary key,
	imponibile real check (value >= 0)
	aliquotaIva real [0..1]
	stato: statoOrdine
)
