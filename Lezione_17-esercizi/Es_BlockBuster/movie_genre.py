from film import *

# Si creino tre classi chiamate Azione, Commedia e Drama, tutte derivanti dalla classe Film. Ognuna di queste classi ha un attributo privato di tipo string chiamato genere, che equivale al genere di film (genere="Azione", nella classe Azione) ed un attributo privato di tipo float chiamato penale. I film di azione hanno una penalità di 3 euro al giorno, le commedie hanno una penale di 2.50 euro al giorno, i film drammatici hanno una penale di 2 euro al giorno.

# - Per ognuna di queste classi si implementi un metodo chiamato:
# getGenere(), che ritorna il genere di film
# getPenale(), che ritorna il valore della penale
# calcolaPenaleRitardo(), che prende in ingresso il numero dei giorni di ritardo per un film e restituisce la penale da pagare per quel film.
# Le tre classi Azione, Commedia e Drama devono essere contenute nel file "movie_genre.py".



class Azione(Film,_penale = 3.00):

    def __init__(self, _id, _title):
        super().__init__(_id, _title)

    def getGenere():
        return Azione

    def GetPenale(self, _penale):
        return _penale

    def CalcolaPenaleRitardo(self,giorni, _penale):
        
        giorni = input("giorni di ritardo: ") 

        return (giorni* _penale)    
    


class Commedia(Film,_penale = 2.50):

    def __init__(self, _id, _title):
        super().__init__(_id, _title)

    def getGenere():
        return Commedia

    def GetPenale(self, _penale):
        return _penale

    def CalcolaPenaleRitardo(self,giorni, _penale):
        
        giorni = input("giorni di ritardo: ") 

        return (giorni* _penale)



class Drama(Film,_penale = 2.00):

    def __init__(self, _id, _title):
        super().__init__(_id, _title)

    def getGenere():
        return Drama

    def GetPenale(self, _penale):
        return _penale

    def CalcolaPenaleRitardo(self,giorni, _penale):
        
        giorni = input("giorni di ritardo: ") 

        return (giorni* _penale)