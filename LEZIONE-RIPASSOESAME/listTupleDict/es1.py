from typing import Any

'''
1) Scrivi una funzione che converta una lista di tuple (chiave, valore) in un dizionario. Se
la chiave è già presente, somma il valore al valore già associato alla chiave.
'''


lista_tuple = [(1,"a"),(2,"b"),(3,"c")]

def convert(lista: list[tuple]) -> dict:
    dizionario1: dict = {Any,Any}
    
    for key,value in lista:
    
        if key in dizionario1:
            dizionario1[key] += value
        else:
            dizionario1[key] = value

    
    return dizionario1

