import math

'''

# SOLUZIONE DAL DIAGRAMMA A BLOCCHI

 read h,
 t = 0
if h <= 3 se TRUE t =2
se FALSE (IF) h>3 AND h<24 se FALSE t=10 , SE TRUE (IF)  h%1 != 0
SE TRUE h=roundup().

t = 2.00 + (h-3) * 0.5
write t
'''


def calculateCharges(h:float):
    
    t:float = 0

    if h <= 3:
        t = 2
    else: 
        if h>3 and h<24:
            if h%1 !=0:
               h = math.ceil(h)
            t = 2.00 + (h-3) * 0.5
        else:
            t =10

    return t


print("---------------------------")
print("Car\t Hours\t Charge")
print("---------------------------")

print(f"1\t {1.5}\t {calculateCharges(1.5)} $")
print("---------------------------")

print(f"2\t {4.0}\t {calculateCharges(4.0)} $")
print("---------------------------")

print(f"3\t {5.50}\t {calculateCharges(5.50)} $")
print("---------------------------")

print(f"4\t {24} \t {calculateCharges(24)} $")
print("---------------------------")

print(f"TOTAL\t 35 \t 18.00 $")




# cars:list[float] = [1.5,4.0,5.50,24]
# totale = 0   


# print(f"{'car':<10}{'hours': <10}{'charge':<10}")                         #   CORREGGERE

# for i in range (len(cars)):
      
#     t = calculateCharges(cars[i])

#     print(f"{i+1:<10}{cars[i]:<10}{t:<2f}")

#     totale += t

# print(f"{'total':<10}{sum(cars):<10}{'totale':<2f}")

