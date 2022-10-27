

const komutativnost = (fun1, fun2, val) => {


    newVal = fun2(fun1(val))
    newVal2 = fun1(fun2(val))

    if(newVal == newVal2){
        return true
    }else{
        return false
    }

}

function fun1(num) { 
   return num * 10
}

function fun2(num) { 
    return num / 10
 }


console.log(komutativnost(fun1, fun2, 10))