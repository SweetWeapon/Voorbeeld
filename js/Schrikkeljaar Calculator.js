var inputYear = document.getElementById("inputYear")
var btnLeapYear = document.getElementById("btnLeapYear")
var uitvoerleapYear = document.getElementById("uitvoerLeapYear")

btnLeapYear.addEventListener("click", function() {
    let jaartal = invoerLeapYear.value;
    let tekst = "Het jaar" + jaartal + " is ";
    if(jaartal % 4 !== 0) {
        //niet deelbaar door 4
        tekst += "geen schrikkeljaar";
        
    }
    else {
        //wel deelbaar door 4
        if(jaartal % 100 !== 0) {
            //wel deelbaar door 4 maar niet door 100
            tekst += "een schrikkeljaar";
        }
        else {
            //wel deelbaar door 4 en ook door 100
            if(jaartal % 400 === 0) {
                //deelbaar door 4,100 en 400
                tekst += "een schrikkeljaar";
            }
            else {
                //deelbaar door 4 en 100 maar niet door 400
                tekst += "geen schrikkekjaar";
            }
        }
    }
    uitvoerleapYear.innerHTML = tekst;
});