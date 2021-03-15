/*
document.querySelector("button").addEventListener("click",handleclick);

function handleclick(){
  alert("i got clicked");
}
// the above function is for what to do upon clicked


---------can also be written as------------

document.querySelector("button").addEventListener("click",function()){
  alert("i got clicked");
});
*/

//adding event listener to all the buttons


//detecting button pressed
var totalButtons = document.querySelectorAll(".drum").length;

for(var i=0;i<totalButtons;i++){
  document.querySelectorAll(".drum")[i].addEventListener("click",function(){

     var buttonInnerhtml= this.innerHTML;
       makeSound(buttonInnerhtml);
       buttonAnimation(buttonInnerhtml);
  });
}

//detecting keyboard pressed

document.addEventListener("keypress",function(event){
  makeSound(event.key);
  buttonAnimation(event.key);
});


 function makeSound(key){


   switch (key) {
     case "w":
       var tom1 = new Audio("sounds/tom-1.mp3");
       tom1.play();
       break;
       case "a":
         var tom2 = new Audio("sounds/tom-2.mp3");
         tom2.play();
         break;
         case "s":
           var tom3 = new Audio("sounds/tom-3.mp3");
           tom3.play();
           break;
           case "d":
             var tom4 = new Audio("sounds/tom-4.mp3");
             tom4.play();
             break;
             case "j":
               var snare = new Audio("sounds/snare.mp3");
               snare.play();
               break;
               case "k":
                 var crash = new Audio("sounds/crash.mp3");
                 crash.play();
                 break;
                 case "l":
                   var kick = new Audio("sounds/kick.mp3");
                   kick.play();
                   break;


     default: console.log(buttonInnerhtml);

   }
 }

// adding animation to the document

function buttonAnimation(currentkey){

    var activeButton = document.querySelector("." + currentkey);
       activeButton.classList.add("pressed");

     setTimeout(function(){
       activeButton.classList.remove("pressed")
     },100);


}



/* adding sound to the Buttons

var audio = new Audio("sounds/tom-1.mp3");
audio.play();
*/
