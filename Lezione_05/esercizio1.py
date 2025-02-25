words = []
while True:
    word = input("Inserisci una parola: ")
    if word.lower() == "fine":
        break
    if word[0] == word[-1]:
        print(f"La parola '{word}' ha la prima e l'ultima lettera uguali.")
    else:
        print(f"La parola '{word}' NON ha la prima e l'ultima lettera uguali.")

