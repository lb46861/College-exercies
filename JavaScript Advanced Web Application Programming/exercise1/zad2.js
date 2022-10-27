

function prioritiziraj(arr, fun){

    new_arr = []
    for(let i = 0; i < arr.length; i++){
        if(fun(arr[i])){
            new_arr.push(arr[i])
        }else{
            new_arr.unshift(arr[i])
        }
    }
    return new_arr
    
}

function checkEven(num) { 
    if (num % 2 == 0){
        return true;
    } else{
        return false;
    }
}

array = [1, 2, 3, 4, 5, 6]
console.log(prioritiziraj(array, checkEven))