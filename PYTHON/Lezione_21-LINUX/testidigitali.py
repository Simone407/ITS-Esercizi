

class Documento:
    def __init__(self, testo=""):
        self.testo = testo
    
    def getText(self):
        return self.testo
    
    def setText(self, testo):
        self.testo = testo
    
    def isInText(self, parola_chiave):
        return parola_chiave in self.testo



class Email(Documento):
    def __init__(self, mittente="", destinatario="", titolo="", messaggio=""):
        super().__init__(messaggio)  
        self.mittente = mittente
        self.destinatario = destinatario
        self.titolo = titolo
    

    def getMittente(self):
        return self.mittente
    
    def getDestinatario(self):
        return self.destinatario
    
    def getTitolo(self):
        return self.titolo
    
    def getMessaggio(self):
        return self.testo 
    

    def setMittente(self, mittente):
        self.mittente = mittente
    

    def setDestinatario(self, destinatario):
        self.destinatario = destinatario
    

    def setTitolo(self, titolo):
        self.titolo = titolo
    

    def setMessaggio(self, messaggio):
        self.testo = messaggio  
    

    def getText(self):
        return f"Da: {self.mittente}, A: {self.destinatario}\nTitolo: {self.titolo}\nMessaggio: {self.testo}"
    

    def writeToFile(self, percorso):

        try:
            with open(percorso, 'w') as file:
                file.write(self.getText())
            print(f"Email salvata con successo in: {percorso}")
        except:
            print("Errore nella scrittura del file")




class File(Documento):
    def __init__(self, nome_percorso):
        super().__init__()
        self.nome_percorso = nome_percorso
        self.creaELeggiFile()
    

    def creaELeggiFile(self):
        nome_file = self.nome_percorso + "/document.txt"
        
        try:
            with open(nome_file, 'w') as file:
                file.write("Questo e' il contenuto del file.")
            print(f"File creato: {nome_file}")
        except:
            print("Errore nella creazione del file")
        

        self.leggiTestoDaFile()
    


    def leggiTestoDaFile(self):
        nome_file = self.nome_percorso + "/document.txt"
        try:
            with open(nome_file, 'r') as file:
                self.testo = file.read()
        except:
            print("Errore")


    def getText(self):
        nome_file = self.nome_percorso + "/document.txt"
        return f"Percorso: {nome_file}\nContenuto: {self.testo}"









print("=== Test classe Documento ===")

doc = Documento("Questo è un documento di prova")
print("Testo:", doc.getText())
print("Contiene 'prova':", doc.isInText("prova"))
print("Contiene 'xyz':", doc.isInText("xyz"))
    


print("\n=== Test classe Email ===")

email = Email("alice@example.com", "bob@example.com", "Incontro", "Ciao Bob, possiamo incontrarci domani?")
print(email.getText())




    
email.writeToFile("email_test.txt")
    



print("\n=== Test classe File ===")

file_obj = File("./test_directory")
print(file_obj.getText())
    

