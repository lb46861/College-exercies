
const filter = (arr, fun) => {
    
    finalArr = []
    arr.forEach(el => {
        if(fun(el)){
            finalArr.push(el)
        }
    });

    return finalArr

}

function fun(el) { 
   if (el % 2 == 0){
       return true
   }
}

arr1 = [1, 2, 3, 4, 5, 6, 7, 8]
console.log(filter(arr1, fun))