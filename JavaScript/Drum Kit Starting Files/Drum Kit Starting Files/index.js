
// Adding event listeners to a button
var numberOfDrumButton = document.querySelectorAll(".drum").length;
for(var i=0; i<numberOfDrumButton; i++)
{

    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        //alert("I got clicked");
        // audio 
        // var audio = new Audio('sounds/tom-1.mp3');
        // audio.play();
        console.log(this.innerHTML);
        var temp = this.innerHTML;
        if(temp =='w')
        {
            var audio = new Audio('sounds/tom-1.mp3');
            audio.play();
        }
        else if(temp == 'a')
        {
            var audio = new Audio('sounds/tom-2.mp3');
            audio.play();
        }
        else if(temp == 's')
        {
            var audio = new Audio('sounds/tom-3.mp3');
            audio.play();
        }
        else if(temp == 'd')
        {
            var audio = new Audio('sounds/tom-4.mp3');
            audio.play();
        }
        else if(temp == 'j')
        {
            var audio  = new Audio('sounds/crash.mp3');
            audio.play();
        }
        else if(temp == 'k')
        {
            var audio = new Audio('sounds/kick-bass.mp3')
            audio.play();
        }
        else
        {
            var audio = new Audio('sounds/snare.mp3')
            audio.play();
        }
    });
}

// higher order function

// function add(num1, num2)
// {
//     return num1+num2;
// }

// function substract(num1, num2)
// {
//     return num1-num2;
// }
// function multiply(num1, num2)
// {
//     return num1*num2;
// }

// function divide(num1, num2)
// {
//     return num1/num2;
// }

// function calculator(num1, num2, operator)
// {
//     return operator(num1, num2);
// }



