const squares = document.getElementsByClassName('square');

let currUser = ['X','O'];
let index = 0;

for(let i=0; i < squares.length;i++){
    squares[i].addEventListener('click', () => {

        squares[i].textContent = currUser[index];
        document.getElementById('results').textContent = checkWinner(squares,currUser,index);

        if (index == 0){
            index = 1;
        }
        else{
            index = 0;
        }
        
    })
    document.getElementById('results').textContent = 'Game in Progress!';
}

function checkWinner(squares, currUser, index) {

   //ROW WISE WINNER CHECKER

   let i =0;
   for( let j = 0; i < 3 ; i++){

        if( (squares[j].textContent == squares[j+1].textContent) && (squares[j+1].textContent == squares[j+2].textContent) 
        && (squares[j].textContent != '') && (squares[j+1].textContent != '') && (squares[j+2].textContent != '')){
        
        document.getElementById('results').textContent  = 'The winner is '+currUser[index];
        return 'The winner is '+currUser[index];
        
    }
    j = j + 3;


   }

   //COLUMN WISE WINNER CHECKER

   for(let i = 0 ; i < 3; i++){

    if( (squares[i].textContent == squares[i+3].textContent) && (squares[i+3].textContent == squares[i+6].textContent) 
        && (squares[i].textContent != '') && (squares[i+3].textContent != '') && (squares[i+6].textContent != '')){
        
        document.getElementById('results').textContent  = 'The winner is '+currUser[index];
        return 'The winner is '+currUser[index];
        
    }

   }


   //DIAGNOL WISE WINNER CHECKER
   i = 0;
   if( (squares[i].textContent == squares[i+4].textContent) && (squares[i+4].textContent == squares[i+8].textContent) 
        && (squares[i].textContent != '') && (squares[i+4].textContent != '') && (squares[i+8].textContent != '')){
        
        document.getElementById('results').textContent  = 'The winner is '+currUser[index];
        return 'The winner is '+currUser[index];
        
    }

    i = 2;
   if( (squares[i].textContent == squares[i+2].textContent) && (squares[i+2].textContent == squares[i+4].textContent) 
        && (squares[i].textContent != '') && (squares[i+2].textContent != '') && (squares[i+4].textContent != '')){
        
        document.getElementById('results').textContent  = 'The winner is '+currUser[index];
        return 'The winner is '+currUser[index];
        
    }
    
   


}



