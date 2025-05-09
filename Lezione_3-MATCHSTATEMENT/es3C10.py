
data = (input("inserire una data nel formato numerico: es. 0101: "))
date:tuple = (data)

match date:

    case ("0101"):
        print("Capodanno")
    case ("1402"):
        print("San Valentino")
    case("0206"):
        print("Festa della Repubblica Italiana")
    case ("1508"):
        print("Ferragosto")
    case ("3110"):
        print("Halloween")
    case ("2512"):
        print("Natale")
    case _:
        print("Nessuna festività importante in questa data")