








// just checking if js was linked console.log("hello");
var questionasked = document.getElementById("bottomtext");
var btnbox = document.getElementById('button-center');
var btn = document.querySelector(".START")
 questions = ["what is 1+1?", "what planet are we on?", "how old am i?","which animal has four legs?"];
 correctanswers = ["2","earth","28","dog"];
 incorrectanswers = ["0","3","99","mars","pluto","Sun","1","99","22","snake","whale","birds"];



function startgame(){
    btn.disabled = true;
    btnbox.style.visibility ="hidden";
    btn.style.visibility = "hidden";
     // test to see if function starts on button push console.log("function working");
     var computerchoice = Math.floor(Math.random() * 4);
     computerchoice = questions[computerchoice];
     console.log(computerchoice);
    questionasked.innerHTML = (computerchoice);
    }


btn.addEventListener("click", function() {
    startgame();


})