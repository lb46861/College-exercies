

def main():              

    lst1 = [1, 2, 3, 4, 5, 6, 7]
    lst2 = [5, 6, 7, 8, 9, 10, 11]
    
    lst3 = lst1[:] + lst2[:]
    lst3 = list(set(lst3))

    
    print("Elementi koji se nalaze u obe liste: ", lst3)


if __name__ == '__main__':
    main()

