'''Progettare un algoritmo che chieda all’utente di inserire due valori interi positivi 𝐴 e 𝐵 con 𝐴 < 𝐵. 
Se i valori non rispettano le condizioni, mostrare un messaggio di errore e terminare.
 Se i valori sono validi, calcolare la somma di tutti i numeri interi compresi tra 𝐴 e 𝐵 (inclusi) e mostrare il risultato.'''

print("inserire due valori interi positivi a e b, con a < b")

a = int(input("a: "))
b = int(input("b: "))

if a < b:
    sum = 0
    for i in range(a,b):
       i+=i
       sum = sum + i
        
    print(sum)
    
else: 
    print("errore")