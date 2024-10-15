const numberBtn = document.querySelectorAll(".number-btn");
let numberVal=Number(0);
let ouputVal = 0;
let output;

const outputScreen = document.querySelector(".output-screen");
outputScreen.innerHTML = Number(0);

function calculate(numberValue){
    
    return eval(numberValue);
}

numberBtn.forEach(
    btn => btn.addEventListener("click",function(e) {
        let buttonValue = e.target.value;

        if (buttonValue == 'C'){
            outputScreen.innerHTML = Number(0);

        }

        else if (buttonValue == '='){
            outputScreen.innerHTML = calculate(numberVal);
            numberVal = Number(0);
        }
        else{
            numberVal = outputScreen.textContent;

            if((buttonValue == '+') || numberVal.includes('+') || 
            (buttonValue == '-') || numberVal.includes('-') ||
            (buttonValue == '*') || numberVal.includes('*') ||
            (buttonValue == '/') || numberVal.includes('/') ||  
            (buttonValue == '.') || numberVal.includes('.')
            ){
                
                numberVal = numberVal + buttonValue;
                outputScreen.innerHTML = numberVal;
                
                
            }
            else{
                
                numberVal = Number(numberVal + buttonValue);
                outputScreen.innerHTML = numberVal;

            }
            
            
            

        }

        
    })


);

