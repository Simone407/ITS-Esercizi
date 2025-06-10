'''
8-13. User Profile:  Build a profile of yourself by calling build_profile(), using your first 
and last names and three other key-value pairs that describe you. All the values must be passed to the function as parameters. 
The function then must return a string such as "Eric Crow, age 45, hair brown, weight 67"
'''


def build_yourself(name:str,surname:str,age:int,gender:str,citizenship:str):
    
    return f"{name} {surname},is {age} years old. He is a {gender} and he was born in {citizenship}"
    

print(build_yourself("simone","mazzeo",20,"male","Italy"))

