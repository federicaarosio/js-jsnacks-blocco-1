// Ciclare per i primi 100 numeri e inserire in un array esclusivamente i numeri divisibili per 7 o per 8.
const numbersList = [];

for (let i = 0; i < 100; i++) {

    if (i % 7 == 0) {
        numbersList.push(i);
    } else if (i % 8 == 0) {
        numbersList.push(i);
    }
}

for (let i = 0; i < numbersList.length; i++) {
        console.log(numbersList[i]);
}
    
