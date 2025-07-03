'''
scrivere una funzione ricorsiva in Python, chiamata printListBackward() che stampi in output gli elementi di una lista in ordine inverso, sfruttando la ricorsione.
Infine, scrivere un codice driver che, date le seguenti liste, stampi ogni lista in ordine inverso sfruttando la funzione ricorsiva implementata.

lista1: 1, 2, 3, 4, 5
lista2: "Armatura", "Bravura", "Cane", "Diamante", "Elefante", "Furfante"

'''

# def provaRicorsiva(l:list=[]):

#     for i in range(1,11):
#         l.append(i)

#     return l

# print(provaRicorsiva())



# FINIREEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE



def printListBackward1(l1:list=[1, 2, 3, 4, 5]):

    for i in range(l1):
        
        print(l1-1)

    return l1

print(printListBackward1())