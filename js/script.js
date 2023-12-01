// script.js
function openMenu() {
    document.getElementById("sideMenu").style.width = "250px";
    document.getElementById("mainContent").style.marginLeft = "250px";
}

function closeMenu() {
    document.getElementById("sideMenu").style.width = "0";
    document.getElementById("mainContent").style.marginLeft = "0";
}

var hamburger = document.querySelector(".hamburger");
hamburger.addEventListener("click", function(){
    document.querySelector("body").classList.toggle("active");
})