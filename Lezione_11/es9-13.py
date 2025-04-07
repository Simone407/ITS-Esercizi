import random

'''
9-13. Dice: Make a class Die with one attribute called sides, which has a default value of 6.
Write a method called roll_die() that prints a random number between 1 and the number of sides the die has.
Make a 6-sided die and roll it 10 times. Make a 10-sided die and a 20-sided die. Roll each die 10 times.


'''


class Die():
    
    def __init__(self,sides:int=6):
        
        self.sides = sides
    

    def roll_die(self):
        
        for _ in range(10):
            ris = random.randint(1, self.sides)
            print(ris)

dado1 = Die(6)
dado1.roll_die()

dado2 = Die(10)
dado2.roll_die()

dado3 = Die(20)
dado3.roll_die()