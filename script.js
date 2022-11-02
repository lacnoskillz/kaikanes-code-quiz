
//makes "answerbox invisible"

 hideanswerbox();
function  hideanswerbox(){
   element = document.querySelector('.answerbox');
   element.style.visibility = 'hidden';
}
//declaring variables and arrays
var boxA = document.getElementById("buttonA");
var boxB = document.getElementById("buttonB");
var boxC = document.getElementById("buttonC");
var boxD= document.getElementById("buttonD");
var questionasked = document.getElementById("bottomtext");
var btnbox = document.getElementById(".button-center");
var btn = document.querySelector(".START")
testanswer0= ["2","0","3","99"];
testanswer1= ["mars","venus","earth","sun"];
testanswer2= ["1", "29","70","24"];
testanswer3= ["snake","owl","guitar","dog"];
questions = ["what is 1+1?", "what planet are we on?", "how old am i?", "which animal has four legs?"];
var score =0
var z=0;
originalquestion = questionasked.innerHTML;

//runs this game on start click
function startgame() {
    
    btn.disabled = true;
    const startScreen = document.getElementById('start')
    startScreen.classList.add('hide')
    
    //makes "answerbox in HTML visible on click of start button"
    element = document.querySelector('.answerbox');
            element.style.visibility = 'visible';


//timer

    var timeEl = document.querySelector(".time");


    //var mainEl = document.getElementById("maintimer");

    var secondsLeft = 60;

    function setTime() {

        var timerInterval = setInterval(function () {
            secondsLeft--;
            timeEl.textContent = secondsLeft + " seconds left";

            if (secondsLeft === 0) {
                clearInterval(timerInterval);
                sendMessage();
            }
        }, 1000);
    }


    function sendMessage() {
        timeEl.textContent = "gameover";


    }

    setTime();
    setquestion();
    
    //function to go through array questions and make answers display in the "answerbox" depending on which question is asked
    function setquestion(){
        
    questionasked.innerHTML = questions[z];
    
    var i=0;
    if (z == 0){
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
    if (z ==1){
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
    if (z ==2){
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
    if (z ==3){
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
    // trying to make score go up with correct button press and make next question show on inncorrect button press
   //stoped here
    console.log("score",score);
    boxA.addEventListener("click",function(){
        if((z == 0) || (secondsLeft > 0)) {
        console.log("z",z);
        score++;
        z++;
        console.log(secondsLeft);
            setquestion();
            
    } else {
        if (secondsLeft > 0){
           secondsLeft = secondsLeft - 10;
            setquestion();
        }
    }if(z>3){
        questionasked.innerHTML = originalquestion;
        hideanswerbox();
        btn.disabled = false;
        const startScreen = document.getElementById('start')
        startScreen.classList.remove('hide')
        return;
    }
console.log("score",score);
    })


}


btn.addEventListener("click", function () {
    startgame();


})