
def chech_ipv4(ip: str) -> bool:

    ip = ip.split(" . ")

    if len(ip) != 4:
        
        raise ValueError("errore nell'indirizzo scelto")
    

    for blocco in ip:

        if not blocco.isdigit():

            #raise ValueError("Errore, l'indirizzo contiene un carattere non ammesso")
        
            return False
        
        if not (0<= int(blocco) <= 255):

            #raise ValueError("l'indirizzo non è compreso tra 0 e 255")

            return False
        

    return True





print(chech_ipv4("192.168.0.1"))