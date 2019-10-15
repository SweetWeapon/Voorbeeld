var sportsArray = ["volleybal", "basketbal", "baseball", "tennis", "paddle", "voetbal", "atletiek", "ballet", "dansen", "rugby", "e-sport", "schaken", "paardrijden", "skaten", "mountainbike", "boksen", "zwemmen", "badminton"];
var balsportArray = ["volleybal", "basketbal", "baseball", "tennis", "paddle", "voetbal", "rugby",];
var geenBalsportArray = ["atletiek", "ballet", "dansen", "e-sport", "schaken", "paardrijden", "skaten", "mountainbike", "boksen", "zwemmen", "badminton"];

var sportKeuze = document.getElementById("sportKeuze");
var btnBallsport = document.getElementById("btnBalsport");
var btnGeenBalsport = document.getElementById("btnGeenBalsport");

//functie uitvoeren wanneer de pagina volledig is geladen
window.onload = willekeurigeSportKiezen(); 
    
    function willekeurigeSportKiezen() {
    //een willekeurig getal kiezen tussen 0 en de lengte van de sportsArray (0-17)
    let random = Math.floor(Math.random() * sportsArray.length);
    sportKeuze.innerHTML = sportsArray[random];
}
btnBallsport.addEventListener("click", function(){
    //de sport uit het element sportKeuze eruithalen
    let sport = sportKeuze.innerHTML;
    //variabele om bij te houden of we juist hebben gekozen
    let juistGekozen = false;
    //doorlopen van heel de balSportArray
    for(var i = 0; i < balsportArray.length; i++){
        //elk element uit balsportArray controleren tov de sport die sportkeuze staat
        if(sport === balsportArray[i]) {
            //we hebben juist gekozen
            juistGekozen = true
        }
    }
    if(juistGekozen) {
         //pop-up om te laten weten dat we goed hebben gekozen
            alert("Goed Zo!");
    }
    else {
        alert("Probeer opnieuw!");
    }
    willekeurigeSportKiezen();
});

btnGeenBalsport.addEventListener("click", function(){
      //de sport uit het element sportKeuze eruithalen
    let sport = sportKeuze.innerHTML;
    //variabele om bij te houden of we juist hebben gekozen
    let juistGekozen = false;
    //doorlopen van heel de balSportArray
    for(var i = 0; i < geenBalsportArray.length; i++){
        //elk element uit balsportArray controleren tov de sport die sportkeuze staat
        if(sport === geenBalsportArray[i]) {
            //we hebben juist gekozen
            juistGekozen = true
        }
    }
    if(juistGekozen) {
         //pop-up om te laten weten dat we goed hebben gekozen
            alert("Goed Zo!");
    }
    else {
        alert("Probeer opnieuw!");
    }
    willekeurigeSportKiezen();
});