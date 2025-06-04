'''
3 Scrivi una funzione che accetti un dizionario di prodotti con i relativi prezzi e
restituisca un nuovo dizionario con solo i prodotti che hanno un prezzo inferiore a 50, ma
con i prezzi aumentati del 10% e arrotondati a due cifre decimali.
''' 



mydict: dict[str, float] = {
    'prodotto1': 30.0,
    'prodotto2': 60.0,
    'prodotto3': 45.0,
    'prodotto4': 80.0,
    'prodotto5': 20.0
}


def es3(dict1:dict) -> dict:

    dict_new: dict = {}

    for k, v in dict1.items():
        if v <= 50:
            dict_new[k] = v + (v * 0.1)

        else: 

            continue


    return dict_new



print(es3(mydict))