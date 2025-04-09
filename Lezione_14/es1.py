'''
Safe Square Root: Write a function safe_sqrt(number) that calculates the square root of a number using math.sqrt().
Handle ValueError if the input is negative by returning an informative message.
'''

import math



def safe_sqrt(number:int):
    try:
        radice = math.sqrt(number)
        return radice

    except ValueError:
        return("devi inserire un numero positivo")
   
print(safe_sqrt(16))


