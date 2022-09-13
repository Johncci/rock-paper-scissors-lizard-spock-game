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

    const userScoretext = $("#userscore");
    const botScoretext = $("#botscore");
    const player = $("#player");
    const bot = $("#bot");
    const rock = $("#rock");
    const paper = $("#paper");
    const scissors = $("#scissors");
    const lizard = $("#lizard");
    const spock = $("#spock");

    const options = {
        ROCK: 0,
        PAPER: 1,
        SCISSORS: 2,
        LIZARD: 3,
        SPOCK: 4,
    }

    let userScore = 0;
    let botScore = 0;

    botScoretext.text("0");

    rock.click(function () {
        playBotTurn
    })

    paper.click(function () {
        playBotTurn
    })

    scissors.click(function () {
        playBotTurn
    })

    lizard.click(function () {
        playBotTurn
    })

    spock.click(function () {
        playBotTurn
    })




})