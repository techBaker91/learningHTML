//Image map functions
function myFunction0() {
    alert("You clicked the computer!")
}
function myFunction1() {
    alert("You clicked the phone!")
}
function myFunction2() {
    alert("You clicked the coffee!")
}

//Button to change text
function displayResult() {
    document.getElementById("myHeader").innerHTML = "Have a nice day!";
    document.getElementById("myHeader").style.color = "blue";
    document.getElementById("myHeader").style.backgroundColor = "yellow";
} 

//Figure out why the var myVideo would not work outside the function. said "myVideo undefined"
//Functions for bunny and butterfly video
function playPause() { 
    var myVideo = document.getElementById("video1");
  if (myVideo.paused) 
    myVideo.play(); 
  else 
    myVideo.pause(); 
} 

function makeBig() { 
    var myVideo = document.getElementById("video1");
    myVideo.width = 560; 
} 

function makeSmall() { 
    var myVideo = document.getElementById("video1");
    myVideo.width = 320; 
} 

function makeNormal() { 
    var myVideo = document.getElementById("video1");
    myVideo.width = 420; 
} 

//functions for drag and drop feature
function allowDrop(ev) {
    ev.preventDefault();
  }
  
  function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
  }
  
  function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
  }