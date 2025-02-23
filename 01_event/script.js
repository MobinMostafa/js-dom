const yellow = document.getElementById("yellow");
const red = document.getElementById("red");
const blue = document.getElementById("blue");
const purple = document.getElementById("purple");
const green = document.getElementById("green");
const body = document.body;

yellow.addEventListener("click", function() {
   body.style.backgroundColor = "yellow";
});

red.addEventListener("click", function() {
  body.style.backgroundColor = "red";
});

blue.addEventListener("click", function() {
   body.style.backgroundColor = "blue";
});

purple.addEventListener("click", function() {
   body.style.backgroundColor = "purple";       
});
green.addEventListener("click", function() {
   body.style.backgroundColor = "green";
});