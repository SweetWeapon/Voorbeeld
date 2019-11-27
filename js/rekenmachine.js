var getal1 = document.getElementById("getal1");
var getal2 = document.getElementById("getal2");

var btnSom = document.getElementById("btnSom");
var btnVerschil = document.getElementById("btnVerschil");
var btnProduct = document.getElementById("btnProduct");
var btnQuotient = document.getElementById("btnQuotient");

var uitvoer = document.getElementById("uitvoer");

btnSom.addEventListener("click", function() {
    let resultaat = parseInt(getal1.value) + 
    parseInt(getal2.value);
    let paragraph = createParagraph();
    paragraph.innerHTML = "de som van " + getal1.value + " en " + getal2.value + " is " + resultaat;
    
    uitvoer.appendChild(paragraph);
})

btnVerschil.addEventListener("click", function() {
    let resultaat = parseInt(getal1.value) -
    parseInt(getal2.value);
    let paragraph = createParagraph();
    paragraph.innerHTML = "Het verschil is " + getal1.value + " en " + getal2.value + " is " + resultaat;
    
    uitvoer.appendChild(paragraph);
})

btnProduct.addEventListener("click", function() {
    let resultaat = parseInt(getal1.value) *
    parseInt(getal2.value);
    let paragraph = createParagraph();
    paragraph.innerHTML = "Het product is " + getal1.value + " en " + getal2.value + " is " + resultaat;
    
    uitvoer.appendChild(paragraph);
})

btnQuotient.addEventListener("click", function() {
    let resultaat = parseInt(getal1.value) /
    parseInt(getal2.value);
    let paragraph = createParagraph();
    paragraph.innerHTML = "Het quotient is " + getal1.value + " en " + getal2.value + " is " + resultaat;
    
    uitvoer.appendChild(paragraph);
});
//functie
function createParagraph() {
    let paragraph = document.createElement("p");
    
    return paragraph;
}