
n:int = int(input("inserire un numero intero: "))
sum = 0

if n > 1 and n < 100:
    for i in range (1,n):
        if i%2==0:
            sum = sum + i
            i+=1
    print(sum)

elif n <= 0:
    print("errore")
    
else:
    for i in range (1,n):
        if i%2==1:
            sum = sum + i
            i+=1
    print(sum)