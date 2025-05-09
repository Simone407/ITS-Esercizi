import random
import time


posT = 1
posL = 1

meteo = random.choice([True, False])

ostacoli:dict = {15:-3,30:-5, 45:-7}
bonus:dict = {10:5,25:3, 50:10}



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



def energiaStamina(posT, posL):

    if meteo == False:  
        posT -= 1
        if posT < 1:
            posT = 1

        
        posL -= 2
        if posL < 1:
            posL = 1
    
    return posT, posL



print("BANG !!!!! AND THEY'RE OFF !!!!!") 

secondi = 0


while True: 

    posT = tartaruga(posT)
    posL = lepre(posL)

    posizioni(posT,posL)
    
    time.sleep(1)
    
    # controllo del meteo

    secondi += 1  

    if secondi == 10:

        meteo = random.choice(["sole", "pioggia"])

        print(f"Cambio meteo: {meteo}!")
        secondi = 0 

    if meteo == "pioggia":
        posT -= 1
        posL -= 2

    if posT >= 70 and posL >= 70:
        print("IT'S A TIE.")
        break

    if posT >= 70:
        print("TORTOISE WINS! || VAY!!!")
        break

    if posL >= 70:
        print("HARE WINS || YUCH!!!")
        break   

    # ostacoli e bonus

    if posT in ostacoli:
        posT += ostacoli[posT]
        print("ops, ostacolo sulla pista !!!")


    if posT in bonus:
        posT += bonus[posT]
        print("grande, hai ottenuto un bonus !")

