import random
import begovic_lovre_zad2


def game():
        while(True):
            partije = input("Iz koliko ce se igrati ?\n")
            if(partije.isdigit() and int(partije) > 0):
                partije = int(partije)
                break
            else:
                print("Kriv unos, unesite broj veci od 0!")
        
        brojPobjedaIgrac = 0
        brojPobjedaRac = 0
        while(True):
            while True:
                igrac = input("Odigraj: 0(kamen), 1(skare) ili 2(papir): ")
                if igrac.isdigit():
                    igrac = int(igrac)
                    if igrac > -1 and igrac < 3:
                        break
                    
                print("Kriv unos, unesite brojeve 0-2!")

            comp = random.randint(0,2)
            
            if(igrac == comp):
                print("Nerjesena runda!\nIgrac: " + begovic_lovre_zad2.izbor[igrac] + " - Racunalo: " + begovic_lovre_zad2.izbor[comp]) 
            else:
                if(begovic_lovre_zad2.pravila[igrac, comp]):
                    brojPobjedaIgrac += 1
                    print("Rundu je dobio igrac!\nIgrac: " + begovic_lovre_zad2.izbor[igrac] + " - Racunalo: " + begovic_lovre_zad2.izbor[comp])
                else:
                    brojPobjedaRac += 1
                    print("Rundu je dobilo racunalo!\nIgrac: " + begovic_lovre_zad2.izbor[igrac] + " - Racunalo: " + begovic_lovre_zad2.izbor[comp])
            
            if(brojPobjedaIgrac == partije):
                print("Igrac je pobjednik!\nRezultat:", brojPobjedaIgrac, " - ", brojPobjedaRac)
                break
            if(brojPobjedaRac == partije):
                print("Racunalo je pobjednik!\nRezultat:", brojPobjedaIgrac, " - ", brojPobjedaRac)
                break


if __name__ == '__main__':
   game()