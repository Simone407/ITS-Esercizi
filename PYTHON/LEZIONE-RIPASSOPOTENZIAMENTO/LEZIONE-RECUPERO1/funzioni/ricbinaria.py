
x = [2,4,6,7,12,43,54]

def ric_binaria(x,y):

    i,j = 0,-1 
                                        # i = lower bound
    mid = len(x) // 2                   # j = upper bound

    if x[mid] == y:

        return True
    
    if x[mid] > y:

        j = mid 
        ric_binaria(x[i:j],y)

    else:

        i = mid
        ric_binaria(x[i:j],y)

