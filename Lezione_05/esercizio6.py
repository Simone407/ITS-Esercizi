n1, n2 = int(input("n1: ")), int(input("n2: "))
if n1 > n2:
    n1, n2 = n2, n1
prodotto = 1
for i in range(n1, n2 + 1):
    prodotto *= i
print(f"Prodotto dei numeri tra {n1} e {n2}: {prodotto}")