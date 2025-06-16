'''
2 - Scrivi una funzione che prenda una lista di numeri e ritorni un dizionario che
classifichi i numeri in liste separate per numeri positivi e negativi.
'''



def es2(lista: list[float|int]) -> dict[str, list[int|float]]:
    
    dizionario_1: dict[str, list[int|float]] = {"positivi": [], "negativi": []}
    
    
    for element in lista:
        
       if element >= 0:
           
           dizionario_1["positivi"].append(element) 
           
           
       else:
           
           dizionario_1["negativi"].append(element)
        
           
    return dizionario_1



print(es2([1,2,3,-6,7,8,-4,5,-21]))