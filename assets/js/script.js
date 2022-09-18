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
    let userChoice = null;
    let botChoice = null;



    hamburger.click(function () {
        toggleMenu()
    })

    rock.click(function () {
        playUserTurn(options.ROCK)
        playBotTurn()
        makeDecision()
    })

    paper.click(function () {
        playUserTurn(options.PAPER)
        playBotTurn()
        makeDecision()

    })

    scissors.click(function () {
        playUserTurn(options.SCISSORS)
        playBotTurn()
        makeDecision()

    })

    lizard.click(function () {
        playUserTurn(options.LIZARD)
        playBotTurn()
        makeDecision()

    })

    spock.click(function () {
        playUserTurn(options.SPOCK)
        playBotTurn()
        makeDecision()

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
        botChoice = random;
        let randomOptionImage = getOptionImage(random);
        bot.attr("src", randomOptionImage);
    }


    function playUserTurn(selectedOption) {
        userChoice = selectedOption;
        let selectedImage = getOptionImage(selectedOption)
        player.attr("src", selectedImage)
    }

    function makeDecision() {
        if (userChoice == botChoice) {
            console.log("its a tie!")
        }

        if (userChoice == options.ROCK) {
            if (botChoice == options.PAPER || botChoice == options.SPOCK) {
                botScore++;
            } else if (botChoice == options.LIZARD || botChoice == options.SCISSORS) {
                userScore++
            }
        }

        if (userChoice == options.PAPER) {
            if (botChoice == options.SCISSORS || botChoice == options.LIZARD) {
                botScore++;
            } else if (botChoice == options.ROCK || botChoice == options.SPOCK) {
                userScore++
            }

        }

        if (userChoice == options.SCISSORS) {
            if (botChoice == options.ROCK || botChoice == options.SPOCK) {
                botScore++
            } else if (botChoice == options.LIZARD || botChoice == options.PAPER) {
                userScore++
            }
        }

        if (userChoice == options.LIZARD) {
            if (botChoice == options.SCISSORS || botChoice == options.ROCK) {
                botScore++
            } else if (botChoice == options.PAPER || botChoice == options.SPOCK) {
                userScore++
            }
        }

        if (userChoice == options.SPOCK) {
            if (botChoice == options.PAPER || botChoice == options.LIZARD) {
                botScore++
            } else if (botChoice == options.ROCK || botChoice == options.SCISSORS) {
                userScore++
            }
        }

        updateScore()
        userWins()
        botWins()
        endGame()


    }


    function updateScore() {
        botScoreText.text(botScore);
        userScoreText.text(userScore);

    }

    function userWins() {
        if (userScore === 5) {
            alert("Congratulations, You are the winner!")
        }

    }

    function botWins() {
        if (botScore === 5) {
            alert("The bot has won, better luck next time!")
        }
    }

    function endGame() {
        if (userScore === 5 || botScore === 5) {
            document.location.reload();
            clearInterval(interval);
        }

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