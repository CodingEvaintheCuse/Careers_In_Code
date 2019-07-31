console.log("loaded");
var ul= document.createElement("ul");//ul = unordered list
var li = document.createElement("li");//list item
var li2 = document.createElement("li");
var tomato = document.createTextNode("tomato");
var onions = document.createTextNode("onions");
var change_paragraph_color = document.getElementById("paragraph-container");
change_paragraph_color.appendChild(description);
var buttonRed = document.getElementById("red");
var blueButton =document.getElementById("blue");
redButton.addEventListener("click", function(){
    change_paragraph_color.style.color = "blue";
});
// ul.appendChild(li);
// ul.appendChild(li2);
// li.appendChild(tomato); 
// li2.appendChild(onions);
// console.log(ul);
// console.log(li);
// var theList = document.getElementById("groceriesList");
// theList.appendChild(ul);
// //console.log("theList");