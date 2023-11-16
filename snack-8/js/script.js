// Chiedi un numero di 7 cifre all'utente e calcola la somma di tutte le cifre che compongono il numero.


//Chiedo un numero di 7 cifre

//Prendo ogni singola cifra del numero
    //Devo scorrere il numero fino alla fine e sommare ogni cifra a quanto ottenuto (ciclo for)
    



const userNumber = prompt("Inserisci un numero di 7 cifre");

//console.log(userNumber.charAt(0));

// let userNumber = [1,2,3,4,5,6,7];

// const firstNumber = (userNumber % 10);
// console.log(firstNumber);

// const secondNumber = ((userNumber % 100 - firstNumber) / 10);
// console.log(secondNumber);

let somma = 0; 

for(i = 0 ; i < userNumber.length; i++) {
    // console.log(userNumber.charAt(i));
     // somma = somma + userNumber[i];
     somma += parseInt(userNumber.charAt(i));
     console.log("giro n:" + i + " - lettera analizzata:" + userNumber.charAt(i) + "- somma:" + somma);
    }

console.log(somma);

