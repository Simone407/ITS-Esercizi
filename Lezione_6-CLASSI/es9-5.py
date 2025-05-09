
class User():

    def __init__(self,first_name:str,last_name:str,age:int,city:str):
        self.first_name = first_name
        self.last_name = last_name
        self.age = age
        self.city = city
        self.login_attempts = 0

    def describe_user(self):
        print(self.first_name)
        print(self.last_name)
        print(self.age)
        print(self.city)

    def greet_user(self):
        print("Congratulazioni ")
    
    def increment_login_attempts(self):
        self.login_attempts += 1
        print(self.login_attempts)

    def reset_login_attempts(self):
        self.login_attempts = 0
        print(self.login_attempts)



persona1 = User("alessio","verdi",23,"venezia")

persona1.describe_user()
persona1.greet_user()


persona1.increment_login_attempts()
persona1.increment_login_attempts()
persona1.increment_login_attempts()
persona1.increment_login_attempts()
persona1.increment_login_attempts()
persona1.increment_login_attempts()



persona1.reset_login_attempts()

print(f"login attempts: {persona1.login_attempts}")