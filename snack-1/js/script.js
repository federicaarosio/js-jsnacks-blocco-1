// chiedere all'utente con due prompt gli anni di due persone e comunicare quale delle due è più grande

const agePerson1 = paseInt(prompt("Type the age of person 1"));
const agePerson2 = parseInt(prompt("Type the age of person 2"));

if (agePerson1 > agePerson2) {
    document.getElementById("output").innerHTML = "The first person is older than the second";
} else if (agePerson2 > agePerson1) {
    document.getElementById("output").innerHTML = "The second person is older than the first";
} else {
    document.getElementById("output").innerHTML = "Person 1 and person 2 are of the same age";
}