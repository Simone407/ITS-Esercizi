class Alieno:
    def __init__(self,galaxy:str):
        self.setGalaxy(galaxy)


    
    def setGalaxy(self,galaxy:str) -> None:
        if galaxy:
            self.galaxy = galaxy
        else:
            print("errore")



    def getGalaxy(self) -> str:
        return self.galaxy
    
    
    def speak(self) -> None:
        print("bvjksdkvuwdjcb")

    def __str__(self) -> str:
        return f"Alieno proveniente da {self.getGalaxy()}"