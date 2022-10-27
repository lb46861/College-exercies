
def myFun(file):
    myDict = {}
    interpun = ["'", "(", ")", ".", "?", "!", ",", "`",]
    with open(file) as f:
        for line in f.readlines():
            for w in line.split():
                while(True):
                    if (w[0] in interpun):
                        w = w[1:]
                    elif (w[-1] in interpun):
                        w = w[0:-1]
                    else:
                        break

                if w in myDict:
                    myDict[w] += 1
                else:
                    myDict[w] = 1

    return myDict

