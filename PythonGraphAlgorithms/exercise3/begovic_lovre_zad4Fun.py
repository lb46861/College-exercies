
def myFun(file, n):

    mat = []
    with open(file) as f:
        for line in f.readlines():
            lst = []
            for w in line.split():
                lst.append(int(w))
            mat.append(lst)    

    if n > len(mat[0]) - 1 or n < 0:
        return "Kriv unos"
    
    
    v1 = 'x'
    v2 = 'x'
    for i in range (len(mat)):
        if(mat[i][n]) == 1:
            v1 = i
        if(mat[i][n]) == -1:
            v2 = i
        if(v1 != 'x' and v2 != 'x'):
            break
        

    return (v1, v2)

            
