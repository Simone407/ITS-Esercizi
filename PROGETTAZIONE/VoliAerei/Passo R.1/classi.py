from __future__ import annotations

from custom_types import *


class Nazione:
    _nome: str # mutabile, noto alla nascita

    def __init__(self, nome: str) -> None:
        self.set_nome(nome)

    def nome(self) -> str:
        return self._nome

    def set_nome(self, nome: str) -> None:
        self._nome = nome

    def __repr__(self) -> str:
        return f"Nazione {self.nome()}"


class Citta:
    _nome: str # mutabile, noto alla nascita
    _num_abitanti: IntGEZ # mutabile, noto alla nascita

    def __init__(self, nome: str, num_abitanti: IntGEZ) -> None:
        self.set_nome(nome)
        self.set_abitanti(num_abitanti)

    def nome(self) -> str:
        return self._nome

    def set_nome(self, nome: str) -> None:
        self._nome = nome

    def set_abitanti(self, num_abitanti: IntGEZ) -> None:
        self._num_abitanti = num_abitanti

    def num_abitanti(self) -> IntGEZ:
        return self._num_abitanti

    def __repr__(self) -> str:
        return f"Città {self.nome()}"


class Compagnia:
    _nome: str  # noto alla nascita
    _fondazione: IntGE1900  # immutabile noto alla nascita
    _comp_direz_citta: Citta # noto alla nascita
    _voli: set[Volo]

    def __init__(self, nome: str, fondazione: IntGE1900, citta: Citta) -> None:
        self.set_nome(nome)
        self._fondazione = fondazione
        self.set_citta(citta)
        self._voli = set()

    def set_nome(self, nome: str) -> None:
        self._nome = nome

    def nome(self) -> str:
        return self._nome

    def fondazione(self) -> IntGE1900:
        return self._fondazione

    def citta(self) -> Citta:
        return self._comp_direz_citta

    def set_citta(self, citta: Citta) -> None:
        self._comp_direz_citta = citta

    def voli(self) -> frozenset[Volo]:
        return frozenset(self._voli)

    def _add_volo(self, volo: Volo) -> None:
        self._voli.add(volo)

    def _remove_volo(self, volo: Volo) -> None:
        self._voli.remove(volo)

    def __str__(self) -> str:
        return f"Nome compagnia: {self.nome()} con anno di fondazione {self.fondazione()} e sede a {self.citta().nome()}"

    def __repr__(self) -> str:
        return f"Compagnia(nome={self.nome()}, fondazione={self.fondazione()}, sede={self.citta()})"



class Aeroporto:
    _codice: CodiceIATA  # immutabile noto alla nascita
    _nome: str  # noto alla nascita

    def __init__(self, codice: CodiceIATA, nome: str) -> None:
        self._codice = codice
        self.set_nome(nome)

    def nome(self) -> str:
        return self._nome

    def set_nome(self, nome: str) -> None:
        self._nome = nome

    def codice(self) -> CodiceIATA:
        return self._codice

    def __str__(self) -> str:
        return f"Codice IATA: {self._codice}, Nome Aeroporto: '{self._nome}'"

    def __repr__(self):
        return f"Aeroporto(Codice IATA={self.codice()}, nome={self.nome()})"


class Volo:
    _codice: CodiceVolo  #  immutabile noto alla nascita
    _durata: IntGZ  # noto alla nascita
    _compagnia: Compagnia # dall'associazione 'volo_comp' noto alla nascita, immutabile

    def __init__(self, codice: CodiceVolo, durata: IntGZ, compagnia: Compagnia) -> None:
        self._codice = codice
        self.set_durata(durata)
        self._compagnia = compagnia
        compagnia._add_volo(self)

    def set_durata(self, durata: IntGZ) -> None:
        self._durata = durata

    def codice(self) -> CodiceVolo:
        return self._codice

    def durata(self) -> IntGZ:
        return self._durata

    def compagnia(self) -> Compagnia:
        return self._compagnia


    def __str__(self) -> str:
        return f"Volo {self._codice} con durata {self._durata} minuti"

    def __repr__(self):
        return f"Volo(codice={self.codice()}, durata={self.durata()})"