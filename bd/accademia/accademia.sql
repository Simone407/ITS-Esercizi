CREATE TYPE Strutturato AS enum ('Ricercatore', 'Professore Associato', 'Professore Ordinario');
CREATE TYPE LavoroProgetto AS enum ('Ricerca e Sviluppo', 'Dimostrazione', 'Management', 'Altro');
CREATE TYPE LavoroNonProgettuale AS enum ('Didattica', 'Ricerca', 'Missione', 'Incontro Dipartimentale', 'Incontro Accademico', 'Altro');
CREATE TYPE CausaAssenza AS enum ('Chiusura Universitaria', 'Maternita', 'Malattia');

create table Persona (
  id int check(id >= 0) PRIMARY KEY,
  nome varchar(100) NOT NULL,
  cognome varchar(100) NOT NULL,
  posizione Strutturato NOT NULL,
  stipendio real check (stipendio >= 0) NOT NULL
);

create table Progetto (
  id int check (id >= 0) PRIMARY KEY,
  nome varchar(100) UNIQUE NOT NULL,
  inizio date NOT NULL,
  fine date NOT NULL,
  budget real check (budget >= 0) NOT NULL
);

create table WP (
  progetto int NOT NULL,
  id int NOT NULL,
  nome varchar(100) NOT NULL,
  inizio date NOT NULL,
  fine date NOT NULL,
  PRIMARY KEY (progetto, id),
  UNIQUE (progetto, nome),
  FOREIGN KEY (progetto) REFERENCES Progetto(id)
);

create table AttivitaProgetto (
  id int check (id >= 0) PRIMARY KEY,
  persona int NOT NULL,
  progetto int NOT NULL,
  wp int NOT NULL,
  giorno date NOT NULL,
  tipo LavoroProgetto NOT NULL,
  oreDurata int check(oreDurata >= 0 AND oreDurata <= 8) NOT NULL,
  FOREIGN KEY (persona) REFERENCES Persona(id),
  FOREIGN KEY (progetto, wp) REFERENCES WP(progetto, id)
);

create table AttivitaNonProgettuale (
  id int check (id >= 0) PRIMARY KEY,
  persona int NOT NULL,
  tipo LavoroNonProgettuale NOT NULL,
  giorno date NOT NULL,
  oreDurata int check (oreDurata >= 0 AND oreDurata <= 8) NOT NULL,
  FOREIGN KEY (persona) REFERENCES Persona(id)
);

create table Assenza (
  id int check (id >= 0) PRIMARY KEY,
  persona int NOT NULL,
  tipo CausaAssenza NOT NULL,
  giorno date NOT NULL,
  UNIQUE(persona, giorno),
  FOREIGN KEY (persona) REFERENCES Persona(id)
);
