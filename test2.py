
class Desktop:
    def __init__(self,motherboard:str, ram:str, processor:str,graphicard:str,ssd:str) -> None:
          
        self.motherboard = motherboard
        self.ram = ram
        self.processor = processor
        self.graphicard = graphicard
        self.ssd = ssd
          

class Computer(Desktop):

    def __init__(self, motherboard:str, ram:str, processor:str,graphicard:str,ssd:str,alimentatore:str):
        
        super().__init__(motherboard, ram, processor, graphicard, ssd)
        self.alimentatore = alimentatore
         
        print(f"Scheda madre: {motherboard}\nRAM: {ram}\nProcessore: {processor}\nScheda video: {graphicard}\nArchiviazione: {ssd}\nAlimentatore: {alimentatore}")


class Cellulare:

    def __init__(self,marca:str,pollici:float,mgfotocamera:int,memoria:int,colore:str) -> None:

        self.marca = marca
        self.pollici = pollici
        self.mgfotocamera = mgfotocamera
        self.memoria = memoria
        self.colore = colore

        
class Smartphone(Cellulare):

    def __init__(self, marca, modello:str,pollici, mgfotocamera, memoria, colore,):
        super().__init__(marca, pollici, mgfotocamera, memoria, colore)

        self.modello = modello

        print(f"Marca: {marca}\nModello: {modello}\nPollici: {pollici}\nMega Pixel fotocamera: {mgfotocamera}\nMemoria: {memoria}\ncolore: {colore}")

print("\n----------------------------")

print("   PRIMA CONFIGURAZIONE")

print("\n----------------------------")

print("\tCOMPUTER")

print("----------------------------")
computer = Computer("B450+","32GB","Intel i7 19700K", "Radeon 6700xt","980pro 2TB","850W") 
print("----------------------------")
print("\n----------------------------")

print("\tSMARTPHONE")

print("----------------------------")
tel = Smartphone("Iphone","16 pro max",16.9,48,256,"deep black") 
print("----------------------------")



print("\n----------------------------")

print("   SECONDA CONFIGURAZIONE")


print("\n----------------------------")

print("\tCOMPUTER 2")

print("----------------------------")
computer2 = Computer("Z790","32GB","RYZEN 7 7500X", "RTX 5090","990pro 4TB","950W") 
print("----------------------------")
print("\n----------------------------")

print("\tSMARTPHONE 2")

print("----------------------------")
tel2 = Smartphone("Samsung","S25 Ultra",16.9,48,512,"white") 
print("----------------------------")