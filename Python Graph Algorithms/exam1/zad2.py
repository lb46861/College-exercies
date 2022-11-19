
from zad1 import readFile
def quadratic(mat):
    if(len(mat) == len(mat[0])):
        return True
def getTransponirana(mat):
    transponirana = mat.copy()
    for i in range (len(mat)):
        for j in range(len(mat[0])):
            transponirana[j][i] = mat[i][j]
           # print(mat[j][i], mat[i][j])
    return transponirana

def multipleMatrix():
    pass


def main():
    myMat = readFile("matrica3.txt")
    transponiranaMat = getTransponirana(myMat)
    print(myMat)
    print(transponiranaMat)
    

if __name__ == '__main__':
    main()