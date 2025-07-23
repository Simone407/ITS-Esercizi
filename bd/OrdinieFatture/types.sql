
-- CREATE TYPE Indirizzo (
--    Id INT PRIMARY KEY,
--    Via VARCHAR(255),
--    Civico VARCHAR(3),
--    Città VARCHAR(15),
--    regione VARCHAR(15),
--    Nazione VARCHAR(15)
-- );


create domain CAP as char(5)
    	check (value ~' [0-9][5]'),


create domain realGEZ as real
	check (value >=0);

create domain IntGEZ as integer
	check (value >=0);

create domain IntGZ as integer
	check (value > 0);

create domain Stringa as varchar;

create domain CodiceFiscale as varchar(16)
	check (value ~'[A-Z]{6}[0-9]{2}[A-Z][0-9]{2}[A-Z][0-9]{3}[A-Z]')


create domain PartitaIva as char(11)
	check (value ~' [0-9][11]')

create domain Email as Stringa(20)
	check (value  ~'[a-zA-Z0-9_.±]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]' )

create domain Telefono as char(10)
	check (value ~' [0-9][10]')
