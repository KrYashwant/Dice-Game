var randomNumber1=Math.floor(Math.random()*6)+1;
var randomImage="images/"+"dice"+randomNumber1+".png";
var currentImage=document.querySelectorAll("img")[0];
currentImage.setAttribute("src",randomImage);

var randomNumber2=Math.floor(Math.random()*6)+1;
randomImage="images/"+"dice"+randomNumber2+".png";
 currentImage=document.querySelectorAll("img")[1];
 currentImage.setAttribute("src",randomImage);
 if(randomNumber1>randomNumber2)
 {
     document.querySelector("h1").innerHTML="Wooh, player 1 wins 🎊";
 }
 else if(randomNumber2>randomNumber1)
 {
     document.querySelector("h1").innerHTML="Wooh,player 2 wins 🎊";
 }
 else
 {
     document.querySelector("h1").innerHTML="It's draw 🎃";
 }


