num:list[int] = [1,8,27,64,125,216,343,512,729,1000]

print(num)

a = slice(0,3)
b = slice(3,6)
c = slice(7,10)

print(f"The first three items in the list are: {num[a]}")

print(f"Three items from the middle of the list are: {num[b]}")

print(f"The last three items in the list are: {num[c]}")

