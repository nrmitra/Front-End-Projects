async function populateDropdown(){

    const dropdown = document.getElementById("corporate-list");

    const response = await fetch('/static/corp_name_list.txt');
    const text = await response.text();

    const corporates = text.split("\n").map(corp => corp.trim()).filter(corp => corp);

    corporates.forEach(corporate => {
                const option = document.createElement("option");
                option.value = corporate;
                option.textContent = corporate;
                dropdown.appendChild(option);
            });


}



// Ensure the DOM is loaded before running the script
document.addEventListener("DOMContentLoaded", populateDropdown);

