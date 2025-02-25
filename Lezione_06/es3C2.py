voto:int = int(input("inserisci il voto di laurea: "))

match voto:

    case x if 106 <= x <= 110:
        print("il voto in GPA è 4.0")

    case x if 101 <= x <= 105:
        print("il voto in GPA è 3.7")

    case x if 96 <= x <= 100:
        print("il voto in GPA è 3.3")

    case x if 91 <= x <= 95:
        print("il voto in GPA è 3.0")

    case x if 86 <= x <= 90:
       print("il voto in GPA è 2.7")

    case x if 81 <= x <= 85:
        print("il voto in GPA è 2.3")

    case x if 76 <= x <= 80:
        print("il voto in GPA è 2.0")
        
    case x if 70 <= x <= 75:
        print("il voto in GPA è 1.7")

    case x if 66 <= x <= 69:
        print("il voto in GPA è 1.0")

    case _:
        print("voto non valido")