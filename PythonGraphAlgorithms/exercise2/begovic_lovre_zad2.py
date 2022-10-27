import begovic_lovre_zad2Fun

pravila = {
    (0, 1): True,
    (0, 2): False,
    (1, 0): False,
    (1, 2): True,
    (2, 0): True,
    (2, 1): False
}

izbor = {0: "kamen", 1: "skare", 2: "papir"}

def main():   
    begovic_lovre_zad2Fun.game()

    
if __name__ == '__main__':
    main()

