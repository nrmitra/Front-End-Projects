let currentPlayer = "red";
let matrix = [
    ['none','none','none','none','none','none'],
    ['none','none','none','none','none','none'],
    ['none','none','none','none','none','none'],
    ['none','none','none','none','none','none'],
    ['none','none','none','none','none','none'],
    ['none','none','none','none','none','none']
];

//let columnSelection = document.getElementById("column-1");


function checkFourCells(matrix) {
    const rows = matrix.length;
    const cols = matrix[0].length;
  
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        // Check horizontally
        if (j + 3 < cols &&
          matrix[i][j] === matrix[i][j + 1] &&
          matrix[i][j] === matrix[i][j + 2] &&
          matrix[i][j] === matrix[i][j + 3] &&
          matrix[i][j] !== 'none') {
          return true;
        }
  
        // Check vertically
        if (i + 3 < rows &&
          matrix[i][j] === matrix[i + 1][j] &&
          matrix[i][j] === matrix[i + 2][j] &&
          matrix[i][j] === matrix[i + 3][j] &&
          matrix[i][j] !== 'none') {
          return true;
        }
  
        // Check diagonally (top-left to bottom-right)
        if (i + 3 < rows && j + 3 < cols &&
          matrix[i][j] === matrix[i + 1][j + 1] &&
          matrix[i][j] === matrix[i + 2][j + 2] &&
          matrix[i][j] === matrix[i + 3][j + 3] &&
          matrix[i][j] !== 'none') {
          return true;
        }
  
        // Check diagonally (bottom-left to top-right)
        if (i - 3 >= 0 && j + 3 < cols &&
          matrix[i][j] === matrix[i - 1][j + 1] &&
          matrix[i][j] === matrix[i - 2][j + 2] &&
          matrix[i][j] === matrix[i - 3][j + 3] &&
          matrix[i][j] !== 'none') {
          return true;
        }
      }
    }
  
    return false;
  }


// Select all divs inside elements with IDs that start with "column-"
let columnSelection = document.querySelectorAll("[id^='column-']");
// console.log(columnSelection);

columnSelection.forEach((div) => {

    div.addEventListener("click", () =>{
        
        let columnId = div.id;
        let rowCount = 0;

        columnId = columnId.charAt(columnId.length-1) - 1
        console.log(columnId)

        for(let item of Array.from(div.children).reverse()){

            if(item.style.backgroundColor != 'red' && item.style.backgroundColor != 'yellow'){
                
                matrix[rowCount][columnId] = currentPlayer;
                item.style.backgroundColor = currentPlayer;

                if(checkFourCells(matrix)){
                    alert(`${currentPlayer} has won!`)
                    location.reload(true)
                }

                break;
            }
            rowCount+=1;
            
        }

        // console.log(div.children)
        // Array.from(div.children).reverse().forEach((item) => {
            
        //     if(item.style.backgroundColor != 'red' || item.style.backgroundColor != 'yellow'){
        //         item.style.backgroundColor = currentPlayer;
        //         return;
        //     }
            
        // })

        currentPlayer = (currentPlayer === 'red') ? 'yellow' : 'red';
        console.log(matrix)

    } )
})


// columnSelection.addEventListener("click", () => {

//     //let selectColumn = document.querySelectorAll("#column-1 div");
//     let selectColumn = document.querySelectorAll("[id^='column-'] div");
    
//     selectColumn.forEach((div) => {
//         div.style.backgroundColor = currentPlayer;
//     })
//     currentPlayer = (currentPlayer === 'red') ? 'yellow' : 'red';
// })