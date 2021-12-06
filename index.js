function reverseWord(word) {
    let reverse = word.toLowerCase().split("").reverse().join("");
    return reverse.charAt(0).toUpperCase() + reverse.slice(1)
}
 
let resultat = reverseWord("Udemy");