

def biggest(lst, start, max):
    for i in range(start, len(lst)):
        if(isinstance(lst[i], int)):
            if lst[i] > max:
                max = lst[i]
                biggest(lst, i, max)
    return max
    




