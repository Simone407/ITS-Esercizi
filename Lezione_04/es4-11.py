pizzas:list[str] = ["diavola","patate e salsiccia","margherita"]
friend_pizzas:list[str] = ["diavola","patate e salsiccia","margherita"]

pizzas.append("crostino")
friend_pizzas.append("boscaiola")



for pizzas in pizzas:
    print(pizzas)
    print("my favorite pizzas are ")


for friend_pizzas in friend_pizzas:
    print(friend_pizzas)
    print("my friend's favorite pizzas are ")
