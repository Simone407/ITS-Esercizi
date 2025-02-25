nome:str = input("inserisci il tuo nome: ")
genere:str = input("inserisci il tuo genere (m o f): ")

match genere:

    case ("f"):
        print(f"{nome}, {genere}")

    case ("m"):
       print(f"{nome}, {genere}")

    case _:
        print(f"errore, non è possibile generare un documento di identità.")


