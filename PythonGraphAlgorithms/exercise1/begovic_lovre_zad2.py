from begovic_lovre_zad2_fun import fun

def main():              

    while(True):
        a = int(input("Unesite broj 1-20: "))
        if (a > 0 and a < 21):
            fun(a)
        else:
            print("Netocan unos")
            break


if __name__ == '__main__':
    main()

    
