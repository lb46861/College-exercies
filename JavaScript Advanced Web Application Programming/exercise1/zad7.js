
const presjek = (arr1, arr2, myfun) => {
    
    arr = []
    arr1.forEach(el => {
        arr = myfun(arr, arr2, el)
    });

    arr2.forEach(el => {
        arr = myfun(arr, arr1, el)
    });

    return arr

}

function fun(myArr, arr, el) { 
    if (arr.includes(el) && !myArr.includes(el)){
        myArr.push(el)
    }
   return myArr
}


arr1 = [1, 2, 3, 4, 5]
arr2 = [3, 4, 5, 6, 7]
console.log(presjek(arr1, arr2, fun))