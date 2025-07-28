'''
Scrivere un programma PYTHON che a partire da una stringa la cifra con la tecnica XOR
Successivamente mostrare che la stringa cifrata, riapplicando lo stesso XOR, torna la stringa originale
Per fare lo XOR utilizzate un solo valore: 57
Quindi data la stringa di esempio “Nel mezzo del cammin di nostra vita”, dovete fare per ogni carattere della stringa lo xor con il valore 57
“N” xor 57, “e” xor 57, …
Ottenendo una lista di numeri es: 78 (che è il codice asciii  della lettera N) xor (si indica con il simbolo ^) => 78 ^ 57 = 119
E così via per tutta la stringa.
Al termine stampare la lista di numeri ottenuti
In fondo a partire dalla lista di numeri, riapplicare lo xor sempre con 57 e quindi ottenere (ricostruendola) la stringa originale
NB: potreste utilizzare input(“…”) in modo da leggere sia la stringa da cifrare, sia il valore segreto da applicare come xor
'''

# per cifrare N con il numero 57

# N  = 78
# 78 ^ 57
# 119

# 199 ^ 57
# 78



msg = input("Dammi il messaggio: ")
key = int(input("Dammi la chiave: "))

cifrato = [ord(c)^key for c in msg]
# la precedente può essere scritta come un for semplice
cifrato=[]
for c in msg:
    cifrato.append(ord(c)^key)

print("Messaggio cifrato: ", cifrato)

# Ora decifro

#Uso la comprhension
decifrato = ''.join([chr(c^key) for c in cifrato])
# la precedente può essere scritta come un for semplice
decifrato = []
for c in cifrato:
    decifrato.append(chr(c^key))
decifrato = ''.join(decifrato)
print("Messaggio decifrato: ", decifrato)
# Nota: join è un metodo delle stringhe, non una funzione globale
# Quindi non posso fare join(cifrato) ma devo fare ''.join(cifrato)
# oppure usare join(cifrato) se cifrato è una lista di stringhe
# oppure ''.join(cifrato) se cifrato è una lista di caratteri
# oppure ''.join(map(chr, cifrato)) se cifrato è una lista di interi