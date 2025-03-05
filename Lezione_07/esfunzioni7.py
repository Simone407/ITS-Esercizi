
def add_one(a:int):
    sum = a +1
    return sum

mysub = add_one(6)

print(mysub)





def add_one_to_list(numberlist):
    new_list = []
    for i in numberlist:
        new_list.append(add_one(i))
    print(new_list)

numberlist = add_one_to_list ([5,9,7,6,5,3,8])