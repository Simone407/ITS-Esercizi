from __future__ import annotations
from custom_types import *

class Cliente:
    _nome: str
    _email: Email
    _prenotazioni: set[Prenotazione]

    def __init__(self, nome: str, email: Email) -> None:
        self.set_nome(nome)
        self.set_email(email)
        self._prenotazioni = set()

    def set_nome(self, nome: str) -> None:
        self._nome = nome

    def set_email(self, email: Email) -> None:
        self._email = email

    def nome(self) -> str:
        return self._nome

    def email(self) -> Email:
        return self._email

    def prenotazioni(self) -> frozenset[Prenotazione]:
        return frozenset(self._prenotazioni)

    def _add_prenotazione(self, p: Prenotazione) -> None:
        self._prenotazioni.add(p)

    def __repr__(self):
        return f"Cliente({self._nome}, {self._email})"


class Ristorante:
    _nome: str
    _piva: PIVA
    _indirizzo: str
    _citta: str
    _cucine: set[str]
    _prenotazioni: set[Prenotazione]
    _promozioni: set[Promozione]
    _chiusure: set[BloccoPrenotazione]

    def __init__(self, nome: str, piva: PIVA, indirizzo: str, citta: str, cucine: set[str]) -> None:
        self._nome = nome
        self._piva = piva
        self._indirizzo = indirizzo
        self._citta = citta
        self._cucine = cucine
        self._prenotazioni = set()
        self._promozioni = set()
        self._chiusure = set()

    def nome(self) -> str: return self._nome
    def piva(self) -> PIVA: return self._piva
    def indirizzo(self) -> str: return self._indirizzo
    def citta(self) -> str: return self._citta
    def cucine(self) -> frozenset[str]: return frozenset(self._cucine)

    def promozioni(self) -> frozenset[Promozione]:
        return frozenset(self._promozioni)

    def prenotazioni(self) -> frozenset[Prenotazione]:
        return frozenset(self._prenotazioni)

    def _add_promozione(self, p: Promozione) -> None:
        self._promozioni.add(p)

    def _add_prenotazione(self, p: Prenotazione) -> None:
        self._prenotazioni.add(p)

    def __repr__(self):
        return f"Ristorante({self._nome}, {self._citta})"

