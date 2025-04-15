from persona import Persona
from studente import Studente


# creo un oggetto della classe Persona
fm: Persona = Persona("simone", "mazzeo", 20)


# visualizzare info oggetto fm
print(fm)


# creo oggetto classe Studente
studente1: Studente = Studente("mario", "rossi", 23, "545345345")


# visualizzare info oggetto studente1
print(studente1)


# controllo studente1 sia istanza classe Studente
# funzione: isistance(obj,Class) -> controllo se obj sia istanza classe Class | affermativo: True || negativo: False
if isinstance(studente1, Studente):
    print("\nstudente1 è istanza della classe Studente")


# controllare studente1 istanza classe Persona
if isinstance(studente1, Persona):
    print("\nstudente1 è anche istanza della classe Persona")


# controllare fm istanza classe Persona
if isinstance(fm, Persona):
    print("\noggetto fm è istanza della classe Persona")


# controllare fm istanza classe Studente
if isinstance(fm, Studente):
    print("\noggetto fm è istanza della classe Studente")
else:
    print("\noggetto fm non è istanza della classe Studente")


# controllare Studente sia sottoclasse classe Persona
if issubclass(Studente, Persona):
    print("\nclasse Studente è sottoclasse della classe Persona")
else:
    print("\nclasse Studente non è sottoclasse della classe Persona")
