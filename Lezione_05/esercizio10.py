numeri = []
while True:
    num = int(input("Inserisci un numero (0 per terminare): "))
    if num == 0:
        break
    numeri.append(num)
pari = sum(n for n in numeri if n % 2 == 0)
dispari = [n for n in numeri if n % 2 != 0]
media_dispari = sum(dispari) / len(dispari) if dispari else 0
from collections import Counter
conta = Counter(numeri)
massimi = [n for n, v in conta.items() if v == max(conta.values())]
print(f"Somma dei numeri pari: {pari}")
print(f"Media dei numeri dispari: {media_dispari:.2f}")
print(f"Numero più frequente: {massimi} ({max(conta.values())} volte)")