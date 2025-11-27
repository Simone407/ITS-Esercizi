
x = int(input("inserisci la cordinata x: "))
y = int(input("inserisci la cordinata y: "))

coordinate: tuple = (x,y)

match coordinate:

    case (0,0):
        print("il punto si trova nell'origine.")
    case (x,0):
        print("il punto si trova sull'asse x.")
    case(0,y):
        print("il punto si trova sull'asse y.")
    case (x,y) if x > 0 | y > 0:
        print("il punto si trova nel primo quadrante.")
    case (x,y) if x < 0 | y > 0:
        print("il punto si trova nel secondo quadrante.")
    case (x,y) if x < 0 | y < 0:
        print("il punto si trova nel terzo quadrante.")
    case (x,y) if x > 0 | y < 0:
        print("il punto si trova nel quarto quadrante.")