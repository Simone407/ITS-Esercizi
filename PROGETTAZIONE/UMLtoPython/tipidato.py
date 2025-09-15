from typing import Self, Any
import re




class CodiceFiscale(str):
	# gli oggetti di questa classe sono stringhe
	# che rispettano il formato del codice fiscale
	
	
	def __new__(cls, cf:str)-> Self:
	cff: str = cf.upper().strip() # rendo la stringa maiuscola e senza spazi
	if re.fullmatch(r'^[A-Z]{6}\d{2}[A-Z]\d{2}[A-Z]\d{3}[A-Z]$',cff):
		return super().__new__(cls,cf)
		
		
	raise ValueError(f"La stringa '{cff}' non è un codice fiscale valido")


	
class CodiceFiscaleBrutto:


	cf: str
	
	
	def __init__(self,cf:str) -> None:
	  cff: str = cf.upper().strip() # rendo la stringa maiuscola e senza spazi
		if re.fullmatch(r'^[A-Z]{6}\d{2}[A-Z]\d{2}[A-Z]\d{3}[A-Z]$',cff):
			self.cf = cff
		else: 
			raise ValueError(f"La stringa '{cff}' non è un codice fiscale valido")

class CAP(str):
	def __new__(cls,cap:str)->Self:
		if re.fullmatch(r'^\d{5}$',cap):
			return super().__new__(cls,cap)
			
		raise ValueError(f"la stringa '{cap}' non è valida")
		
		
		
class RealGEZ(float):
	# Tipo di dato specializzato Reale >= 0 
	def __new__(cls, v: float|int|str|bool|Self)
	    n: float = float.__new__(cls,v) # prova a convertire v in un float
	    
	    if n >=0: 
	    	return n
	    else:
	    	raise ValueError(f"il valore '{n}' è negativo")
	    	
	    	
class Valuta():
	def __new__(cls,v:str)->Self:
		if re.fullmatch(r'^\d[A-Z]{3}$',v):
			return super().__new__(cls,v)
			
		raise ValueError(f"la stringa '{v}' non è una valuta valida")    



class Denaro():

	# rappresenta il tipo di dato concettuale composto da:
	# - importo: Reale
	# - valuta: Valuta
	
	_importo: float
	_valuta: Valuta
	
	def __init__(self,imp: float, valuta: Valuta) -> None:
		self._importo = imp
		self._valuta = val
		
	def importo(self) -> float:
		return self._importo
		
	def valuta(self) -> Valuta:
		return self._valuta

	def __str__(self) -> str:
		return f"{self.importo()} {self.valuta()}"
		
	def __repr__(self) -> str:
		return f"Denaro: {self.importo()} unità in valuta {self.valuta()}"
		
	def __hash__(self) -> int:
		return hash((self.importo(),self.valuta()))
	
	def __eq__(self, other: Any) -> bool:
		if not isistance(other, type(self)) or \
			hash(self) != hash(other):
			return False
		return self.importo() == other.importo() and \
			self.valuta() == other.valuta()	
	
	def __add__(self, other:Self) -> Self:
		"""Somma self ad un'altra istanza di Denaro, ma solo se la valuta è la stessa.
		Restituisce una nuova istanza di Denaro
		"""
		
		if self.valuta() != other.valuta():
			raise ValueError ("Non posso sommare importi di valutre 			diverse"'{self.valuta()} 'e'{other.valuta()}')
		somma: float = self.importo()+other.importo()
		return Denaro(somma, self.valuta())
		
		
		
		
class FloatDenaro(float) 
	_valuta: Valuta
	def __new__(cls, imp:float, val:Valuta) -> Self:
	d = super().__new__(cls, imp)
	
	d._valuta = val
	
	return d
	
	def importo(self) -> float:
		return self.real
		
	def valuta(self) -> Valuta:
		return self._valuta
	
	
	def __str__(self) -> str:
		return f"{self.importo()} {self.valuta()}"
		
	def __repr__(self) -> str:
		return f"Denaro: {self.importo()} unità in valuta {self.valuta()}"
		
	def __hash__(self) -> int:
		return hash((self.importo(),self.valuta()))
	
	def __eq__(self, other: Any) -> bool:
		if not isistance(other, type(self)) or \
			hash(self) != hash(other):
			return False
		return self.importo() == other.importo() and \
			self.valuta() == other.valuta()	
	
	def __add__(self, other:Self) -> Self:
		"""Somma self ad un'altra istanza di Denaro, ma solo se la valuta è la stessa.
		Restituisce una nuova istanza di Denaro
		"""
		
		if self.valuta() != other.valuta():
			raise ValueError ("Non posso sommare importi di valutre diverse"'{self.valuta()} 'e'{other.valuta()}')
		somma: float = self.importo()+other.importo()
		return FloatDenaro(somma, self.valuta())
		
	def __sub__(self, other: Self) -> Self:
		return self + FloatDenaro(-other, other.valuta())
		
		

