function reverseCharacter(word){
    let reverse = word.split("").reverse().join("")
    console.log(reverse)

    if(word === reverse){
        console.log("this is a palindrome")
    } else {
        console.log("this is not a palindrome")
    }
}

reverseCharacter("kayak")
