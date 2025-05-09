'''
Password Validation 1: 

Write a function validate_password(password) that checks whether a password meets the following criteria:
Minimum length of 20 characters, At least three uppercase letters, At least four special characters (non-alphanumeric).
If the password is valid, the function should return True.
If the password is invalid, the function should raise a built-in exception (e.g., ValueError)
 with a message indicating which criteria were not met.
'''



def validate_password(password):
    

    criteri = {password.length >= 20: "lunghezza minima di 20 caratteri",
              password.uppercase >= 3: "almeno tre lettere maiuscole",
              password.special_characters >= 4: "almeno quattro caratteri speciali"}
    try:
        if criteri == True:
            return True
        else:
            raise ValueError("Password non valida")
    except ValueError as e:
        return str(e)   


validate_password("Password123!@#$%^&*()")