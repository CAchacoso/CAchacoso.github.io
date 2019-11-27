/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
window.onscroll = function() 
{scrollFunction();};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("top").style.display = "block";
  } else {
    document.getElementById("top").style.display = "none";
  }
}

window.onscroll = function() 
{myFunction();};

var navbar = document.getElementByClass("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}

$(document).ready(function() {
       var myElement = $('.top1');
       $(window).on('scroll', function () {
         var st = $(this).scrollTop1();
         myElement.css({
            'opacity': 1 - st / 600
         });
      });
    });

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
  }
  
$(document).ready(function(){
   $(window).scrollTop(0); 
});