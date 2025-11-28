import matplotlib.pyplot as plt
import matplotlib
matplotlib.use('TkAgg')


def collatz(n:float):

    numeri:list = [n]

    while n != 1:

        if n % 2 == 0:
            n = n / 2

        else: 
            n = (n*3) + 1
        print(n)
    
        numeri.append(n)

    return numeri

numeri:list[float] = collatz(631)
plt.plot(numeri)
plt.show()


#print(collatz(5.0))


# per eseguire correttamente

#source venv/bin/activate
#python3 /home/its/its/esercizi/test/collatz.py