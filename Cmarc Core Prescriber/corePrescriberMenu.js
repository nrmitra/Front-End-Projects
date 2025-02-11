const selectedOption = document.getElementById("options")
let selectedOptionValue = document.getElementById("options").value
const dropdown = document.getElementById("sub-options-dropdown")
    
// alert(selectedOptionValue)

async function populateDropdown(){

    const corporateOptions = ["Corporate 1","Corporate 2","Corporate 3"]
    const brandOptions = ["Brand 1","Brand 2","Brand 3"]
  

    if (selectedOptionValue == "corporate"){

        dropdown.innerHTML = ''

        corporateOptions.forEach(element => {
    
            const option = document.createElement("option")
            option.value = element
            option.textContent = element
            
            dropdown.appendChild(option)
            
        });

    } // if statement

    if (selectedOptionValue == "brand"){

        dropdown.innerHTML = ''

        brandOptions.forEach(element => {

            const option = document.createElement("option")
            option.value = element
            option.textContent = element
            dropdown.appendChild(option)
            
        });

    } // if statement


} // async function


// Ensure the DOM is loaded before running the script
document.addEventListener("DOMContentLoaded", populateDropdown);

selectedOption.addEventListener("change",function(event){
    selectedOptionValue = event.target.value;
    // alert(selectedOptionValue)
    populateDropdown();
})