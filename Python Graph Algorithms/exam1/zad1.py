
def readFile(file):
    myMat = []
    with open(file,'r') as f:
        for line in f:
            lst = []
            for w in line.split():
                if w.isalpha():
                    lst.append((w))
                elif w.isdigit():
                    lst.append(int(w))
                else:
                    lst.append(float(w))
            myMat.append(lst)

    return myMat



def main():
    myMat = readFile("matrica1.txt")
    print(myMat)
    

if __name__ == '__main__':
    main()