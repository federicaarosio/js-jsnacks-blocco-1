// In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby (createlo voi con almeno 5 nomi), chiedi all'utente il suo nome e comunicagli se può partecipare o no alla festa.

const guestsList = [
    "Marco",
    "Giovanni",
    "Sara",
    "Martina",
    "Alessio"
]

console.log(guestsList);
let isUserAGuest = false;

// Chiedo all'utente il nome
const userName = prompt ("Inserisci il tuo nome");
console.log(userName);

for (let i = 0; i < guestsList.length; i++) {
    const currentName = guestsList[i];

    if (userName == currentName) {
        isUserAGuest = true;
    }
}

console.log(isUserAGuest);

if (isUserAGuest) {
    console.log("Sei nella lista degli invitati: entra!")
} else {
    console.log("Non sei nella lista degli invitati!")
}