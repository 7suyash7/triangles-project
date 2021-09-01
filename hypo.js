const sides = document.querySelectorAll (".side");
const hypoBtn = document.querySelector("#hypo-btn");
const outputEl = document.querySelector("#output");

function calculateHypo() {
   const sumOfSquares = calculateSumOfSquares(Number(sides[0].value), Number(sides[1].value));
   const lengthOfHypo = Math.sqrt(sumOfSquares);
console.log(lengthOfHypo);
outputEl.innerText = "The Length of Hypotenuse is " + lengthOfHypo;
}


function calculateSumOfSquares(a, b) {
    const sumOfSquares = a*a + b*b;
    return sumOfSquares;
}
hypoBtn.addEventListener("click", calculateHypo);