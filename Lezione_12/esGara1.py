import random
import time


def posizioni(posT, posL):
    percorso = ['_'] * 70
    
    if posT == posL:
        percorso[posT - 1] = 'OUCH!!!'  
    else:
        percorso[posT - 1] = 'T'  
        percorso[posL - 1] = 'H'
    
    print(*percorso)



def tartaruga(posT):
    i = random.randint(1,10)
    if 1 <= i <= 5:  
        posT += 3

    if 6 <= i <= 7:  
        posT -= 6

    if 8 <= i <= 10: 
        posT += 1

    if posT < 1:
        posT = 1
    if posT > 70:
        posT = 70
    return posT


def lepre(posL):
    x = random.randint(1,10)

    if 1 <= x <= 2:  
        posL += 0

    if 3 <= x <= 4:  
        posL += 9

    if x == 5:  
        posL -= 12

    if 6 <= x <= 8:  
        posL += 1

    if 9 <= x <= 10:  
        posL -= 2

    if posL < 1:
        posL = 1
    if posL > 70:
        posL = 70
    return posL


posT = 1
posL = 1

print("BANG !!!!! AND THEY'RE OFF !!!!!")


while True: 

    posT = tartaruga(posT)
    posL = lepre(posL)

    posizioni(posT,posL)


    if posT >= 70 and posL >= 70:
        print("IT'S A TIE.")
        break

    if posT >= 70:
        print("TORTOISE WINS! || VAY!!!")
        break

    if posL >= 70:
        print("HARE WINS || YUCH!!!")
        break   

    time.sleep(1)