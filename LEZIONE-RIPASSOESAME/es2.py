'''
2 - Scrivi una funzione che prenda una lista di numeri e ritorni un dizionario che
classifichi i numeri in liste separate per numeri positivi e negativi.
'''

lista: list[float|int] = [1,2,3,6,7,8,-4,5,-21]

def numeri(lista:list[float|int]) -> dict[str, list[float|int]]:

    dizionario: dict[str, list[float|int]] = {'positivi': [], 'negativi': []}

    for element in lista:

        if element >= 0:
            dizionario['positivi'].append(element)

        else: 
            dizionario['negativi'].append(element)       


    return dizionario



print(numeri(lista))