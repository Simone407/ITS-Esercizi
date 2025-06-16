


def esercizio5(lista: list[int], threshold: int = 50) -> int:

    prodotto_cumulato: int = 1


    for element in lista:

        if element < threshold:

            prodotto_cumulato *= element

        
    return prodotto_cumulato

