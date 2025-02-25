n = int(input("Inserisci il numero di euro disponibili: "))
barrette = n
buoni = n
while buoni >= 6:
    gratuite = buoni // 6
    barrette += gratuite
    buoni = buoni % 6 + gratuite
print(f"Numero barrette: {barrette}")
print(f"Buono sconto: {buoni}")