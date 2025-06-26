from random import randrange

def genera():

    righe = int(input("righe: "))
    colonne = int(input("colonne: "))

    matrix = [] 
    


    for i in range(righe):   
        righe = []
        for j in range(colonne):
            a = (randrange(1,13))
            righe.append(a)  
        matrix.append(righe)


    res = True
    for index in range(0, len(matrix)):
            
            temp = False
            
            for element in matrix[index]:
                if element == matrix[0]:
                    element += 1
                    temp = True 
                    break 
                
            if not temp :
                res = False 
                break

        
    print("Ci sono elementi in comune nella matrice : " + str(res))


    for i in range(len(righe)):
        for j in range(colonne):
            print(matrix[i][j], end=" ")
        print()




def printMAT(a=[[1,2,3],[4,5,6],[7,8,9]]):

    for i in range(len(a)):
        
        for j in range(len(a[i])):
            
            print(a[i][j], end='')
        
        print()







def calcolaCarico(r:int,c:int, matrice=[[41,85,1],[2,9,12],[47,28,11]]):
    
    k = 0


    for i in range len(matrice):















print(genera())
print("**********************************")
print(printMAT())