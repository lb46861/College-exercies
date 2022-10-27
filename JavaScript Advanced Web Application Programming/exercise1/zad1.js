

function velicina(niz, fun){
    counter = niz.length / 2;
    mycounter = 0
    for(let i = 0; i < niz.length; i++){
        if(fun(niz[i])){
            mycounter += 1
            if(mycounter > counter){
                return true
            }
        }

    }
    if(mycounter > counter){
        return true;
    } else{
        return false;
    }
}

function checkEven(num) { 
    if (num % 2 == 0){
        return true;
    } else{
        return false;
    }
}

array = [1, 2, 3, 4, 5, 6, 8]
console.log(velicina(array, checkEven))