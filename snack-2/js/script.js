// Scrivo in pagina i primi 6 numeri, scrivendo i numeri pari verdi. BN: numeri dispari gialli

const numberElement = document.querySelector("div.number");

for (let numberElement = 1; numberElement <= 6;  numberElement++) {
    numberElement.innerHTML += 1;
    console.log(numberElement);
}