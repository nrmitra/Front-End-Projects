const numberBtn = document.querySelectorAll(".number-btn");
let numberVal=Number(0);
let ouputVal = 0;
let output;

const outputScreen = document.querySelector(".output-screen");

function calculate(numberValue){
    
    return eval(numberValue);
}

numberBtn.forEach(
    btn => btn.addEventListener("click",function(e) {
        let buttonValue = e.target.value;

        if (buttonValue == '='){
            outputScreen.innerHTML = calculate(numberVal);
            numberVal = Number(0);
        }
        else{

            
            numberVal = numberVal + buttonValue;
            outputScreen.innerHTML = numberVal;

        }

        
    })


);

