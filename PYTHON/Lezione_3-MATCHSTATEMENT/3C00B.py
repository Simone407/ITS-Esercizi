nome: str = input("inserisci il tuo nome: ")
genere: str = input("inserisci il tuo genere (m o f): ")

match genere:

    case("f"):
        print(f"{nome}, femmina")

    case("m"):
        print(f"{nome}, maschio")

    case _:
        print(
            f"Mi dispiace {nome}, non e' possibile procedere con la generazione di un documento di identità!")
