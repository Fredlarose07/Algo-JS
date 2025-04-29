// ----------------------------------- FizzBuzz -----------------------------------------------------

function fizzBuzz(){
    for(i = 0; i <= 100; i++){

        if(i % 3 === 0 && i % 5 === 0){
            console.log("FizzBuzz")
        } else if(i % 3 === 0){
            console.log("Fizz")
        } else if(i % 5 === 0){
            console.log("Buzz")
        } else {
            console.log(i)
        }
    }
}

// fizzBuzz()

// ----------------------------------- Palindrome -----------------------------------------------------



function reverseCharacter(word){
    let reverse = word.split('').reverse().join('')
    console.log(reverse)

    if(reverse === word){
        console.log("it's a palindrome")
    } else {
        console.log("this is not a palindrome")
    }
}

// reverseCharacter("kayak")
// reverseCharacter("vert")


// -------------------------------------- findOftenNumber --------------------------------------------------

findOftenNumber

firstArray = [23, 1, 2, 3, 4, 5, 23, 12, 13, 52, 23]

function findOftenNumber(array){
    objet = {}
    maxCount = 0

    array.forEach(element => {
        objet[element] = (objet[element] || 0) +1;

        if(objet[element] > maxCount){
            maxCount = element;
        }
    });

    console.log(maxCount)
}

findOftenNumber(firstArray)


// ------------------------------------- deleteDuplicate ---------------------------------------------------

