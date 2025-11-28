create domain stringa as varchar;

create domain partitaiva as char(11)
	check (value ~ '[0-9]{11}');

create domain codicefiscale as char(16)
	check (value ~ '[A-Z]{6}[0-9]{2}[A-Z][0-9]{2}[A-Z][0-9]{3}[A-Z]');

create domain CAP as char(5)
	check (value ~ '[0-9]{5}');

create type indirizzo as (
	via stringa,
	civico stringa,
	cap CAP
);

create domain Telefono as varchar(15);

create domain email as varchar
	check (value ~ '^[A-Z0-9._%+-]++@(?:[A-Z0-9-]++\.)++[A-Z]{2,}+$');

create type StatoOrdineEnum as enum (
	'In Preparazione', 'Inviato', 'Da Saldare' ,'Saldato'
);

create domain IntGEZ as integer
	check (value >= 0);


create domain RealGEZ as real
	check (value >= 0);


create domain Real_0_1 as RealGEZ
	check (value <= 1);