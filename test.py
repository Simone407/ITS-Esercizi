'''
Scrivi una funzione che verifica se una combinazione di condizioni (A, B, e C) è soddisfatta per procedere con un'operazione. 
L'operazione può procedere solo se la condizione A è vera o se entrambe le condizioni B e C sono vere. La funzione deve ritornare "Operazione permessa" 
oppure "Operazione negata" a seconda delle condizioni che sono soddisfatte.
'''


def check_parentheses(expression: str) -> bool:
    parentheses = 0  

    for char in expression:
        if char == "(":  
            parentheses += 1
        elif char == ")":  
            parentheses -= 1
        if parentheses < 0:  
            return False

    return parentheses == 0






def check_parentheses(expression: str) -> bool:
    if expression[0]  == "(" and expression[-1] == ")":
      return True
    else: return False
    