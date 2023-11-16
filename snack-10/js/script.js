// Inserisci un <h1> al centro della pagina con un numero randomico all'interno e un bottone sotto. Ad ogni click del bottone aumento il numero nell'h1 di 3 e lo aggiorno in pagina.  

//creo un h1
    //inserisco un numero random all'interno
    //aggiungo le classi che lo mettono al centro della pagina
//creo un bottone
    //aggiungo un eventlistener al click
        //al click il numero all'interno di h1 aumenta di 3

const wrapperElement = document.querySelector("div.wrapper");

const h1Element = document.createElement("h1");
let randomNumber = (Math.floor(Math.random() * 1000));
h1Element.append(randomNumber);
wrapperElement.appendChild(h1Element);

const mainElement = document.querySelector("main");
mainElement.classList.add("center");

const buttonElement = document.createElement("button")
wrapperElement.appendChild(buttonElement);
buttonElement.innerHTML = ("Aumenta di 3");

buttonElement.addEventListener("click", function(){
    randomNumber = randomNumber + 3;
    console.log(randomNumber);

    h1Element.innerHTML = randomNumber;
});
