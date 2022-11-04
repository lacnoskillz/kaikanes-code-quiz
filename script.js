


var grabber = document.getElementById("namegraber1");
grabber.setAttribute('class', 'hide');

//makes "answerbox invisible"
hideanswerbox();
function hideanswerbox() {
    element = document.querySelector('.answerbox');
    element.style.visibility = 'hidden';


}
//declaring variables and arrays
var h1 = document.getElementById("toptext");
var playername = document.getElementById("namegraber1");
var hr = document.getElementById("line");
var pp = document.getElementById("pee");
var boxA = document.getElementById("buttonA");
var boxB = document.getElementById("buttonB");
var boxC = document.getElementById("buttonC");
var boxD = document.getElementById("buttonD");
var questionasked = document.getElementById("bottomtext");
var btnbox = document.getElementById(".button-center");
var btn = document.querySelector(".START")
testanswer0 = ["2", "0", "3", "99"];
testanswer1 = ["mars", "venus", "earth", "sun"];
testanswer2 = ["1", "29", "70", "24"];
testanswer3 = ["snake", "owl", "guitar", "dog"];
questions = ["what is 1+1?", "what planet are we on?", "how old am i?", "which animal has four legs?"];
var score = 0
var z = 0;
originalquestion = questionasked.innerHTML;
//runs this game on start click
function startgame() {
    //hides h1 and start button upon click
    z = 0;
    score = 0;
    h1.style.visibility = "hidden";
    btn.disabled = true;
    const startScreen = document.getElementById('start')
    startScreen.classList.add('hide')

    //makes "answerbox in HTML visible on click of start button"
    element = document.querySelector('.answerbox');
    element.style.visibility = 'visible';


    //timer

    var timeEl = document.querySelector(".time");

    var secondsLeft = 20;

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
        highscore();


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
            console.log("z", z);
            score++;
            z++;
            pp.textContent = "Correct!";
            console.log("correct! score:", score);
            setquestion();

        } else {
            if (secondsLeft > 0) {
                secondsLeft = secondsLeft - 5;
                z++;
                pp.textContent = "Incorrect!";
                setquestion();
            }
        }
    })
    //BOX.B event listener
    boxB.addEventListener("click", function () {
        if ((z == 2) && (secondsLeft > 0)) {
            score++;
            z++;

            pp.textContent = "Correct!";
            console.log("correct! score:", score);
            setquestion();
        } else {
            if (secondsLeft > 0) {
                secondsLeft = secondsLeft - 5;
                z++;
                pp.textContent = "Incorrect!";
                setquestion();
            }
        }
    })
    //BOX.C event listener
    boxC.addEventListener("click", function () {
        if ((z == 1) && (secondsLeft > 0)) {
            score++;
            z++;
            pp.textContent = "Correct!";
            console.log("correct! score:", score);
            setquestion();
        } else {
            if (secondsLeft > 0) {
                secondsLeft = secondsLeft - 5;
                z++;
                pp.textContent = "Incorrect!";
                setquestion();
            }
        }
    })
    //BOX.D event listener
    boxD.addEventListener("click", function () {
        if ((z == 3) && (secondsLeft > 0)) {
            score++;
            z++;
            pp.textContent = "Correct!";
            console.log("correct! score:", score);
            setquestion();
        } else {
            if (secondsLeft > 0) {
                secondsLeft = secondsLeft - 5;
                z++;
                pp.textContent = "Incorrect!";
                setquestion();
            }
        }
    })










}




//starts game on start button click
btn.addEventListener("click", function () {
    startgame();


});

function highscore() {
    //reset pp text to blank
    pp.textContent = "";
    questionasked.textContent = ("Your score: " + score);



    grabber.removeAttribute('class');
    grabber.setAttribute('class', 'namegraber');

}
//trying to make highscore list
grabber.addEventListener("submit", getname);
function getname(event) {
event.preventDefault();
    userinput = document.getElementById("name");


    var player;
    player = userinput.value
    if ((player.length > 3) || (player.length == 0)) {
        alert("initials must be 1-3 charecters");
        userinput.value = 0;
        return;
    } 
    //localStorage.setItem("playerscore and initials", JSON.stringify(player));
listmaker();



function listmaker() {
    //makes form namegrabber visible
    var grabber = document.getElementById("namegraber1");
grabber.setAttribute('class', 'hide');
    //creates <ul> <li> for user input and score then displays it
    scorelist = document.getElementById("highscore");
    var listEl = document.createElement("ul");
    scorelist.appendChild(listEl);
    var li1 = document.createElement("li");
    li1.textContent = (player + " score: " + score);
    listEl.appendChild(li1);
    
    questionasked.textContent = ("press start to play again");
    btn.disabled = false;
    const startScreen = document.getElementById('start')
    startScreen.classList.remove('hide')
  

}
};