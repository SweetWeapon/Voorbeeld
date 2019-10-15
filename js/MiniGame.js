//objecten met eigenschappen
var persoon1 = {
    levens : 10,
    snelheid : 5,
    aanval : 3,
    image : "../img/Goku.png"
}
var persoon2 = {
    levens : 7,
    snelheid : 7,
    aanval : 5,
    image : "../img/Mario.png"
}

var imgPersoon1 = document.getElementById("imgPersoon1");
var imgPersoon2 = document.getElementById("imgPersoon2");

imgPersoon1.src = persoon1.image;
imgPersoon2.src = persoon2.image;