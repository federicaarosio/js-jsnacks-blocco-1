// Chiedi un numero di 7 cifre all'utente e calcola la somma di tutte le cifre che compongono il numero.


//Chiedo un numero di 7 cifre

//Prendo ogni singola cifra del numero
    //Devo scorrere il numero fino alla fine e sommare ogni cifra a quanto ottenuto (ciclo for)
    



const userNumber = parseInt(prompt("Inserisci un numero di 7 cifre"));

const firstNumber = (userNumber % 10);
console.log(firstNumber);

const secondNumber = ((userNumber % 100 - firstNumber) / 10);
console.log(secondNumber);


// for(i = 0 ; i < 6; i++) {
//     const sumDigits = 
// }