

def myFun(file):

    mat = []
    with open(file) as f:
        for line in f.readlines():
            lst = []
            for w in line.split():
                lst.append(int(w))
            mat.append(lst)    
    
    d = {}
    for i in range (len(mat)):
        lst = []
        for j in range(len(mat[i])):
            if(mat[j][i]) == 1:
                lst.append(j)
        d[i] = lst

    return d
            



