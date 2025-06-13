from typing import Self, Any
import re

# di voli. cambiare

class RealGEZ(float):
	# Tipo di dato specializzato Reale >= 0
	def __new__(cls, v: float|int|str|bool|Self) -> Self:
		n: float = float.__new__(cls, v) # prova a convertire v in un float

		if n >= 0:
			return n

		raise ValueError(f"Il valore {n} è negativo!")



class IntGE1900(int):
	# Tipo di dato specializzato Intero >= 1900
	def __new__(cls, v: float|int|str|bool|Self) -> Self:
		n: int = super().__new__(cls, v) # prova a convertire v in un int

		if n >= 1900:
			return n

		raise ValueError(f"Il valore {n} è minore di 1900!")

class IntGEZ(int):
	# Tipo di dato specializzato Intero >= 0 (Greater than or Equal to Zero)
	def __new__(cls, v: float|int|str|bool|Self) -> Self:
		n: int = super().__new__(cls, v) # prova a convertire v in un int

		if n >= 0:
			return n

		raise ValueError(f"Il valore {n} è minore di 0!")


class IntGZ(int):
	# Tipo di dato specializzato Intero > 0 (Greater than Zero)
	def __new__(cls, v: float|int|str|bool|Self) -> Self:
		n: int = super().__new__(cls, v) # prova a convertire v in un int

		if n > 0:
			return n

		raise ValueError(f"Il valore {n} non è positivo!")




