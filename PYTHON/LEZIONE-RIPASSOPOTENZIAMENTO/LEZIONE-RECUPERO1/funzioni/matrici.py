
def sum_primary_diagonal (matrix:list[list]) -> int:

    sum = 0

    for i in range(len(matrix)):

        sum += matrix[i][i]


    return sum


def sum_secondary_diagonal (matrix2 = ([9,8,7],[4,5,6],[1,2,3])) -> int:
    
    sum2 = 0

    for i in range(len(matrix2)):

        sum2 += matrix2[i][len(matrix2) -1-i]


    return sum2


print(sum_primary_diagonal([[1,2,3],[4,5,6],[7,8,9]]))
print(sum_secondary_diagonal([[1,2,3],[4,5,6],[7,8,9]]))