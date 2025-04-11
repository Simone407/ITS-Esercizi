from typing import Callable

"Scrivi una funzione lambda che prenda un numero intero e ritorni il suo quadrato."

quadrato:Callable[[int],int] = lambda x: x ** 2

print(quadrato(4))