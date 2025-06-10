'''
9-4. Number Served: Start with your program from Exercise 9-1. 
Add an attribute called number_served with a default value of 0. 
Create an instance called restaurant from this class. Print the number of customers the restaurant has served, and then
change this value and print it again. Add a method called set_number_served() that lets you set the number of customers
that have been served. Call this method with a new number and print the value again. 
Add a method called increment_number_served() that lets you increment the number of customers who’ve been served. 
Call this method with any number you like that could represent how many customers were served in, say, a day of business. 


'''


class Restaurant():
    def __init__(self,restaurant_name:str,cuisine_type:str,number_served:int=0):
        self.restaurant_name = restaurant_name
        self.cuisine_type = cuisine_type

    def describe_restaurant(self):
        print(self.restaurant_name)
        print(self.cuisine_type)
        
    def open_restaurant(self):
        print("open")
        
    def set_number_served(self):
        self.number_served = 10
        print(self.number_served)
        
    def increment_number_served(self):
        self.number_served += 2

restaurant = Restaurant("daje","mediterranea") 

print(restaurant.restaurant_name)
print(restaurant.cuisine_type)


restaurant.describe_restaurant()
restaurant.open_restaurant()    


print(restaurant.set_number_served())

restaurant.increment_number_served

print(restaurant.set_number_served())
