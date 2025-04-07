'''
9-3. Users: Make a class called User. Create two attributes called first_name and last_name, and then create several other attributes that
are typically stored in a user profile. Make a method called describe_user() that prints a summary of the user’s information.
Make another method called greet_user() that prints a personalized greeting to the user. Create several instances representing different users, 
and call both methods for each user.




'''


class User():


    def __init__(self,first_name:str,last_name:str,age:int,city:str):
        self.first_name = first_name
        self.last_name = last_name
        self.age = age
        self.city = city



    def describe_user(self):
        print(self.first_name)
        print(self.last_name)
        print(self.age)
        print(self.city)

    def greet_user(self):
        print("Congratulazioni ")




persona1 = User("alessio","verdi",23,"venezia")

persona1.describe_user()
persona1.greet_user()


print()

persona2 = User("giulo","rossi",13,"roma")

persona2.describe_user()
persona2.greet_user()


print()

persona3 = User("mario","quadrato",54,"vicenza")

persona3.describe_user()
persona3.greet_user()