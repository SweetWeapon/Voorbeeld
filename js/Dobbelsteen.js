var btnDobbelsteen = document.getElementById("btnDobbelsteen");
var uitvoerDobbelsteen = document.getElementById("uitvoerDobbelsteen");

btnDobbelsteen.addEventListener("click", function() {
    let getal = getRandomInt(1, 6);
    
    uitvoerDobbelsteen.innerHTML = getal;
});

//functie om een willekeurig getal te verkrijgen tussen min en max. min en max zijn parameters die worden meegegeven wanneer de functie wordt aangeroepen
function getRandomInt(min, max) {
    return Math.round(Math.random() * (max - min ) + min);
}