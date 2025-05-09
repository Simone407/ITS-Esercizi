
class Persona:
    def __init__(self, name: str, lastname: str, age: int):
        self.setName(name)
        self.setLastname(lastname)
        self.setAge(age)

    def __str__(self) -> str:

        return f"\nNome: {self.name}\nCognome: {self.lastname}\nEtà: {self.age}"

    def __call__(self):
        if self.age < 18:
            print(f"{self.name} {self.lastname} è minorenne")
        elif 18 <= self.age < 30:
            print(f"{self.name} {self.lastname} è maggiorenne!")
        elif 30 <= self.age < 80:
            print(f"{self.name} {self.lastname} è una persona adulta!")
        else:
            print(f"{self.name} {self.lastname} è una persona anziana!")

    def setName(self, name: str) -> None:
        if name:
            self.name = name
        else:
            print("error")

    def setLastname(self, lastname: str) -> None:
        if lastname:
            self.lastname = lastname
        else:
            print("error")

    def setAge(self, age: int) -> None:
        if age < 0 or age > 130:
            self.age = 0
        else:
            self.age = age

    def getName(self) -> str:
        return self.name

    def getLastname(self) -> str:
        return self.lastname

    def getAge(self) -> int:
        return self.age

    def speak(self) -> None:
        print(f"Hello my name is {self.getName()} ! ")