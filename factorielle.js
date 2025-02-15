
function factorial(n){
let result = 1 
for (let i = n; i >= 1; i--) {
    result *= i
}
return result;
}

console.log(factorial(5))


// facto with récursion

function factorialWithRecursion(n) {
    if(n === 0) return 1
    return n * factorialWithRecursion(n - 1)
}

console.log(factorialWithRecursion(5))