def fun(n):
    for i in range(1, n+1):   
        for j in range(i, i*2):           
            print(j%10, end="")
      
        for k in range(i*2-2, i-1, -1):            
            print(k%10, end="")

        print() #novi red

