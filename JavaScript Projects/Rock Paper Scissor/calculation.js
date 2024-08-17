
var computer_options = ['Rock','Paper','Scissor'];
var random_number = getRandomInt(0,3);
console.log(computer_options[random_number]);
var computer_choice = computer_options[random_number];

var user_victory_count = 0;
var computer_victory_count = 0;

//TEST CONDITIONS FOR - ROCK
document.getElementById('rock').addEventListener('click',() => {
rock_click = true;
if (computer_choice == 'Rock'){
    console.log('Its a tie')
    document.getElementById('result-message').innerHTML = 'Its a tie!';
}
else if (computer_choice == 'Paper'){
    console.log('Computer wins!')
    document.getElementById('result-message').innerHTML = 'Computer wins!';
    computer_victory_count +=1;
}
else{
    console.log('User wins!')
    document.getElementById('result-message').innerHTML = 'User wins!';
    user_victory_count +=1;
}
document.getElementById('computer-choice').innerHTML = 'The computer chose '+computer_choice;
document.getElementById('user-score').innerHTML = user_victory_count;
document.getElementById('computer-score').innerHTML = computer_victory_count;

random_number = getRandomInt(0,3);
console.log(computer_options[random_number]);
computer_choice = computer_options[random_number];

});

//TEST CONDITIONS FOR - PAPER
document.getElementById('paper').addEventListener('click',() => {
    rock_click = true;
    if (computer_choice == 'Paper'){
        console.log('Its a tie')
        document.getElementById('result-message').innerHTML = 'Its a tie!';
    }
    else if (computer_choice == 'Scissor'){
        console.log('Computer wins!')
        document.getElementById('result-message').innerHTML = 'Computer wins!';
        computer_victory_count +=1;
    }
    else{
        console.log('User wins!')
        document.getElementById('result-message').innerHTML = 'User wins!';
        user_victory_count+=1;
    }
    document.getElementById('computer-choice').innerHTML = 'The computer chose '+computer_choice;
    document.getElementById('user-score').innerHTML = user_victory_count;
    document.getElementById('computer-score').innerHTML = computer_victory_count;

    random_number = getRandomInt(0,3);
    console.log(computer_options[random_number]);
    computer_choice = computer_options[random_number];
    });

    //TEST CONDITIONS FOR - SCISSOR
document.getElementById('scissor').addEventListener('click',() => {
    rock_click = true;
    if (computer_choice == 'Scissor'){
        console.log('Its a tie')
        document.getElementById('result-message').innerHTML = 'Its a tie!';
    }
    else if (computer_choice == 'Rock'){
        console.log('Computer wins!')
        document.getElementById('result-message').innerHTML = 'Computer wins!';
        computer_victory_count+=1;
    }
    else{
        console.log('User wins!')
        document.getElementById('result-message').innerHTML = 'User wins!';
        user_victory_count+=1;
    }
    document.getElementById('computer-choice').innerHTML = 'The computer chose '+computer_choice;
    document.getElementById('user-score').innerHTML = user_victory_count;
    document.getElementById('computer-score').innerHTML = computer_victory_count;

    random_number = getRandomInt(0,3);
    console.log(computer_options[random_number]);
    computer_choice = computer_options[random_number];
    });

// document.getElementById('user-score').innerHTML = user_victory_count
// document.getElementById('computer-score').innerHTML = computer_victory_count



function getRandomInt(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
  }