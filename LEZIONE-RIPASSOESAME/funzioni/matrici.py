
def sum_primary_diagonal (matrix:list[list]) -> int:

    sum = 0
    x,y = 0,0 

    for (x,y) in matrix:

        sum = x[matrix(0)]

        x +=1
        y +=1



    return sum



def sum_secondary_diagonal (matrix = ([9,8,7],[4,5,6],[1,2,3])) -> int:
    
    sum = 0
    x,y = 3,3 

    for (x,y) in matrix:

        sum = x[matrix(0)]

        x +=1
        y +=1



    return sum





sum_primary_diagonal([[1,2,3],[4,5,6],[7,8,9]]) 
sum_secondary_diagonal([[1,2,3],[4,5,6],[7,8,9]]) 