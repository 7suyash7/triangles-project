const inputs = document.querySelectorAll(".angle-input");
const triangleBtn = document.querySelector("#triangle-btn");
const outputEl = document.querySelector("#output");

function isTriangle() {
const sumOfAngles = calculateSumOfAngles(Number(inputs[0].value), Number(inputs[1].value), Number(inputs[2].value));
if (sumOfAngles === 180) {
outputEl.innerText = "Yay, Its a Triangle!!"   
}
    else {
        outputEl.innerText = "Its not a Triangle :("
    }
}

function calculateSumOfAngles(angle1, angle2, angle3) {
const sumOfAngles = angle1 + angle2 + angle3;
return sumOfAngles;
}

triangleBtn.addEventListener("click", isTriangle)