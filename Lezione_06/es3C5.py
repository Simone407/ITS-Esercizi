mydict: dict = {}

n = int(input("Enter the number of entries: "))
print("inserire nome,ruolo ed età ")

for _ in range(n):
    
    key = input("Enter key: ")
    value = input("Enter value: ")
    mydict.update({key: value})

match mydict:

    case "admin":
        print("Accesso completo a tutte le funzionalità.")

    case "moderatore":
        print("Può gestire i contenuti ma non modificare le impostazioni.")

    case "utenteadulto":
        print("Accesso standard a tutti i servizi.")

    case "utenteminorenne":
        print("Accesso limitato! Alcune funzionalità sono bloccate.")

    case "ospite":
        print("Accesso ristretto! Solo visualizzazione dei contenuti.")

    case _:
        print("Attenzione! Ruolo non riconsciuto! Accesso Negato!")