
from zad1 import readFile

def getDictionary(myMat):
    myDict = {}
    for i in range(len(myMat)):
        if myMat[i][0] not in myDict:
            myDict[myMat[i][0]] = [(myMat[i][1], myMat[i][2])]
        else:
            myDict[myMat[i][0]].append((myMat[i][1], myMat[i][2]))
    return myDict


def closestCities(myDict):
    city1 = ""
    city2 = ""
    lowest = 10000
    for key, value in myDict.items():
        for i in range(len(value)):
            if(value[i][1]) < lowest:
                lowest = value[i][1]
                city1 = key
                city2 = value[i][0]
    return city1, city2
        


def main():
    myMat = readFile("mapa-europa.txt")
    myDict = getDictionary(myMat)
    #print(myDict)
    print(closestCities(myDict))
    

if __name__ == '__main__':
    main()