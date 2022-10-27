

def myFun(file):
    sumRed = []
    sumStup = []
    mat = []
    with open(file) as f:
        for line in f.readlines():
            lst = []
            for w in line.split():
                lst.append(w)
            mat.append(lst)

    for i in range(len(mat)):
        zbrojRed = 0
        zbrojStup = 0
        for j in range(len(mat[i])):
            zbrojRed += int(mat[i][j])
            zbrojStup += int(mat[j][i])
 
        sumStup.append(zbrojStup)
        sumRed.append(zbrojRed)
  
    return sumStup, sumRed





