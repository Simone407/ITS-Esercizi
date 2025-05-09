class Restaurant():
    def __init__(self,restaurant_name:str,cuisine_type:str):
        self.restaurant_name = restaurant_name
        self.cuisine_type = cuisine_type

    def describe_restaurant(self):
        print(self.restaurant_name)
        print(self.cuisine_type)
        
    def open_restaurant(self):
        print("open")

  

restaurant1 = Restaurant("daje","mediterranea") 
restaurant2 = Restaurant("roma","romana")
restaurant3 = Restaurant("bar","cinese") 



print(restaurant1.restaurant_name)
print(restaurant1.cuisine_type)


restaurant2.describe_restaurant()
restaurant2.open_restaurant()    

restaurant3.describe_restaurant()
restaurant3.describe_restaurant()