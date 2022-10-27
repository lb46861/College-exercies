

const reduce = (arr, fun, acc) => {
    
    arr.forEach(el => {
        acc = fun(el, acc)
    });

    return acc

}

function fun(el, acc) { 
   return el + acc;
}


arr = [1, 2, 3, 4, 5]
console.log(reduce(arr, fun, 0))