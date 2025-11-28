'''8-15. Printing Models: Put the functions for the example printing_models.py in a separate file called printing_functions.py.
Write an import statement at the top of printing_models.py, and modify the file to use the imported functions.'''

from src.printing_functions import printing_functions


numeri = [4, 7, 9]
media = calcola_media(numeri)
print("Media arrotondata:", media)