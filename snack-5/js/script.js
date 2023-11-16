// L'utente inserisce due parole in successione, con due prompt.
// Il software stampa prima la parola più corta, poi la parola più lunga.

const firstWord = (prompt("Type one word"));
const secondWord = (prompt("Type another word"));
console.log(firstWord);
console.log(secondWord);

if ( firstWord.length >= secondWord.length ) {
    console.log(secondWord, firstWord);
} else {
    console.log(firstWord, secondWord);
}