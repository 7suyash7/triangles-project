const baseInputs = document.querySelectorAll(".inputbase");
const areabtn = document.querySelector("#btn-input");
const outputEl = document.querySelector("#output");


function multiply(a,b){
    return a*b;
}


function mainFunction(){
    const product = multiply(Number(baseInputs[0].value),Number(baseInputs[1].value));
    const finalAnswer = 0.5*product;
    outputEl.innerText = "The area is "+ finalAnswer;
}




areabtn.addEventListener('click', mainFunction);