//html-elementen in variabelen steken
var inputCurrency = document.getElementById("inputCurrency");
var btnCurrency = document.getElementById("btnCurrency");
var uitvoerCurrency = document.getElementById("uitvoerCurrency");
var selectCurrency = document.getElementById("currencySelector");

//event listener toevoegen aan een knop, klikken op de knop
btnCurrency.addEventListener("click", function(){
    //hoeveelheid uit input halen
   let geld = parseFloat(inputCurrency.value);
    //eenheid uit select halen
   let currency = currencySelector.value;
    //resultaat berekenen met functie met parameters
   let resultaat = calculateCurrency(geld, currency);
    //p-element aanmaken
   let zin = document.createElement("p");
    //tekst aanmaken
   let tekst = "&euro;" + geld + " is " +resultaat;
    
    //p-element invullen met tekst
    zin.innerHTML = tekst;
    //p-element als child toevoegen aan uitvoer
    uitvoerCurrency.appendChild(zin);
});

//functie om euro te bereken naar een andere eenheid, aantal en eenheid wordt meegegeven met de functie
function calculateCurrency(aantal, eenheid) {
    //variabele om resultaat in op te slaan
    let resultaat;
    //switch om te controleren welke eenheid werd gekozen
    switch(eenheid) {
            //cases bij bepaalde gekozen eenheden
        case "yen":
            //berekening van euro naar eenheid
            resultaat = "&#165;" + aantal * 117.222;
            //stoppen van switch
            break;
        case "dollar":
            resultaat = "&#36;" + aantal * 1.0985;
            break;
        case "russian ruble":
            resultaat = "&#8381;" + aantal * 71.0698577;
            break;
        case "canadian dollar":
            resultaat = "C&#36;" + aantal * 1.46366531;
            break;
    }
   
   return resultaat;
}