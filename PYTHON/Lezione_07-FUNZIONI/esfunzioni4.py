
def check_lenght(a: str):

    if len(a) < 10:
        print("la stringa è più piccola di 10 caratteri")
    elif len(a) > 10:
        print("la stringa è più grande di 10 caratteri")
    elif len(a) == 10:
        print("la stringa è uguale 10 caratteri")


mylenght = check_lenght("esercizio sulle funzioni in python")

print(mylenght)
