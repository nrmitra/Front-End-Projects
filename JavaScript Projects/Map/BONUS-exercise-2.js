/*
    1. Create an array called "numbers" with the following values:
       [10, 20, 15, 30, 15, 20, 35, 60, 10]

    2. Find the first duplicate value in "numbers" and print
       out the INDEX of that value as well as the INDEX
       of where it was first found in "numbers"

    3. In this case, we will print:
       4 2

       (4 is where the duplicate index was)
       (2 is where the first pair of that duplicate was, as an index)

    HINT: Use a Map to keep track of number->index pairs

    *This is very challenging and is a common interview question
*/

const numbers = [10, 20, 15, 30, 15, 20, 35, 60, 10];

let numbMap = new Map();
let oldMap = new Map();


for(let i =0; i < numbers.length; i++){

    if(numbMap.has(numbers[i])){
        oldMap.set(numbers[i],numbMap.get(numbers[i]));
        console.log(i);
    }

    numbMap.set(numbers[i],i);

}

console.log(numbMap);
console.log(oldMap);

