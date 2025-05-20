'''

2. Guess the Number Game:

Create a function that generates a random number within a range specified by the user.
Prompt the user to guess the number within a specified maximum number of attempts.
Provide feedback to the user after each guess, indicating whether their guess is too high, too low, or correct.
Terminate the loop when the user guesses the number correctly or reaches the maximum number of attempts.

'''

import random

def guess():
    number = random.randint(1, 100)
    attempts = 0
    max_attempts = 7

    print("WTry to guess the number!")
    print(f"Guess a number between 1 and 100. You have {max_attempts} attempts.")

    while attempts < max_attempts:
        guess = int(input("Enter your guess: "))
        attempts += 1


        if guess < number:
                print("Too low!")
        elif guess > number:
                print("Too high!")
        else:
            print(f"Congratulations! You guessed the number {number} in {attempts} attempts.")
            break
    else:
        print(f"Sorry! The correct number was {number}")




guess()
