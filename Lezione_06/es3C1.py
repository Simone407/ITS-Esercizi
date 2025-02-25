voto:int = int(input("inserisci il voto scolastico: "))

match voto:

    case 1|2|3:
        print("Gravemente Insufficiente!")

    case 4|5:
        print("Insufficiente!")

    case 6|7:
        print("Sufficiente!")

    case 8|9:
        print("Molto buono!")

    case 10:
        print("Eccellente!")

    case _:
        print("voto non valido")
