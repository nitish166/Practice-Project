
// Adding event listeners to a button
var numberOfDrumButton = document.querySelectorAll(".drum").length;
for(var i=0; i<numberOfDrumButton; i++)
{

    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        alert("I got clicked");
    });
}

// higher order function

function add(num1, num2)
{
    return num1+num2;
}

function substract(num1, num2)
{
    return num1-num2;
}

function multiply(num1, num2)
{
    return num1*num2;
}

function divide(num1, num2)
{
    return num1/num2;
}

function calculator(num1, num2, operator)
{
    return operator(num1, num2);
}



