import re

############################  LAMBDA COME ARGOMENTO FUNZIONE ##########################################
print ("########################################################################################################")
names:list[str] = ['Alice', 'Bob', 'Charlie','Alex','Timothy','Klaus','Simon','James','Wallace']

sorted_by_length:list[str] = sorted(names, key=lambda name: len(name))

print(sorted_by_length)
print ("########################################################################################################")


words:list[str] = ["abc123", "456", "43", "hello", "98abc", "test999","23.2"]
only_digits:list[str] = list(filter(lambda x: re.fullmatch(r"\d+", x), words))
print(only_digits) 

print ("########################################################################################################")

text:str = "Price: 100 dollars, Tax: 20 dollars"
new_text:str = re.sub(r"\d+", lambda m: str(int(m.group()) * 2), text)
print(new_text)


print ("########################################################################################################")


class Libro:
    def __init__(self):
        self.titolo:str = ""
        self.autore:str = ""
        self.genere:list[str] = []

    
    def set_titolo(self, titolo:str):
        self.titolo = titolo

    def set_autore(self, nome:str):
        self.autore = nome

    def set_genere(self, generi:list[str]) -> None:
        self.genere = generi

    
    def get_titolo(self) -> str:
        return self.titolo
    
    def get_autore(self) -> str:
        return self.autore
    
    def get_genere(self) -> list[str]:
        return self.genere
    


class Biblioteca:
    def __init__(self):
        self.libri:list[Libro] = []


    def aggiungi(self, libro:Libro) -> None:
        self.libri.append(libro)

    
    def lista_libri(self) -> str:
        for item in self.libri:
            print(item.get_titolo())

        

collezione:Biblioteca = Biblioteca()



libro1:Libro = Libro()
libro1.set_titolo("il piccolo principe")
libro1.set_autore("a boh")
libro1.set_genere(['narrativa','fantasy'])


libro2:Libro = Libro()
libro2.set_titolo("Harry Potter")
libro2.set_autore("J.K. Rowling")
libro2.set_genere(['fantasy'])


collezione.aggiungi(libro1)
collezione.aggiungi(libro2)



collezione.lista_libri()