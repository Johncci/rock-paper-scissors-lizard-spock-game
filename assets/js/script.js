$(document).ready(function () {

    //const declarations using jQuery

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
    const outcome = $("#outcome");

    //assigning a numercial value to each selection option 

    const options = {
        ROCK: 0,
        PAPER: 1,
        SCISSORS: 2,
        LIZARD: 3,
        SPOCK: 4,
    };

    // starts values at 0 and null that will change as the user plays the game

    let userScore = 0;
    let botScore = 0;
    let userChoice = null;
    let botChoice = null;

    // function declaration for hamburger menu

    hamburger.click(function () {
        toggleMenu();
    });

    /** The following are function declarations for picking any of the gameplay options as in rock, paper ,scissors, lizard and spock.
     * The playUserTurn will select the clicked item for the user.
     * The playBotTurn function will choose a random option.
     * The makeDecision will then decide the winner of that particular round.
     */

    rock.click(function () {
        playUserTurn(options.ROCK);
        playBotTurn();
        makeDecision();

    });

    paper.click(function () {
        playUserTurn(options.PAPER);
        playBotTurn();
        makeDecision();

    });

    scissors.click(function () {
        playUserTurn(options.SCISSORS);
        playBotTurn();
        makeDecision();

    });

    lizard.click(function () {
        playUserTurn(options.LIZARD);
        playBotTurn();
        makeDecision();

    });

    spock.click(function () {
        playUserTurn(options.SPOCK);
        playBotTurn();
        makeDecision();

    });

    // The original method for the below hamburger function was created in vanilla javaScript.
    // This was converted to jQuery css sourced from w3 schools.

    function toggleMenu() {
        if (menu.css("display") == "none") {
            menu.css("display", "flex");
        } else {
            menu.css("display", "none");
        }
    }

    /**The below method takes a random number from 0 to 4 and multiplies it by 5 and then math.floor rounds it down to a single number
     * It then gets the option image for the bot.
     * The bot.attr gets the random image and places it in the combatant box for the bot.
     */

    function playBotTurn() {
        let random = Math.floor(Math.random() * 5);
        botChoice = random;
        let randomOptionImage = getOptionImage(random);
        bot.attr("src", randomOptionImage);
    }

    // The below function places the user choice selected option into the users combatant box by gettting the selected image. 


    function playUserTurn(selectedOption) {
        userChoice = selectedOption;
        let selectedImage = getOptionImage(selectedOption);
        player.attr("src", selectedImage);
    }

    // The below if/else statements decide all the possible outcomes for the game.

    function makeDecision() {
        if (userChoice == botChoice) {
            outcome.text("It's a tie!");
        }

        if (userChoice == options.ROCK) {
            if (botChoice == options.PAPER || botChoice == options.SPOCK) {
                botScore++;
                outcome.text("Bot scored a point!");

            } else if (botChoice == options.LIZARD || botChoice == options.SCISSORS) {
                userScore++;
                outcome.text("You scored a point!");
            }
        }

        if (userChoice == options.PAPER) {
            if (botChoice == options.SCISSORS || botChoice == options.LIZARD) {
                botScore++;
                outcome.text("Bot scored a point!");
            } else if (botChoice == options.ROCK || botChoice == options.SPOCK) {
                userScore++;
                outcome.text("You scored a point!");
            }

        }

        if (userChoice == options.SCISSORS) {
            if (botChoice == options.ROCK || botChoice == options.SPOCK) {
                botScore++;
                outcome.text("Bot scored a point!");
            } else if (botChoice == options.LIZARD || botChoice == options.PAPER) {
                userScore++;
                outcome.text("You scored a point!");
            }
        }

        if (userChoice == options.LIZARD) {
            if (botChoice == options.SCISSORS || botChoice == options.ROCK) {
                botScore++;
                outcome.text("Bot scored a point!");
            } else if (botChoice == options.PAPER || botChoice == options.SPOCK) {
                userScore++;
                outcome.text("You scored a point!");
            }
        }

        if (userChoice == options.SPOCK) {
            if (botChoice == options.PAPER || botChoice == options.LIZARD) {
                botScore++;
                outcome.text("Bot scored a point!");
            } else if (botChoice == options.ROCK || botChoice == options.SCISSORS) {
                userScore++;
                outcome.text("You scored a point!");
            }
        }

        //These functions are called after the user selects a choice and when the game winning score is reached.


        updateScore();
        userWins();
        botWins();
        endGame();


    }

    //This function updates the score boxes.

    function updateScore() {
        botScoreText.text(botScore);
        userScoreText.text(userScore);

    }

    //This function updates the outcome of the game if the user wins and displays the assigned text.


    function userWins() {
        if (userScore === 5) {
            outcome.text("Congratulations, You are the winner!");
        }

    }

    //This function updates the outcome of the game if the bot wins and displays the assigned text.

    function botWins() {
        if (botScore === 5) {
            outcome.text("Bot wins, better luck next time!");
        }
    }

    //This function resets the game when the winning score is reached by the user or the bot.

    function endGame() {
        if (userScore == 5 || botScore == 5) {
            userScore = 0;
            botScore = 0;
        }

    }

    //This switch/case statement gets the images required for the above functions based on selections.


    function getOptionImage(option) {
        switch (option) {
            case options.ROCK:
                return "assets/images/rock.option.webp";
            case options.PAPER:
                return "assets/images/paper.option.webp";
            case options.SCISSORS:
                return "assets/images/scissors.option.webp";
            case options.LIZARD:
                return "assets/images/lizard.option.webp";
            case options.SPOCK:
                return "assets/images/spock.option.webp";
            default:
                return "";


        }
    }
});