from restclass import Restaurant

restaurant1 = Restaurant("daje","mediterranea") 
restaurant2 = Restaurant("roma","romana")
restaurant3 = Restaurant("bar","cinese") 



print(restaurant1.restaurant_name)
print(restaurant1.cuisine_type)


restaurant2.describe_restaurant()
restaurant2.open_restaurant()    

restaurant3.describe_restaurant()
restaurant3.describe_restaurant()