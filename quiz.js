const quizForm = document.querySelector(".quiz-form")
const answerBtn = document.querySelector("#submit-btn")
const outputEl = document.querySelector("#output");

const correctAnswers = ["60°-60°-60°", "Isoceles Right Triangle"];

function calculateScore() {
let score = 0;
let index = 0;
const formResults = new FormData(quizForm);
for(let value of formResults.values()){
   if (value === correctAnswers[index]){
       score = score +1;
}
   index = index +1;
}
outputEl.innerText = "Your score is " + score;
}

answerBtn.addEventListener("click", calculateScore);