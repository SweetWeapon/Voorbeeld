//element opvragen uit de html-pagina
var testDiv = document.getElementById("testDiv");

//aanpassen van wat er in een element staat
testDiv.innerHTML = "dit is een stuk tekst";

var knop = document.getElementById("knop");
var tekst1 = "school is leuk";
var teskt2 = "school is niet leuk";
var state = 0;
//event listener toevoegen aan een element
knop.addEventListener("click", function() {
    if(state === 0) {
        testDiv.innerHTML = teskt2;
        state = 1;
    }
    else {
        testDiv.innerHTML = teskt1;
        state = 0;
    }
});