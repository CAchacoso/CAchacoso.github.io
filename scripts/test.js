/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var buttonElement = document.getElementById("title-button");
var buttonToggle = false;
var elementsArray = document.getElementsByTagName("h1");
var element = elementsArray[0];

buttonElement.addEventListener("click", function () {
    if (!buttonToggle) {
        element.style.color = "yellow";
        element.classList.add("bordered-text");
        buttonToggle = true;
    }
    else{
    element.style.color = "black";
    element.classList.remove("bordered-text");
    buttonToggle = false;
    }
});


