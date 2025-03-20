def calcola_media(lista):
    somma = 0
    conteggio = 0
    
    for numero in lista:
        somma += numero
        conteggio += 1
    
    if conteggio == 0:
        return 0

    media = somma / conteggio

    if media % 1 >= 0.5:
        return int(media) + 1
    else:
        return int(media)