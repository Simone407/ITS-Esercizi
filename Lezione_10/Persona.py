
class Persona:
    
    '''
    di una persona dobbiamo sapere delle informazioni. 
    queste informazioni vengono chiamate attributi della classe persona
    saranno:
        nome   
        cognome
        età
    
        
    come li rappresento in python?

    self.name:str (attributo tipo stringa)
    self.lastnamestr (attributo tipo stringa)
    self.age:int (attributo tipo int)


    '''

    #costruttore classe persona

    def __init__(self, name:str, lastname:str, age:int):
        self.name = name
        self.lastname = lastname
        self.age = age

    # funzione che mostri in output i dati di una perona
    
    def displayData(self) -> None:      
        print(f"Nome: {self.name}\nCognome: {self.lastname}\nEtà: {self.age}")


fm:Persona = Persona("Simone", "Mazzeo", "20")

print(fm)

# mostra i dati di una persona

fm.displayData()