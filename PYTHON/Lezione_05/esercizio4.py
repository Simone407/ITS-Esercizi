numeri = []
while True:
    num = float(input("Inserisci un numero reale non negativo: "))
    if num < 0:
        break
    numeri.append(num)
interi = [n for n in numeri if n.is_integer()]
media_interi = sum(interi) / len(interi) if interi else 0
print(f"Media dei numeri interi: {media_interi}")
print(f"Numero massimo: {max(numeri)}")
print(f"Numero minimo: {min(numeri)}")