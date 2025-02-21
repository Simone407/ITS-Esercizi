languages: list = ["italiano","inglese","spagnolo","francese","greco","russo"]

print(languages)

print(f"{languages[0]} è la miglior lingua")

print(f"{languages[3]} è la peggior lingua")

languages.remove("francese")

print(languages)

languages.pop(4)

print(languages)

print(languages)
print(sorted(languages))
print(sorted(languages, reverse= True))
languages.reverse()
print(languages)
languages.reverse()
print(languages)
languages.sort()
print(languages)