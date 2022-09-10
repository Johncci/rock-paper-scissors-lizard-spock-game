$(document).ready(function () {

    const menu = document.getElementById("menu");
    const hamburger = document.getElementById("hamburger-icon");

    hamburger.onclick = () => {
        console.log("clicked")
        toggleMenu()
    }

    function toggleMenu() {
        if (menu.style.display == "none") {
            menu.style.display = "flex";
        } else {
            menu.style.display = "none"
        }
    }


})