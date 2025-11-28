'''
3. E-commerce Shopping Cart:

Create a function that defines a product with a name, price, and quantity.
Create functions that manage the shopping cart, allowing the user to add, remove, and view products in the cart.
Create a function that calculates the cart total and apply any discounts or taxes.
Create a funciton to print a detailed summary of the cart including products and totals.
Implement a for loop to iterate over the items in the cart and print detailed information about each product and the total.

'''



def graphic_card():
    
    name:str = "AMD Radeon 9070xt"
    price:float = 730.00
    quantity: int = 25


def shopping_cart ():

    cart = []
    total = 0.0
    discount = 0.1  
    tax = 0.21  

    def add_product(name:str, price:float, quantity:int):
        cart.append({"name": name, "price": price, "quantity": quantity})

    def remove_product(name:str):
        for product in cart:
            if product["name"] == name:
                cart.remove(product)
                break

    def view_cart():
        for product in cart:
            print(f"{product['name']} - ${product['price']} x {product['quantity']}")

    def calculate_total():
        nonlocal total
        total = sum(product["price"] * product["quantity"] for product in cart)
        total -= total * discount
        total += total * tax
        return total

    return add_product, remove_product, view_cart, calculate_total


add_product, remove_product, view_cart, calculate_total = shopping_cart()

add_product("Graphic Card", 730.00, 1)

add_product("CPU", 300.00, 1)

add_product("RAM", 150.00, 2)

add_product("SSD", 100.00, 1)

remove_product("SSD")

view_cart()

total = calculate_total()

print(f"Total is: ${total:.2f}")