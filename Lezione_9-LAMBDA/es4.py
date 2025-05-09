"Hai una lista di tuple studenti = [(Luca, 21), (Anna, 19), (Marco, 22)]. "
"Ordina la lista in base all’età (secondo elemento) usando sorted() e lambda."

studenti:tuple = [("Luca", 21), ("Anna", 19), ("Marco", 22)]

ordine:list[int] = (sorted(studenti, key=lambda age: len(age)))

print(ordine)



 D A  F I N I R E