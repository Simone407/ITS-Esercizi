'''8-12. Sandwiches: Write a function that accepts a list of items a person wants on a sandwich.
 The function should have one parameter that collects as many items as the function call provides, and it should 
 print a summary of the sandwich that’s being ordered. 
Call the function three times, using a different number of arguments each time.'''


ingredients:list = ["tomatoes","hamburger","cheddar","bacon","lettuce","bread","mayonaise","ketchup","onion"]

def sandwiches(ingredients:list):
    for message in ingredients:
        print(message)
    return ingredients

sandwiches(ingredients)

sandwiches(ingredients)

sandwiches(ingredients)


print(ingredients(1,5))