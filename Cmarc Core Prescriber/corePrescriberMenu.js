const selectedOption = document.getElementById("options")
let selectedOptionValue = document.getElementById("options").value
const dropdown = document.getElementById("sub-options-dropdown")
    
async function populateDropdown(){

    const corporateOptions = ["Corporate 1","Corporate 2","Corporate 3"]
    const brandOptions = ["Brand 1","Brand 2","Brand 3","Brand abcX123"]

    if (selectedOptionValue == "corporate"){

        dropdown.innerHTML = ''
        dropdown.style.display = "inline-block"

        if(document.getElementById('pm-file-name')){
            document.getElementById('pm-file-name').remove()
        }
        

        corporateOptions.forEach(element => {
    
            const option = document.createElement("option")
            option.value = element
            option.textContent = element
            
            dropdown.appendChild(option)
            
        });

    } // if statement

    if (selectedOptionValue == "brand"){

        dropdown.innerHTML = ''
        dropdown.style.display = "inline-block"

        if(document.getElementById('pm-file-name')){
            document.getElementById('pm-file-name').remove()
        }

        brandOptions.forEach(element => {

            const option = document.createElement("option")
            option.value = element
            option.textContent = element
            dropdown.appendChild(option)
            
        });

    } // if statement

    if (selectedOptionValue == "pm"){
        dropdown.style.display = "none"

        let x = document.createElement("input");
        x.setAttribute("type", "text");
        x.id = "pm-file-name"

        subGroupDropdown = document.getElementById("sub-group-dropdown")

        subGroupDropdown.appendChild(x)
    }


} // async function


// Ensure the DOM is loaded before running the script
document.addEventListener("DOMContentLoaded", populateDropdown);

selectedOption.addEventListener("change",function(event){
    selectedOptionValue = event.target.value;
    // alert(selectedOptionValue)
    populateDropdown();
})