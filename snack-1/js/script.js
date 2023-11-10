// chiedere all'utente con due prompt gli anni di due persone e comunicare quale delle due è più grande

const agePerson1 = prompt("Insert the age of person 1");
const agePerson2 = prompt("Insert the age of person 2");

if (agePerson1 > agePerson2) {
    document.getElementById("output").innerHTML = "The first person is older than the second"
} else if (agePerson2 > agePerson1) {
    
}