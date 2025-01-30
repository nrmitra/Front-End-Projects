document.addEventListener("DOMContentLoaded", () => {
    const queryMenuList = document.getElementById("query-list");
    const mainMenuList = document.getElementById("main-menu-list");

    const mainMenuOptionsList = ["Query", "Modification", "Addition"];
    const queryOptionsList = [
        "Company Brand List", "Company Brand List with Previous Quarter",
        "Organisation Details", "Company Brand", "Price List", "Correction List",
        "Category Brand List", "Molecule Brand Price", "Molecule Brand Details",
        "Molecule Brand Price", "Company Brand Price", "Brand Details", "Molecule Details",
        "PDPC Details", "Brand Details"
    ];
    
    function queryMenuOptions(queryOptionsList, queryMenuList) {
        queryOptionsList.forEach(option => {
            const listItem = document.createElement("li");
            listItem.textContent = option;
            listItem.style.cursor = "pointer";

            listItem.addEventListener("click", () => {
                sessionStorage.setItem("headerTitle", option);
                window.location.href = "inputresults.html";
            });
            queryMenuList.append(listItem);
        });
    }

    if (queryMenuList) queryMenuOptions(queryOptionsList, queryMenuList);

    if (mainMenuList) {
        mainMenuOptionsList.forEach(option => {
            const listItem = document.createElement("li");
            listItem.textContent = option;
            listItem.style.cursor = "pointer";

            listItem.addEventListener("click", () => {
                window.location.href = option.toLowerCase() + "menu.html";
            });

            mainMenuList.append(listItem);
        });
    }

    // Ensure dropdown appears in inputresults.html
    if (window.location.pathname.includes("inputresults.html")) {
        const headerTitle = document.getElementById("input-results-title");
        const targetDiv = document.getElementById("user-inputs");
        const selectedOption = sessionStorage.getItem("headerTitle") || "";

        const corporateDropdownList = document.createElement("select");
        const corporateDropdownOptions = ["Corporate 1", "Corporate 2", "Corporate 3"];

        if (headerTitle) {
            headerTitle.textContent = selectedOption;
        }

        if (selectedOption === "Company Brand List" && targetDiv) {
            console.log("Adding dropdown to inputresults.html");  // Debugging check

            corporateDropdownOptions.forEach(optionText => {
                const option = document.createElement("option");
                option.textContent = optionText;
                option.value = optionText.toLowerCase().replace(/\s+/g, "_");
                corporateDropdownList.appendChild(option);
            });

            targetDiv.appendChild(corporateDropdownList);

        } //End of if statement

        if (selectedOption == "Organisation Details" && targetDiv){

            corporateDropdownOptions.forEach(optionText => {
                const option = document.createElement("option");
                option.textContent = optionText;
                option.value = optionText.toLowerCase().replace(/\s+/g, "_");
                corporateDropdownList.appendChild(option);
            });

            targetDiv.appendChild(corporateDropdownList);

        }

    }//End of if statement - Check if inputresults.html page has appeared
});
