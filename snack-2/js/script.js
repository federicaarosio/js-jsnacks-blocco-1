// Scrivo in pagina i primi 6 numeri, scrivendo i numeri pari verdi. BN: numeri dispari gialli

//recupero elemento
const numberElement = document.querySelector("div.number");
console.log(numberElement);

//scrivo in pagina numero di partenza
numberElement.innerHTML += '<p>Ciao</p>';


//ciclo for
for (let i = 1; i <= 6;  i++) {
    numberElement.innerHTML += `<p>${i}</p>`
}