#esempi di come creare tipi di dato con classi python per ristrutturazione UML e altro...

from typing import Self, Any
from enum import *


class Genere(StrEnum):

    uomo = auto()
    donna = auto()


print(Genere.uomo.upper())
print(Genere.donna)
print(type(Genere.donna))




class Continente(StrEnum):
    europa = auto()
    asia = auto()
    america = auto()
    oceania = auto()
    africa = auto()
    antartide = auto()


print(Continente.europa)
print(Continente.europa.capitalize())




class Color(Enum):
    red = 1
    green = 2
    blue = 3
    yellow = 4
    black = 5
    white = 6
    purple = 7
    orange = 8
    pink = 9
    brown = 10




print(Color.red.name)




class Voto(int):
    def __new__(cls,v:int|float|Self) -> Self:

        if v < 18 or v > 30:
            raise ValueError(f"Voto non valido: {v}, deve essere compreso tra 18 e 30")
        else:
            print("Passato")
        return int.__new__(cls, v)



v18: Voto = Voto(18)
v18: Voto = Voto(29)
v18: Voto = Voto(15)




class Indirizzo():
    _via: str
    _civico: int
    _cap: int
    _citta: str
    _provincia: str
    _regione: str
    _nazione: str


    def __init__(self, via: str, civico: int, cap: int, citta: str, provincia: str, regione: str, nazione: str) -> None:
        self._via = via
        self._civico = civico
        self._cap = cap
        self._citta = citta
        self._provincia = provincia
        self._regione = regione
        self._nazione = nazione

    def via(self) -> str:
        return self._via
    
    def civico(self) -> int:
        return self._civico
    
    def cap(self) -> int:  
        return self._cap
    
    def citta(self) -> str:
        return self._citta
    
    def provincia(self) -> str:
        return self._provincia
    
    def regione(self) -> str:
        return self._regione
    
    def nazione(self) -> str:
        return self._nazione
    

    def __hash__(self) -> int:
        return hash((self._via, self._civico, self._cap, self._citta, self._provincia, self._regione, self._nazione))
    

    def __eq__(self, other: Any) -> bool:
        if  other is None or \ 
                not isinstance(other, type(self)) or \
                hash(self) != hash(other):
            
                return False

        return self.via() == other.via() and self.civico() == other.civico()
        
    



casa: Indirizzo = Indirizzo("Via Roma", 1, 00100, "Roma", "RM", "Lazio", "Italia")
print(casa.via())





class CodiceFiscale(str):
    def __new__(cls, cf: str) -> Self:
        if len(cf) != 16:
            raise ValueError(f"Codice Fiscale non valido: {cf}, deve essere lungo 16 caratteri")
        else:
            print("Passato")
        return str.__new__(cls, cf)