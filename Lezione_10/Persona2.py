
class Persona:
    def __init__(self):
        self.name = ""
        self.lastname = ""
        self.age = 0

    def displayData(self) -> None:      
        print(f"Nome: {self.name}\nCognome: {self.lastname}\nEtà: {self.age}")

    # mi consente di imnpostare un valore per self.name
    def setName(self, name:str) -> None:
        self.name = name

    # mi consente di imnpostare un valore per self.lastname
    def setLastname(self, lastname:str) -> None:
        self.lastname = lastname
 
    # mi consente di imnpostare un valore per self.lastname
    def setAge(self, age:int) -> None:
        self.age = age
        if age < 0 or age > 130:
            self.age = 0    
        else:
            self.age = age

    #ritorna il valore di self.name
    def getName(self) -> str:
        return self.name
    
    #ritorna il valore di self.lastname
    def getLastname(self) -> str:
        return self.lastname

    #ritorna il valore di self.age
    def getAge(self) -> str:
        return self.age


# crea un oggetto di tipo Persona
fm:Persona = Persona()

#stampa i dati della persona creata
fm.displayData()

# impostare il nome di una persona
fm.setName("Simone")

# impostare il cognnome di una persona
fm.setLastname("Mazzeo")

# impostare il cognnome di una persona
fm.setAge(20)

fm.displayData()

print("-------------")
print(fm.getName(), fm.getLastname(), fm.getAge())