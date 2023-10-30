// Javascript to handle Countries selection

// Sample country names
const countryNames = [
    "Germany",
    "Ghana",
    "Kenya",
    "United Kingdom",
    "United States",
    "Nigeria"
    // I will add more country names in future
];

// Geting the select element
const countrySelect = document.getElementById("countrySelect");

// Function to populate the dropdown with country names
function populateDropdown() {
    // Iterating through the countrySelect object and creating option elements
    for (const country of countryNames) {
        const option = document.createElement("option");
        option.value = country;
        option.text = country; 

        // Appending the option element to the select element
        countrySelect.appendChild(option);
    }
}

// Calling the populateDropdown function to fill the dropdown with options
populateDropdown();
