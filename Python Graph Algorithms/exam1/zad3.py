
def dictToMat(myDict):
    counter = 0
    for key in myDict:
        counter += 1

    matlength = 0
    for key, value in myDict.items():
        matlength = len(value)
        break
    
    myMat = [[[0] * counter] for i in range(matlength)]

    for key, value in myDict.items():
        myMat[key] = value

    return myMat



def main():
    myDict = {
        0: [1, 2, 3],
        1: [4, 5, 6],
        2: [7, 8, 9]
    }

    myMat = dictToMat(myDict)
    print(myMat)
    

if __name__ == '__main__':
    main()