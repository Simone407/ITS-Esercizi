from math import gcd


class Frazione:

    def __init__(self):

        self._nominatore = 0
        self._denominatore = 1


    def setNominatore(self,_nominatore:int) -> None:

        self._nominatore = _nominatore 
       
        if isinstance(_nominatore, int):
            return True
        
        else:
            self._nominatore = 13


    def setDenominatore(self,_denominatore:int) -> None:

        self._denominatore = _denominatore 
       
        if isinstance(_denominatore, int) and _denominatore > 0:
                return True
        else:
            self._denominatore = 5



    def getNominatore(self) -> int:
        return self._nominatore
    

    def getDenominatore(self) -> int:
        return self._denominatore
    


  

    def value(self) -> None:
        return(f"Risultato numeratore/denominatore: {self._nominatore/self._denominatore,:.3f}")


    def __str__(self) -> None:      
        return f"Risultato numeratore/denominatore: {self._nominatore/self._denominatore:.3f}"
    





def mcd(self,x:int,y:int):

        while x > y and x < y:

            if x/y % 2 == 0:
                return(gcd(3, 6))
        
        else: 
            return 1






frazione1 = Frazione()


def __str__(self) -> str:      
    return f"Nominatore: {self._nominatore}\nDenominatore: {self._denominatore}"


frazione1.setNominatore(12)
frazione1.setDenominatore(18)


print(frazione1.getNominatore(), frazione1.getDenominatore())

