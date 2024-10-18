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
// write code to remove the selected card from the deck
removeCard(deck,playerSuite,playerCardNumber);

playerHand.push(playerCard);

playerCard = drawCard(deck);
playerSuite = playerCard.substring(0,playerCard.indexOf(' '));
playerCardNumber = playerCard.substring(playerCard.indexOf(' ')+1);
// write code to remove the selected card from the deck
removeCard(deck,playerSuite,playerCardNumber);

playerHand.push(playerCard);

// DEALER HAND CODE

let dealerCard = drawCard(deck);

let dealerSuite = dealerCard.substring(0,dealerCard.indexOf(' '));
let dealerCardNumber = dealerCard.substring(dealerCard.indexOf(' ')+1);
// write code to remove the selected card from the deck
removeCard(deck,dealerSuite,dealerCardNumber);

dealerHand.push(dealerCard);

dealerCard = drawCard(deck);
dealerSuite = dealerCard.substring(0,dealerCard.indexOf(' '));
dealerCardNumber = dealerCard.substring(dealerCard.indexOf(' ')+1);
// write code to remove the selected card from the deck
removeCard(deck,dealerSuite,dealerCardNumber);

dealerHand.push(dealerCard);


console.log(deck);
console.log(playerHand);
console.log(dealerHand);






