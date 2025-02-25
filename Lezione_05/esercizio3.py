frase = input("Inserisci una frase: ")
frase_inversa = ""
for char in frase[-1]:
    frase_inversa += char
print(f"Stringa invertita: {frase_inversa}")