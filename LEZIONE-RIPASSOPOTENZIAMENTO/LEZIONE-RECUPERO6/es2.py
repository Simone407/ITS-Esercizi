'''

Scrivere un programma in Python che legga dall’utente una serie di nomi di persona (stringhe). L'inserimento dei nomi deve terminare quando l’utente inserisce un nome già inserito in precedenza, oppure sono stati inseriti 30 nomi distinti. Inoltre, si deve porre il vincolo che ciascun nome sia una stringa di lunghezza inferiore a 20 caratteri e che non venga inserita una stringa vuota.

Al termine dell'inserimento, il programma deve:
- stampare quanti nomi sono stati inseriti in totale;
- stampare il nome più lungo tra quelli inseriti;
- stampare la lunghezza del nome più lungo.

Se ci sono più nomi con la stessa lunghezza massima, puoi scegliere uno qualsiasi tra quelli più lunghi.

'''


while True:
    str1 = str(input("Scegli il nome di una persona: "))
    str2 = str(input("Scegli il nome di una persona: "))
    str3 = str(input("Scegli il nome di una persona: "))
    str4 = str(input("Scegli il nome di una persona: "))
    str5 = str(input("Scegli il nome di una persona: "))



    nomi:list[str] = [str1,str2,str3,str4,str5]

    seq: list[str] = []

    seq.append(nomi)



    # for i in range(nomi):   

    #     if nomi[i] == nomi[i] or len(nomi) > 30 :

        
         
    #         break
            
    #     if len(nomi[i] >= 20):
    #         break

        
    nomegrande = nomi[0]

    for nome in nomi[1:]:
        if len(nome) > len(nomegrande):
            nomegrande = nome


    print("Il numero di nomi inseriti sono: ", len(nomi))

    print("Hai inserito i seguenti nomi: ", *seq)

    print(f"il nome più lungo della lista è  {nomegrande} con {len(nomegrande)} caratteri")