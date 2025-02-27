a = input("inserire un animale: ")

match a:

    case "cane"|"gatto"|"cavallo"|"elefante"|"leone":
        print("Mammiferi")

    case "serprente"|"lucertola"|"tartaruga"|"coccodrillo":
        print("Rettili")

    case "aquila"|"pappagallo"|"gufo"|"falco":
        print("Uccelli")

    case "squalo"|"trota"|"salmone"|"carpa":
        print("Pesci")

    case _:
        print("il programma non è in grado di classificare l'animale inserito.")