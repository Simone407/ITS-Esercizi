# Per testare il codice da riga di comando
# python3 randombit.py ciframi.enc

import sys, random



if len(sys.argv) != 2:
    print(f"Usage: {sys.argv[0]} <file name>")
    sys.exit(1)


#  Ora leggere il file binario

data = None

with open(sys.argv[1], "rb") as f:
    data = f.read()

# ora in data ho il binario del file (16 byte)
# scelgo quale byte modificare 


pos = random.randint(0,len(data) -1)

byte = data[pos]


# ora scelgo quale bit di byte modificare 


bit  = random.randint(0,7)
mask =1 << bit

byte = byte ^ mask

data = data[:pos] + bytes([byte]) + data[pos +1:]

with open (sys.argv[1], "wb") as f: 
    f.write(data)


print(f"ho modificato il bit {bit} del byte al posto {pos} nel file {sys.argv[1]}")