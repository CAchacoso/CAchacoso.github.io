/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var buttonElement = document.getElementById("title2-button");
var buttonToggle = false;
var buttonElement1 = document.getElementById("image-button");


$("#title2-button").click(function () {
    if (!buttonToggle) {
        $("#title2").css("color", "yellow");
        buttonToggle = true;
    } else {
        $("#title2").css("color", "black");
        buttonToggle = false;
    }
});
$("#image-button").click(function () {
    $("#open-hours").animate({
        left: '100%',
        opacity: '0'
    });
});

