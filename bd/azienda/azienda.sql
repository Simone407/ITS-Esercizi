-- schema relazionale ---> (~ si fa con altgr + ì)

create domain realGEZ as real
	check (value >=0);


create domain IntGEZ as integer
	check (value >=0);

create domain IntGZ as integer
	check (value > 0);

create domain Stringa as varchar;

create domain CAP as char(5)
		check (value ~' [0-9][5]')


CREATE TABLE impiegato (
	id serial primary key,
	nome stringa not null,
	cognome stringa not null,
	nascita date not null,
	stipendio realGEZ not null
);


CREATE TABLE dipartimento (
	id serial primary key,
	nome stringa not null,
	indirizzo Indirizzo,
	-- v. incl (id)
	--    appare in dip_tel(dipartimento)
	-- v. incl (id)
	-- 	  appare in direzione(dipartimento)
);


create table afferenza(
	Impiegato integer not null,
	dipartimento integer not null,
	data_afferenza date not null,

	primary key(impiegato)

	foreign key (impiegato)
		references impiegato(id),
	foreign key (dipartimento)
		references dipartimento(id)
);

create table direzione(
	Impiegato integer not null,
	dipartimento integer not null,

	primary key(dipartimento),

	foreign key (impiegato)
		references impiegato(id),
	foreign key (dipartimento)
		references dipartimento(id)
);

CREATE TABLE telefono(
	telefono Stringa primary key,
	-- v. incl (telefono)
	-- appare in dip_tel(telefono)
);

CREATE TABLE dip_tel (
	dipartimento integer not null,
	telefono stringa not null,
	primary key (dipartimento,telefono),
	foreign key (dipartimento)
		references dipartimento(id),
	foreign key (telefono)
		references telefono(telefono)
);


CREATE TABLE progetto (
	id serial primary key,
	nome stringa not null,
	budget realGEZ check not null
);

create table coinvolto (
	impiegato integer not null,
	progetto integer not null,

	primary key (impiegato,progetto),

	foreign key (impiegato)
		references impiegato(id),
	foreign key (progetto)
		references progetto(id)

);
