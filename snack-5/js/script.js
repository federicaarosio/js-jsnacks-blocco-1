// L'utente inserisce due parole in successione, con due prompt.
// Il software stampa prima la parola più corta, poi la parola più lunga.

const firstWord = (prompt("Type one word"));
const secondWord = (prompt("Type another word"));
console.log(firstWord);
console.log(secondWord);

const firstWordLenght = firstWord.length;
console.log(firstWordLenght);

const secondWordLenght = secondWord.length;
console.log(secondWordLenght);

if (firstWord < secondWord) {
    console.log(`${firstWord} + ${secondWord}`)
} else if (secondWord.lenght < firstWord.lenght) {
    console.log (`${secondWord} + ${firstWord}`)
}