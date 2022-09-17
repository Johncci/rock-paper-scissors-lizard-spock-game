$(document).ready(function () {

    const menu = $("#menu");
    const hamburger = $("#hamburger-icon");
    const userScoreText = $("#userscore");
    const botScoreText = $("#botscore");
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

    botScoreText.text("0");

    hamburger.click(function () {
        toggleMenu()
    })

    rock.click(function () {
        playUserTurn(options.ROCK)
        playBotTurn()
    })

    paper.click(function () {
        playUserTurn(options.PAPER)
        playBotTurn()

    })

    scissors.click(function () {
        playUserTurn(options.SCISSORS)
        playBotTurn()

    })

    lizard.click(function () {
        playUserTurn(options.LIZARD)
        playBotTurn()

    })

    spock.click(function () {
        playUserTurn(options.SPOCK)
        playBotTurn()

    })

    function toggleMenu() {
        if (menu.css("display") == "none") {
            menu.css("display", "flex");
        } else {
            menu.css("display", "none");
        }
    }

    function playBotTurn() {
        let random = Math.floor(Math.random() * 5);
        let randomOptionImage = getOptionImage(random);
        bot.attr("src", randomOptionImage);
    }

    function playUserTurn(selectedOption) {

        let selectedImage = getOptionImage(selectedOption)
        player.attr("src", selectedImage)
    }


    function getOptionImage(option) {
        switch (option) {
            case options.ROCK:
                return "assets/images/rock.icon.jpg";
            case options.PAPER:
                return "assets/images/paper.icon.jpg";
            case options.SCISSORS:
                return "assets/images/scissors.icon.jpg";
            case options.LIZARD:
                return "assets/images/lizard.icon.jpg";
            case options.SPOCK:
                return "assets/images/spock.jpg";
            default:
                return "";


        }
    }















})