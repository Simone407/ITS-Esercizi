from  typing import Callable

'''
Esercizio 2 – Somma di due numeri
Crea una funzione lambda che accetti due numeri e restituisca la loro somma.
'''

somma:Callable[[float,float],float] = lambda x,y: x+y

print(somma(4.24,6.16))