PATH: str = "Lezione_17-FILES/example.txt"
mode: str = "r"
encoding: str = "UTF-8"

#file = open(PATH)

#print(file)


#output: str = file.read()
#print(output)
#file.close()



file = open(PATH, mode=mode , encoding=encoding)

print(file)
input_text: str = input("Enter the text you want: ")
output:str= file.read()
print(output)
file.close()
