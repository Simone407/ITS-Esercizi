
class Persona:
    def __init__(self):
        self.name = ""
        self.lastname = ""
        self.age = 0


    def setName(self, name:str) -> None:
        self.name = name


    def setLastname(self, lastname:str) -> None:
        self.lastname = lastname
 

    def setAge(self, age:int) -> None:
        self.age = age
        if age < 0 or age > 130:
            self.age = 0    
        else:
            self.age = age


    def getName(self) -> str:
        return self.name
    

    def getLastname(self) -> str:
        return self.lastname


    def getAge(self) -> str:
        return self.age

def displayData(self) -> None:      
    print(f"Nome: {self.name}\nCognome: {self.lastname}\nEtà: {self.age}")


persona = Persona()

persona.setName("Simone")

persona.setLastname("Mazzeo")

persona.setAge(20)


print("-------------")
print(persona.getName(), persona.getLastname(), persona.getAge())