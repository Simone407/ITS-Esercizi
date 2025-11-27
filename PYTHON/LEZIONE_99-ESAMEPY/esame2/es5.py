""" Controllo Sicurezza - PUNTI 1 """

def check_security_alarm(s1: bool, s2: bool, s3: bool) -> str:
    
    if s1== True and (s2 or s3 == False):
        return "Allarme attivato"
    
    else: 
        return "Nessun allarme"