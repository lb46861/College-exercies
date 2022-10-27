
const unija = (arr1, arr2, myfun) => {
    
    arr = []
    arr1.forEach(el => {
        arr = myfun(arr, el)
    });

    arr2.forEach(el => {
        arr = myfun(arr, el)
    });

    return arr

}

function fun(myArr, el) { 
    if (!myArr.includes(el)){
        myArr.push(el)
    }
   return myArr
}


arr1 = [1, 2, 3, 4, 5]
arr2 = [3, 4, 5, 6, 7]
console.log(unija(arr1, arr2, fun))