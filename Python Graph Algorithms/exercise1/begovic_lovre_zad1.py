import math 


def pitagora(a, b, c):

    if(a > 0 and b > 0 and c > 0):
        if(a == (math.sqrt(pow(b, 2) + pow(c, 2)))
           or b == (math.sqrt(pow(a, 2) + pow(c, 2)))
           or c == (math.sqrt(pow(a, 2) + pow(b, 2)))
           ):
            print("Pitagorejska trojka")
        else:
            print("Nije pitagorejska trojka")


def main():  
    while(True):
        a = int(input("Unesite stranicu a:"))
        if(a <= 0): break
        b = int(input("Unesite stranicu b:"))
        if(b <= 0): break
        c = int(input("Unesite stranicu c:"))
        if(c <= 0): break

        pitagora(a, b, c)



if __name__ == '__main__':
    main()


    
