from persona import Persona


class Studente(Persona):

    '''
    attributi Persona ereditati
    self.name       str
    self.lastname   str
    self.age        int


    attributi nuovi per Studente
    self.matricola  str


    '''

    # inizializzazione oggetto classe Studente
    def __init__(self, name: str, lastname: str, age: int, matricola: str):

        # inizializzare classe Persona richimando init della superclasse
        super().__init__(name, lastname, age)

        # istruzioni che inizializzano uno oggetto della classe Studente

        self.setMatricola(matricola)

    # metodi setter

    # metodo che imposta il valore attributo self.matricola
    def setMatricola(self, matricola: str) -> None:

        if matricola:
            self.matricola = matricola
        else:
            print("matricola non può essere rappresentata da una stringa vuota")

    # metodi getter

    # metodo che ritorna il valore attributo self.matricola

    def getMatricola(self) -> str:
        return self.matricola

    # ridefinire il modulo __str__

    def __str__(self) -> str:
        return f"\nNome: {self.name}\nCognome: {self.getLastname()}\nMatricola: {self.getMatricola()}"
