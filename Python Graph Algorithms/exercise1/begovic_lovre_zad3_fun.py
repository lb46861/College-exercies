from math import *
from operator import le

def jeliProst(n):
    if n > 1:
        for i in range(2, int(sqrt(n)) + 1):
            if (n % i) == 0:
                return False       
        else:
            return True

    else:
        return False


def brojProstih(k ,l):
    min_num = min(k, l)
    min_num = ceil(min_num)

    max_num = max(k, l)
    max_num = floor(max_num)

    if(max_num == min_num):
        if(jeliProst(max_num)):
            print(1)
        else: 
            print(0)
    else:
        brojac = 0
        for i in range(min_num, max_num + 1):
            if(jeliProst(i)):
                brojac += 1
            
        print(brojac)


def n_tiProst(n):
    if n < 1:
        return ("Kriv unos.")

    i, k, rez = (2,0,0)
    while(k != n):
        if jeliProst(i):
            rez = i
            k +=1
            i += 1
        else:
            i += 1

    return rez


def susjedni(n):
    if n < 2:
        return ("Kriv unos.")

    dict = {}
    k = 1
    for i in range(n-1):
        if jeliProst(i):
            if(jeliProst(i+2)):
                dict[k] = [i, i+2]
                k += 1
    return dict


def zbroj(n):
    if n < 8 or n % 2 != 0:
        return "Krivi unos."

    prosti = []
    dict = {}
    k = 1
    
    for i in range(n):
        if jeliProst(i):
            prosti.append(i)

    for i in range(len(prosti)):
        for j in range(i+1, len(prosti)):
            if prosti[i] + prosti[j] == n:
                dict[k] = [prosti[i] , prosti[j]]
                k += 1

    return dict

 
