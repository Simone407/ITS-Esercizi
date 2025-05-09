"Usa reduce() (dal modulo functools) e una lambda per calcolare il prodotto di tutti gli elementi di una lista numeri = [2, 3, 4]."

from functools import reduce
from typing import Callable


lista:list[int] = [2,3,4,5,6,7,8,9]

numero:Callable[[int], int] = (reduce(lista, lambda a, b: a * b))


print(numero)



 D A  F I N I R E