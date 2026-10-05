
// Get the menu button
const menuToggle = document.getElementById("menuToggle");


// Get the navigation links
const navLinks = document.getElementById("navLinks");


// Open and close mobile navigation
menuToggle.addEventListener("click", () => {

    // Add/remove active class
    const isOpen = navLinks.classList.toggle("active");


    // Update accessibility attribute
    menuToggle.setAttribute(
        "aria-expanded",
        isOpen
    );

});


// Close mobile menu when user clicks a link
document
    .querySelectorAll(".nav-links a")
    .forEach((link) => {

        link.addEventListener("click", () => {

            // Remove active class
            navLinks.classList.remove("active");


            // Update accessibility attribute
            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );

        });

    });