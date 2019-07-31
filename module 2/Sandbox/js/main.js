console.log ("loaded")
var menuBtn = document.getElementById("menuBtn");
console.log(menuBtn);
var overlay = document.getElementById('overlay');
var closeBtn = document.getElementById("closeBtn");

menuBtn.addEventListener("click", function() {
//find the #overlay and add a class
    console.log("clicked the damn button");
    overlay.classList.add("active");   
});//end menu button

closeBtn.addEventListener("click", function() {
    overlay.classList.remove("active");

})//end close button