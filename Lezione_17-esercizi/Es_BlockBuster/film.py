
# In un file chiamato "film.py", si definisca la classe Film che rappresenta un film preso a nolleggio. In tale classe, definire un codice identificativo (int) ed un titolo (string). Entrambi gli attributi sono da considerarsi privati.
 
# - Definire i seguenti metodi:
# init(id, title): metodo costruttore.
# setID(id): che consente di impostare il codice identificativo del film, modificando il valore del relativo attributo.
# setTitle(title): che consente di impostare il codice identificativo del film, modificando il valore del relativo attributo.
# getID(): che consente di ritornare il valore del codice identificativo di un film.
# getTitle(): che consente di ritornare il valore del titolo di un film.
# isEqual(otherFilm): che ritorna true se il codice identificativo di due film è uguale.  




class Film():

    def __init__(self,_id, _title):
        self._id = _id
        self._title = _title


    def SetID(self,_id):
        _id = 1

    def SetTitle(self, _title):
        _title


    def GetID(self,_id, _title):
        
        return _id


    def GetTitle(self,_id, _title):
        
        return _title



    def isEqual(self,_id,otherFilm):
        
        if _id[i] == _id[i+1]:

            return True
        