import re

'''finding an email in a text'''


string = "the email is prova@gmail.com"

res: list[str] = re.findall(r'\S+@\S+', string)

print(res) 



'''finding numbers in a text'''

text:str = "I have 20 cats and 3 dogs"

numbers:list[str] = re.findall(r"\d+",text)

print(numbers) 

    