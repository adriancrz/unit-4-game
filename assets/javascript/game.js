$(document).ready(function(){

    //All variables needed.
    var randomNumber = 0;
    var keldeoNmbr = 0;
    var victiniNmbr = 0;
    var genesectNmbr = 0;
    var manaphyNmbr = 0;

    //Random number generator.
    function randomNumberGenerator() {
        randomNumber = Math.floor(Math.random() * (120 - 19 +1)) + 19;
        $("#randomNumberId").html(randomNumber);
    }

    //Random number generator for all gems.
    function randomGemNumberGenerator() {
        keldeoNmbr = Math.floor(Math.random() * 12) + 1;
        victiniNmbr = Math.floor(Math.random() * 12) + 1;
        genesectNmbr = Math.floor(Math.random() * 12) + 1;
        manaphyNmbr = Math.floor(Math.random() * 12) + 1;
    }

    //Function call outs.
        randomNumberGenerator();
        randomGemNumberGenerator();

    //Variables for updating score
    var totalScore = 0;
    var win = 0;
    var lose = 0;

    //Functions for adding value per gem clicked.
    $("#Keldeo").on("click", function() {
        totalScore = totalScore + keldeoNmbr;
        $("#currentScore").html(totalScore);

        //Updating score when winning.
        if (totalScore === randomNumber) {
            win = win +1;
            $("#wins").html("Wins: " + win);
            $("#message").html("Winner!");

            randomNumberGenerator();
            randomGemNumberGenerator();
            totalScore = 0;
            $("#currentScore").html(totalScore);
        }

        //Updating score when losing.
        if (totalScore > randomNumber) {
            lose = lose +1;
            $("#losses").html("Losses: " + win);
            $("#message").html("What a looser, dude!");

            randomNumberGenerator();
            randomGemNumberGenerator();
            totalScore = 0;
            $("#currentScore").html(totalScore);
        }
    });

    $("#Manaphy").on("click", function() {
        totalScore = totalScore + manaphyNmbr;
        $("#currentScore").html(totalScore);

        //Updating score when winning.
        if (totalScore === randomNumber) {
            win = win +1;
            $("#wins").html("Wins: " + win);
            $("#message").html("Winner!");

            randomNumberGenerator();
            randomGemNumberGenerator();
            totalScore = 0;
            $("#currentScore").html(totalScore);
        }

        //Updating score when losing.
        if (totalScore > randomNumber) {
            lose = lose +1;
            $("#losses").html("Losses: " + win);
            $("#message").html("What a looser, dude!");

            randomNumberGenerator();
            randomGemNumberGenerator();
            totalScore = 0;
            $("#currentScore").html(totalScore);
        }
    });
    $("Victini").on("click", function() {
        totalScore = totalScore + victiniNmbr;
        $("#currentScore").html(totalScore);

        //Updating score when winning.
        if (totalScore === randomNumber) {
            win = win +1;
            $("#wins").html("Wins: " + win);
            $("#message").html("Winner!");

            randomNumberGenerator();
            randomGemNumberGenerator();
            totalScore = 0;
            $("#currentScore").html(totalScore);
        }

        //Updating score when losing.
        if (totalScore > randomNumber) {
            lose = lose +1;
            $("#losses").html("Losses: " + win);
            $("#message").html("What a looser, dude!");

            randomNumberGenerator();
            randomGemNumberGenerator();
            totalScore = 0;
            $("#currentScore").html(totalScore);
        }
    });
    $("Genesect").on("click", function() {
        totalScore = totalScore + genesectNmbr;
        $("#currentScore").html(totalScore);

        //Updating score when winning.
        if (totalScore === randomNumber) {
            win = win +1;
            $("#wins").html("Wins: " + win);
            $("#message").html("Winner!");

            randomNumberGenerator();
            randomGemNumberGenerator();
            totalScore = 0;
            $("#currentScore").html(totalScore);
        }

        //Updating score when losing.
        if (totalScore > randomNumber) {
            lose = lose +1;
            $("#losses").html("Losses: " + win);
            $("#message").html("What a looser, dude!");

            randomNumberGenerator();
            randomGemNumberGenerator();
            totalScore = 0;
            $("#currentScore").html(totalScore);
        }
    });


    //Reseting game stats.
    $("#reset").on("click", function() {
        win = 0;
        lose = 0;
        totalScore = 0;
        $("#wins").html("Wins: " + 0);
        $("#losses").html("Losses: " + 0);
        $("#currentScore").html(totalScore);
        $("#message").html()
        randomNumberGenerator();
        randomGemNumberGenerator();
    });
});