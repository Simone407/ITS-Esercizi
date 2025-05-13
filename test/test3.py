
#class Prova:
#
#    def funzione(self) -> str:
#        return  "successo !"
#    


#f:Prova = Prova()

#print(f.funzione()) 



class Aereo:

    def __init__(self,compagnia:str,modello:str,partenza:str,arrivo:str):
        
        self.compagnia = compagnia
        self.modello = modello
        self.partenza = partenza
        self.arrivo = arrivo

    
    def display(self) -> str:
        return f"\n {self.compagnia} \nmodello: {self.modello} \naereoporto di partenza: {self.partenza} \naeroporto di arrivo: {self.arrivo}"
    

class Posti(Aereo):

    def __init__(self, compagnia, modello, partenza, arrivo):
        super().__init__(compagnia, modello, partenza, arrivo)

    

aereo: Aereo = Aereo("ITA airways","A380","Roma Fiumicino","Milano Linate")

print(aereo.display())