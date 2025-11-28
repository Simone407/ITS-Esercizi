
numberlist: list[int] = [5, 9, 7, 6, 5, 3, 8]


def check_each(numberlist):
    for element in numberlist:
        if element > 5:
            print(f"il numero {element} è maggiore di 5")
        elif element < 5:
            print(f"il numero {element} è minore di 5")
        else:
            print(f"il numero {element} è uguale di 5")

    print(element)


mynumber = check_each(numberlist)

print(mynumber)
