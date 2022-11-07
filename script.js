
//makes "answerbox invisible"
function hideanswerbox() {
    element = document.querySelector('.answerbox');
    element.style.visibility = 'hidden';


}
hideanswerbox();
//declaring variables and arrays
var grabberEL = document.getElementById("namegraber1");
var highscoreEL = document.getElementById("highscore");
var h1 = document.getElementById("toptext");
//var hr = document.getElementById("line");
var ppEL = document.getElementById("pee");
var boxA = document.getElementById("buttonA");
var boxB = document.getElementById("buttonB");
var boxC = document.getElementById("buttonC");
var boxD = document.getElementById("buttonD");
var questionasked = document.getElementById("bottomtext");
var btnbox = document.getElementById(".button-center");
var btn = document.querySelector(".START")
testanswer0 = ["Declaration statements", "Keywords", "Data types", "Prototypes"];
testanswer1 = ["Global variable", "Both A and C", "The local element", "None of the above"];
testanswer2 = ["Both x and y are equal in value, type and reference address as well.", "Both are equal in the value and data type", "Both are x and y are equal in value only.", "Both are not same at all."];
testanswer3 = ["if(a!=null)", "if(a!null)", "if (a!)", "if(a!==null)"];
questions = ["The 'function' and 'var' are known as:", "Which of the following variables takes precedence over the others if the names are the same?", "In JavaScript the x===y statement implies that:", "Choose the correct snippet from the following to check if the variable 'a' is not equal the 'NULL':"];
var score = 0
var z = 0;
//hides form "namegraber"
grabberEL.setAttribute('class', 'hide');
//hides "highscore" 
highscoreEL.style.visibility = "hidden";
//runs this game on start click
function startgame() {
    //resets score and z variables. z is used for set question function
    z = 0;
    score = 0;
    //hides h1 and start button upon click
    h1.style.visibility = "hidden";
    btn.disabled = true;
    const startScreen = document.getElementById('start')
    startScreen.classList.add('hide')
    //hides score list on game start
    highscoreEL.style.visibility = "hidden";

    //makes "answerbox in HTML visible on click of start button"
    element = document.querySelector('.answerbox');
    element.style.visibility = 'visible';


    //timer

    var timeEl = document.querySelector(".time");

    var secondsLeft = 35;

    function setTime() {

        var timerInterval = setInterval(function () {
            secondsLeft--;
            timeEl.textContent = secondsLeft + " seconds left";

            if (secondsLeft <= 0) {
                clearInterval(timerInterval);
                sendMessage();
                hideanswerbox();
            }
        }, 1000);
    }


    function sendMessage() {
        timeEl.textContent = "FINISHED";
        displayform();


    }

    setTime();
    //runs set question function
    setquestion();
    //function to go through array questions and make answers display in the "answerbox" depending on which question is asked
    function setquestion() {

        if ((z > 3) || (secondsLeft <= 0)) {

            hideanswerbox();
            secondsLeft = 0;
            setTime(secondsLeft);
            return;
        }
        questionasked.innerHTML = questions[z];

        var i = 0;
        if (z == 0) {
            y = testanswer0[i];

            boxA.innerText = (y);
            i++;
            y = testanswer0[i];
            boxB.innerText = (y);
            i++;
            y = testanswer0[i];
            boxC.innerText = (y);
            i++;
            y = testanswer0[i];
            boxD.innerText = (y);
        }
        if (z == 1) {
            y = testanswer1[i];

            boxA.innerText = (y);
            i++;
            y = testanswer1[i];
            boxB.innerText = (y);
            i++;
            y = testanswer1[i];
            boxC.innerText = (y);
            i++;
            y = testanswer1[i];
            boxD.innerText = (y);
        }
        if (z == 2) {
            y = testanswer2[i];

            boxA.innerText = (y);
            i++;
            y = testanswer2[i];
            boxB.innerText = (y);
            i++;
            y = testanswer2[i];
            boxC.innerText = (y);
            i++;
            y = testanswer2[i];
            boxD.innerText = (y);
        }
        if (z == 3) {
            y = testanswer3[i];

            boxA.innerText = (y);
            i++;
            y = testanswer3[i];
            boxB.innerText = (y);
            i++;
            y = testanswer3[i];
            boxC.innerText = (y);
            i++;
            y = testanswer3[i];
            boxD.innerText = (y);
        }


    }
    //buttons that make the next question appear and add to your score or take 5 sec away from timer depening on answer
    //BOX.A event listener
    boxA.addEventListener("click", function () {

        if ((z == 0) && (secondsLeft > 0)) {
            score++;
            z++;
            ppEL.textContent = "Correct!";
            console.log("correct! score:", score);
            setquestion();

        } else {
            if (secondsLeft > 0) {
                secondsLeft = secondsLeft - 5;
                z++;
                ppEL.textContent = "Incorrect!";
                setquestion();
            }
        }
    })
    //BOX.B event listener
    boxB.addEventListener("click", function () {
        if ((z == 2) && (secondsLeft > 0)) {
            score++;
            z++;

            ppEL.textContent = "Correct!";
            console.log("correct! score:", score);
            setquestion();
        } else {
            if (secondsLeft > 0) {
                secondsLeft = secondsLeft - 5;
                z++;
                ppEL.textContent = "Incorrect!";
                setquestion();
            }
        }
    })
    //BOX.C event listener
    boxC.addEventListener("click", function () {
        if ((z == 1) && (secondsLeft > 0)) {
            score++;
            z++;
            ppEL.textContent = "Correct!";
            console.log("correct! score:", score);
            setquestion();
        } else {
            if (secondsLeft > 0) {
                secondsLeft = secondsLeft - 5;
                z++;
                ppEL.textContent = "Incorrect!";
                setquestion();
            }
        }
    })
    //BOX.D event listener
    boxD.addEventListener("click", function () {
        if ((z == 3) && (secondsLeft > 0)) {
            score++;
            z++;
            ppEL.textContent = "Correct!";
            console.log("correct! score:", score);
            setquestion();
        } else {
            if (secondsLeft > 0) {
                secondsLeft = secondsLeft - 5;
                z++;
                ppEL.textContent = "Incorrect!";
                setquestion();
            }
        }
    })










}

