// JavaScript to show Home section by default and show other sections onclick
document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("nav a");
    const contactButton = document.getElementById("contactButton");

    // Hiding all sections except the "Home" section by default
    sections.forEach((section) => {
        section.style.display = "none";
    });
    document.getElementById("home").style.display = "block";

    // Adding click event listeners to navigation links
    navLinks.forEach((link) => {
        link.addEventListener("click", (e) => {
            e.preventDefault();

            // Hiding all sections
            sections.forEach((section) => {
                section.style.display = "none";
            });

            // Showing the section associated with the clicked link
            const targetId = link.getAttribute("href").substring(1);
            document.getElementById(targetId).style.display = "block";
        });
    });

    // Adding click event listener to the "Contact Me" button
    contactButton.addEventListener("click", (e) => {
        e.preventDefault();

        // Hiding all sections
        sections.forEach((section) => {
            section.style.display = "none";
        });

        // Showing the Contact section
        document.getElementById("contact").style.display = "block";
    });
});
