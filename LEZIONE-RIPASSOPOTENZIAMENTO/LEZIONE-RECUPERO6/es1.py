'''
Un palindromo è una stringa che non cambia anche se letta al contrario, come la stringa "radar". Si scriva una funzione ricorsiva chiamata recursivePalindrome() che accetti in input un parametro di tipo stringa e restituisca True se l'argomento è un palindromo e False altrimenti.

Non si tenga conto degli spazi nella stringa e non si faccia distinzione tra lettere maiuscole e minuscole.

La funzione dovrebbe considerare palindrome le seguenti stringhe:
"radar"
"Anna"
" I topi non avevano nipoti"

La funzione non dovrebbe considerare palindrome le seguenti stringhe:
"casa"
"Marta"
"Roma e Amore"

Suggerimento: usare la funzione replace() per sostituire gli spazi con una stringa vuota.
'''


def recursivePalindrome(a: str):

    x: str = ""
    is_palindrome = True

    b = a.lower().replace(" ", x)

    if b == b[::-1]:
        return is_palindrome

    else:
        is_palindrome = False

    return is_palindrome


print("----------------")

print("ciao come va?: ", recursivePalindrome("ciao come va?"))

print("----------------")

print("radar: ", recursivePalindrome("radar"))
print("Anna: ", recursivePalindrome("Anna"))
print("i topi non avevano nipoti: ",
      recursivePalindrome("I topi non avevano nipoti"))

print("----------------")

print("Marta: ", recursivePalindrome("Marta"))
print("Roma e Amore: ", recursivePalindrome("Roma e Amore"))
print("Casa: ", recursivePalindrome("Casa"))

print("----------------")
