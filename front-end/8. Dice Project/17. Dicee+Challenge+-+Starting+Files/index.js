var random1 = Math.floor((Math.random()*6)+1);
var random2 = Math.floor((Math.random()*6)+1);


var link1 = "images/dice"+random1+".png";
var link2 = "images/dice"+random2+".png";
// console.log(link1);

document.querySelector(".img1").setAttribute("src", link1);
document.querySelector(".img2").setAttribute("src", link2);
var status;
if (random1 === random2) {
    status = "Draw";
} else if (random1 > random2) {
    status = "Player 1 won";
} else {
    status = "Player 2 won";
}

document.querySelector("h1").innerText = status;