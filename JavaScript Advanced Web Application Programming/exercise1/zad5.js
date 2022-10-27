

const pipe = (arrFun, val) => {
    myVal = val
    for (let i = 0; i < arrFun.length; i++){
        myVal = arrFun[i](myVal)
    }    

    return myVal
}

function fun1(val){
    return val * 10
}

function fun2(val){
    return val * 3
}

function fun3(val){
    return val / 3 
}

function fun4(val){
    return val * 10
}

arrFun = [fun1, fun2, fun3, fun4]
console.log(pipe(arrFun, 10))