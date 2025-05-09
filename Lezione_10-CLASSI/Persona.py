
class Persona:

    def __init__(self, name:str, lastname:str, age:int):
        self.name = name
        self.lastname = lastname
        self.age = age
    
    def displayData(self) -> None:      
        print(f"Nome: {self.name}\nCognome: {self.lastname}\nEtà: {self.age}")


simone = Persona("Simone", "Mazzeo", "20")

simone.displayData()