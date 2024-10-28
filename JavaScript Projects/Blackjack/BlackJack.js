const prompt = require('prompt-sync')();

const generateDeck = () => {

    const newDeck = new Map();

    newDeck.set("Spades",["Ace",2,3,4,5,6,7,8,9,"King","Queen","Jack"]);
    newDeck.set("Hearts",["Ace",2,3,4,5,6,7,8,9,"King","Queen","Jack"]);
    newDeck.set("Clubs",["Ace",2,3,4,5,6,7,8,9,"King","Queen","Jack"]);
    newDeck.set("Diamonds",["Ace",2,3,4,5,6,7,8,9,"King","Queen","Jack"]);

    return newDeck;

};

const drawCard = (deck) => {

    const suites = ["Spades","Hearts","Clubs","Diamonds"]
    let randomIndex = Math.floor(Math.random() * suites.length);

    let suite = suites[randomIndex];
    const arrNum = deck.get(suite);

    randomIndex = Math.floor(Math.random() * arrNum.length);
    let num = arrNum[randomIndex];

    return (suite +" "+num);

};

function removeCard (deck,suite,number) {
    
    let arr = deck.get(suite);
    let index = -1;

    if (number >=2 && number <=9) {index = arr.indexOf(Number(number));}
    else {index = arr.indexOf(number);}

    (deck.get(suite)).splice(index,1);
    
};

const playerHand = [];
const dealerHand = [];

const deck = generateDeck();

let playerCard = drawCard(deck);

let playerSuite = playerCard.substring(0,playerCard.indexOf(' '));
let playerCardNumber = playerCard.substring(playerCard.indexOf(' ')+1);

let sumCardNumber = Number(0);

if (playerCardNumber == 'King' || playerCardNumber == 'Queen' || playerCardNumber == 'Jack'  ) sumCardNumber = Number(10);
else if (playerCardNumber == 'Ace') sumCardNumber = Number(1);
else sumCardNumber = Number(playerCardNumber);

// write code to remove the selected card from the deck
removeCard(deck,playerSuite,playerCardNumber);

playerHand.push(playerCard);

playerCard = drawCard(deck);
playerSuite = playerCard.substring(0,playerCard.indexOf(' '));
playerCardNumber = playerCard.substring(playerCard.indexOf(' ')+1);

if (playerCardNumber == 'King' || playerCardNumber == 'Queen' || playerCardNumber == 'Jack'  ) sumCardNumber += Number(10);
else if (playerCardNumber == 'Ace') sumCardNumber += Number(1);
else sumCardNumber += Number(playerCardNumber);


// write code to remove the selected card from the deck
removeCard(deck,playerSuite,playerCardNumber);

playerHand.push(playerCard);

// DEALER HAND CODE

let sumDealerCardNumber = Number(0);

let dealerCard = drawCard(deck);

let dealerSuite = dealerCard.substring(0,dealerCard.indexOf(' '));
let dealerCardNumber = dealerCard.substring(dealerCard.indexOf(' ')+1);

if(dealerCardNumber == 'King' || dealerCardNumber == 'Queen' || dealerCardNumber == 'Jack') sumDealerCardNumber += Number(10);
else if (dealerCardNumber == 'Ace') sumDealerCardNumber += Number(1);
else sumDealerCardNumber += Number(dealerCardNumber);
// write code to remove the selected card from the deck
removeCard(deck,dealerSuite,dealerCardNumber);

dealerHand.push(dealerCard);

// dealerCard = drawCard(deck);
// dealerSuite = dealerCard.substring(0,dealerCard.indexOf(' '));
// dealerCardNumber = dealerCard.substring(dealerCard.indexOf(' ')+1);
// // write code to remove the selected card from the deck
// removeCard(deck,dealerSuite,dealerCardNumber);

// dealerHand.push(dealerCard);


console.log(deck);
console.log(playerHand);
console.log(dealerHand);

console.log(sumCardNumber);

if (sumCardNumber > 21) console.log("You went bust!!!");
else if (sumCardNumber == 21) console.log("You Won! Congratulations!");
else{
    while(sumCardNumber < 21){
        const userInput = prompt("Please, enter 'Hit' or 'Stay");

        if (userInput == 'Hit'){
            playerCard = drawCard(deck);
            playerSuite = playerCard.substring(0,playerCard.indexOf(' '));
            playerCardNumber = playerCard.substring(playerCard.indexOf(' ')+1);

            if (playerCardNumber == 'King' || playerCardNumber == 'Queen' || playerCardNumber == 'Jack'  ) sumCardNumber += Number(10);
            else if (playerCardNumber == 'Ace') sumCardNumber += Number(1);
            else sumCardNumber += Number(playerCardNumber);


            // write code to remove the selected card from the deck
            removeCard(deck,playerSuite,playerCardNumber);

            playerHand.push(playerCard);

            if(sumCardNumber > 21){
                console.log("You went bust! Your final score was: ",sumCardNumber);
                break;
            }
        }
        else{
            break;
        }
        console.log(sumCardNumber);

    }
}

if(sumDealerCardNumber > sumCardNumber && sumDealerCardNumber < 21 && sumCardNumber > 21) console.log("Dealer Wins!")
else{

    while(sumDealerCardNumber < 21){

        dealerCard = drawCard(deck);
        dealerSuite = dealerCard.substring(0,dealerCard.indexOf(' '));
        dealerCardNumber = dealerCard.substring(dealerCard.indexOf(' ')+1);

        if(dealerCardNumber == 'King' || dealerCardNumber == 'Queen' || dealerCardNumber == 'Jack') sumDealerCardNumber += Number(10);
        else if (dealerCardNumber == 'Ace') sumDealerCardNumber += Number(1);
        else sumDealerCardNumber += Number(dealerCardNumber);

        removeCard(deck,dealerSuite,dealerCardNumber);
        dealerHand.push(dealerCard);

        if(sumDealerCardNumber > sumCardNumber && sumDealerCardNumber < 21){
            console.log("Dealer Wins! Dealer's final score was ",sumDealerCardNumber);
            break;
        }


    }
}

if(sumCardNumber < sumDealerCardNumber) console.log("User wins! Dealer's final score was ",sumDealerCardNumber)
else console.log("Dealer wins!");










