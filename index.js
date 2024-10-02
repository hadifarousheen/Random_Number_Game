
document.querySelector(".btn").addEventListener("click",handleclick);
function handleclick(){
    var num=document.getElementById("box").value;
    var randomnumber= Math.floor((Math.random() * 2) + 1);
    console.log(num);
console.log(randomnumber);
 if(num==randomnumber){
    document.querySelector("h1").innerHTML=" 🎉YOU WON!🎉";
    var audio = new Audio('blue.mp3');
    audio.play();
    $("body").css("background-color","lightblue");
 }
 else
 {
    document.querySelector("h1").innerHTML="YOU LOST TRY AGAIN!";
   $("body").css("color","white");
    $("body").css("background-color","red");
    var audio = new Audio('wrong.mp3');
audio.play();
 }
}
document.querySelector(".btn2").addEventListener("click",handleplay);
function handleplay(){
    document.getElementById("box").value=null;
    document.querySelector("h1").innerHTML="Guess a Random Number from 1 to 3";
    $("body").css("background-color"," #F4CE14");
    $("body").css("color","black");
}
