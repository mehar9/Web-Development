var randomNumber1 = Math.floor(Math.random()*6);
var dice1 = "images/dice"+(randomNumber1+1) + ".png";
document.querySelector(".img1").setAttribute("src",dice1);

var randomNumber2 = Math.floor(Math.random()*6);
var dice2 = "images/dice"+(randomNumber2+1) + ".png";
document.querySelector(".img2").setAttribute("src",dice2);

if(randomNumber1>randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 Wins this round !!";
}
else if(randomNumber2>randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 Wins this round !!";
}
else if (randomNumber2 == randomNumber1) {
    document.querySelector("h1").innerHTML = "This Round is a TIE !!"
}