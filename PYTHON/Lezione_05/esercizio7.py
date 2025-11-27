n = int(input("Inserisci la lunghezza delle liste: "))
a = [int(input(f"Elemento {i+1} di A: ")) for i in range(n)]
b = [int(input(f"Elemento {i+1} di B: ")) for i in range(n)]
c = [a[i] + b[-(i+1)] for i in range(n)]
print(f"Lista A: {a}")
print(f"Lista B: {b}")
print(f"Lista C: {c}")
