// JavaScript to handle form submission and email validation

document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contactForm");
    const emailInput = document.getElementById("email");
    const countryNameSelect = document.getElementById("countrySelect");

    // Email validation regular expression using Regex
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        // Getting selected country Name
        const selectedCountryName = countryNameSelect.value;

        // Getting form data
        const formData = new FormData(contactForm);
        const data = {};
        formData.forEach((value, key) => {
            data[key] = value;
        });

        // Validating the email format
        if (!emailRegex.test(data.email)) {
            alert("Please enter a valid email address.");
            return;
        }

        // Clearing the form
        contactForm.reset();
    });
});
