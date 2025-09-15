from classi import *
from custom_types import *

italia: Nazione = Nazione(nome="Italia")

roma: Citta = Citta(nome="Roma",num_abitanti=IntGEZ(58))
milano: Citta = Citta(nome="Milano",num_abitanti=IntGEZ(47))


print(italia)
print(roma)
print(milano)

wizard_air: Compagnia = Compagnia(nome="Wizard Air",
                                  fondazione=IntGE1900(1985),
                                  citta=roma)

print(wizard_air)
print(f"Voli della compagnia: {wizard_air.voli()}")

fco: Aeroporto = Aeroporto(codice=CodiceIATA("FCO"),
                           nome="Aeroporto Internazionale Leonardo da Vinci")

print(fco)

v1: Volo = Volo(codice=CodiceVolo("W46061"), durata=IntGZ(105),
                compagnia=wizard_air)

print(v1)

print(f"Voli della compagnia: {v1.compagnia().voli()}")

v2: Volo = Volo(codice=CodiceVolo("VY1234"), durata=IntGZ(154),
                compagnia=wizard_air)


print(v2)

welling: Compagnia = Compagnia(nome="Welling", fondazione=IntGE1900(1995), citta=milano)

print(f"Voli della compagnia Wizard Air: {wizard_air.voli()}")
print(f"Voli della compagnia Welling: {welling.voli()}")

welling._add_volo(v2) # Non andrebbe fatto, c'è l'underscore!

print(f"Voli della compagnia Welling: {welling.voli()}")