//starts game on start button click
btn.addEventListener("click", function () {
    startgame();


});
//function that makes the form "namegraber" from html visible
function displayform() {
    //reset ppEL text to blank
    ppEL.textContent = "";
    //makes questionsasked text content display users score
    questionasked.textContent = ("Your score: " + score);


    // makes the form element with id "namegraber1" in html visible
    grabberEL.removeAttribute('class');
    grabberEL.setAttribute('class', 'namegraber');

}
//listener that runs when user enters initials in form "namegraber" from html and clicks submit
grabberEL.addEventListener("submit", getname);

function getname(event) {
    event.preventDefault();
    userinput = document.getElementById("name");

//makes sure user input is 1-3 char long
    var player;
    player = userinput.value
    if ((player.length > 3) || (player.length == 0)) {
        alert("initials must be 1-3 charecters");
        userinput.value = "";
        return;
    }
//stores in local storage
    var storedHighscores = JSON.parse(localStorage.getItem('highscores')) || [];
    var currentHighScore = {
        name: player,
        score: score
    };
    storedHighscores.push(currentHighScore);
    localStorage.setItem('highscores', JSON.stringify(storedHighscores));

    //runs function listmaker below
    listmaker();


//creats a <ul> in "highscore" div in HTML and makes <li> items with user name and score
    function listmaker() {
        //makes form "namegrabber" from html not visible again
        grabberEL.setAttribute('class', 'hide');

        //grabs element "highscore" in html and creats list with player name and score
        highscoreEL = document.getElementById("highscore");
        var listEl = document.createElement("ul");
        
        highscoreEL.appendChild(listEl);
        
        var li1 = document.createElement("li");
        li1.textContent = (player + " - " + score);
        listEl.appendChild(li1);
        highscoreEL.style.visibility = "visible";
       
        //makes start button visible again to play game
        questionasked.textContent = ("press start to play again");
        btn.disabled = false;
        const startScreen = document.getElementById('start')
        startScreen.classList.remove('hide')


    }
};