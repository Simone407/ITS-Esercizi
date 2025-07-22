'''

Scrivere un programma in Python che legga dall’utente una serie di nomi di persona (stringhe). L'inserimento dei nomi deve terminare quando l’utente inserisce un nome già inserito in precedenza, oppure sono stati inseriti 30 nomi distinti. Inoltre, si deve porre il vincolo che ciascun nome sia una stringa di lunghezza inferiore a 20 caratteri e che non venga inserita una stringa vuota.

Al termine dell'inserimento, il programma deve:
- stampare quanti nomi sono stati inseriti in totale;
- stampare il nome più lungo tra quelli inseriti;
- stampare la lunghezza del nome più lungo.

Se ci sono più nomi con la stessa lunghezza massima, puoi scegliere uno qualsiasi tra quelli più lunghi.

'''

nomi: list[str] = []
print("----------------")
print("Inserisci nomi di persone,\nPer terminare digita fine oppure un nome già inserito")
print("----------------")


while len(nomi) < 30:
    user_input = input("Scegli il nome di una persona: ")

    if user_input.lower() == "fine":
        break
    if user_input == "":
        break
    if user_input in nomi:
        break

    nomi.append(user_input)
    print("----------------")
    print("Lista Nomi:", nomi)

nomegrande = nomi[0]


for nome in nomi[1:]:
    if len(nome) > len(nomegrande):
        nomegrande = nome

seq: list[str] = []
seq.append(nomi)


print("----------------")


print("Il numero di nomi inseriti sono: ", len(nomi))

print("----------------")

print("Hai inserito i seguenti nomi: ", *seq)

print("----------------")

print(
    f"il nome più lungo della lista è  {nomegrande} con {len(nomegrande)} caratteri")


print("----------------")
