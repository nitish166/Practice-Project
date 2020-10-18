// return a random number between 1 and 6
var randamNumber1 = Math.floor((Math.random()*6) +1); // 1-6

var randamNumber2 = Math.floor((Math.random()*6)+1);


var dicee1 = "images/dice"+randamNumber1+".png";  // it will give the images/dice1.png to dice6s.png
var dicee2 = "images/dice"+randamNumber2+".png";

document.querySelector(".img1").setAttribute("src", dicee1);  
document.querySelector(".img2").setAttribute("src",dicee2);

// player 1 Wins
if(randamNumber1>randamNumber2)
{
    document.querySelector("h1").innerHTML = "<em>Player1 Wins!</em>";
}
else if(randamNumber2>randamNumber1)
{
    document.querySelector("h1").innerHTML = "<em>Player2 Wins!</em>";
}
else{
    document.querySelector("h1").innerHTML = "<em>Draw!</em>"
}

// test in the console of randomnumbers
console.log(randamNumber1);
