// Chiedi all'utente due numeri, uno piu' piccolo (due cifre) e uno piu' grande (almeno quattro cifre): moltiplica il primo numero per 2 finche' non arriva ad essere maggiore del secondo numero.

//chiedo numero 1 (due cifre)
//chiedo numero 2 (4 cifre)

//SE
    //numero 1 * 2 > numero 2
        //continuo a moltiplicare
    //altrimenti esco dal ciclo


let firstNumber = parseInt(prompt("Inserisci un numero a due cifre"));
console.log("Il primo numero scelto è:" + firstNumber);

const secondNumber = parseInt(prompt("Inserisci un numero da quattro cifre in su"));
console.log("Il secondo numero scelto è:" + secondNumber);


for(i = 0; firstNumber <= secondNumber; i++){
   if(firstNumber < secondNumber){

    firstNumber = firstNumber * 2;
    console.log("giro n:" + i );

   }
   console.log(firstNumber)

}
