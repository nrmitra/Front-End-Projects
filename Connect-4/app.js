let currentPlayer = "red";

//let columnSelection = document.getElementById("column-1");


// Select all divs inside elements with IDs that start with "column-"
let columnSelection = document.querySelectorAll("[id^='column-']");
console.log(columnSelection);

columnSelection.forEach((div) => {

    div.addEventListener("click", () =>{

        for(let item of Array.from(div.children).reverse()){

            if(item.style.backgroundColor != 'red' && item.style.backgroundColor != 'yellow'){

                item.style.backgroundColor = currentPlayer;
                break;

            }
            

        }

        // console.log(div.children)
        // Array.from(div.children).reverse().forEach((item) => {
            
        //     if(item.style.backgroundColor != 'red' || item.style.backgroundColor != 'yellow'){
        //         item.style.backgroundColor = currentPlayer;
        //         return;
        //     }
            
        // })

        currentPlayer = (currentPlayer === 'red') ? 'yellow' : 'red';

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