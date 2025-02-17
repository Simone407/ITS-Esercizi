languages: list = ["italian","english","spanish","french","greek","russian"]

print(languages)

print(f"{languages[0]} è la miglior lingua")

print(f"{languages[3]} è la peggior lingua")

languages.remove("french")

print(languages)

languages.pop(4)

print(languages)