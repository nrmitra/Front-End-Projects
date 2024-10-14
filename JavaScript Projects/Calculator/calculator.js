const numberBtn = document.querySelectorAll(".number-btn");
let numberVal = 0;
let ouputVal = 0;
let output;
let arr = [];

const outputScreen = document.querySelector(".output-screen");

numberBtn.forEach(
    btn => btn.addEventListener("click",function(e) {
        let buttonValue = e.target.value;
        

        if((buttonValue !== '+') && (buttonValue !== '-') && (buttonValue !== '*') && (buttonValue !== '/')){
            numberVal = Number(numberVal + buttonValue);
            outputScreen.innerHTML = Number(numberVal);
            console.log(numberVal);

        }
        else {
            if (arr.length == 0){
                output = Number(0);
            }
            
            arr.push(Number(numberVal));
            if(buttonValue == '+'){
                // ouputVal += numberVal;
                
                output = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
                console.log(output);
                outputScreen.innerHTML = output;
        
            }
            else if (buttonValue == '*'){
                console.log("inside multiplication brackets");
                
                //if(outputScreen.textContent != 0){
                // let product = outputScreen.textContent;
                let product = output;
                product *= arr[arr.length - 2];
                outputScreen.innerHTML = product;

                //}
                
                

            }
            numberVal = 0;
            console.log(ouputVal);
            console.log(arr);

        }
        console.log(arr);
        
    })


);

