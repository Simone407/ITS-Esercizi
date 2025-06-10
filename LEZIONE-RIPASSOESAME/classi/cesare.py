from string import ascii_lowercase
from string import ascii_lowercase as letters



res = ascii_lowercase

alfabeto: list = [res]
numeri: list = []




def caesar_cypher_encrypt(s:str, key:int):
    pass


def caesar_cypher_decrypt(s, key):
    pass




for i in range(len(alfabeto)):
    print(alfabeto[i])




numbers = list(map(str, range(1, len(letters)+1)))

let_to_num = dict(zip(letters, numbers))
num_to_let = dict(zip(numbers, letters))

x = input('Inserisci la lettera o il numero (a-z) (1-26): ')



print(let_to_num.get(x) or num_to_let.get(x))





# prova 2 


""" from string import ascii_lowercase                          # CTRL + SHIFT + A      PER METTERE E TOGLIERE COMMENTI
from string import ascii_lowercase as letters



res = ascii_lowercase

alfabeto: list = [res]
numeri: list = []




def caesar_cypher_encrypt(s:str, key:int):

    s = input('Inserisci la lettera o il numero (1-26): ')
    key = input("chiave da inserire: ")

    for k in s:
        
        s = s + k

    return s


def caesar_cypher_decrypt(s, key):
    pass


for i in range(len(alfabeto)):
    print(alfabeto[i])




numbers = list(map(str, range(1, len(letters)+1)))

let_to_num = dict(zip(letters, numbers))
num_to_let = dict(zip(numbers, letters))

s = input('Inserisci la lettera o il numero (1-26): ')



print(let_to_num.get(s) or num_to_let.get(s))





caesar_cypher_encrypt(s,3)
 """


