
// Select the navigation button and navigation menu
const navButton = document.querySelector("#nav-button");
const navBar = document.querySelector("#nav-bar");

// Listen for clicks on the navigation button
navButton.addEventListener("click", () => {
    const isOpen = navButton.classList.toggle("show");

    // Update the accessibility state
    navButton.setAttribute("aria-expanded", isOpen);

    // Show or hide the navigation menu
    navBar.classList.toggle("show", isOpen);
});
