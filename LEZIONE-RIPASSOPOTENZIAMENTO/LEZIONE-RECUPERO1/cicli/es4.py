


def esercizio4(X: bool, Y: bool, Z: bool) -> str:
   

    if X and (Y or Z):

        return "Azione consentita"
    
    else: 
        
        return "Azione non consentita"