
// =========================
// Select HTML Elements
// =========================

const membersContainer = document.querySelector("#members");
const gridButton = document.querySelector("#gridButton");
const listButton = document.querySelector("#listButton");

const navButton = document.querySelector("#nav-button");
const navBar = document.querySelector("#nav-bar");


// =========================
// Get Business Members
// =========================

async function getMembers() {

    try {

        // Fetch the JSON data
        const response = await fetch("data/members.json");

        // Check whether the request was successful
        if (!response.ok) {
            throw new Error("Could not load business members.");
        }

        // Convert the response into JavaScript data
        const members = await response.json();

        // Display the members
        displayMembers(members);

    } catch (error) {

        console.error("Error:", error);

        membersContainer.textContent =
            "Unable to load business members.";

    }
}


// =========================
// Display Business Members
// =========================

function displayMembers(members) {

    // Clear the container
    membersContainer.innerHTML = "";

    // Loop through each business
    members.forEach((member, index) => {

        // Create a business card
        const card = document.createElement("section");
        card.classList.add("member-card");

        // Create business image
        const image = document.createElement("img");

        image.src = `images/${member.image}`;
        image.alt = `${member.name} business image`;

        // Set image dimensions
        image.width = 400;
        image.height = 300;

        // Optimize image loading
        image.decoding = "async";

        // Load the first image immediately
        // Lazy-load the remaining images
        if (index === 0) {
            image.loading = "eager";
            image.fetchPriority = "high";
        } else {
            image.loading = "lazy";
        }

        // Create business name
        const name = document.createElement("h2");
        name.textContent = member.name;

        // Create business address
        const address = document.createElement("p");
        address.textContent = member.address;

        // Create business phone
        const phone = document.createElement("p");
        phone.textContent = member.phone;

        // Create business website
        const website = document.createElement("a");
        website.href = member.website;
        website.textContent = "Visit Website";
        website.target = "_blank";
        website.rel = "noopener noreferrer";

        // Create membership level
        const membership = document.createElement("p");

        if (member.membershipLevel === 3) {
            membership.textContent = "Gold Member";

        } else if (member.membershipLevel === 2) {
            membership.textContent = "Silver Member";

        } else {
            membership.textContent = "Member";
        }

        // Create business description
        const description = document.createElement("p");
        description.textContent = member.description;

        // Add all elements to the card
        card.append(
            image,
            name,
            address,
            phone,
            website,
            membership,
            description
        );

        // Add the card to the page
        membersContainer.appendChild(card);

    });
}


// Call the function to get members
getMembers();


// =========================
// Grid View
// =========================

gridButton.addEventListener("click", () => {

    membersContainer.classList.remove("list-view");
    membersContainer.classList.add("grid-view");

    gridButton.classList.add("active");
    listButton.classList.remove("active");

    gridButton.setAttribute("aria-pressed", "true");
    listButton.setAttribute("aria-pressed", "false");

});


// =========================
// List View
// =========================

listButton.addEventListener("click", () => {

    membersContainer.classList.remove("grid-view");
    membersContainer.classList.add("list-view");

    listButton.classList.add("active");
    gridButton.classList.remove("active");

    listButton.setAttribute("aria-pressed", "true");
    gridButton.setAttribute("aria-pressed", "false");

});


// =========================
// Footer Dates
// =========================

// Get the current year
const currentYear = new Date().getFullYear();

// Display the current year
document.querySelector("#currentYear").textContent = currentYear;

// Get the last modification date
const lastModified = document.lastModified;

// Display the last modification date
document.querySelector("#lastModified").textContent = lastModified;


// =========================
// Hamburger Navigation
// =========================

navButton.addEventListener("click", () => {

    // Toggle the hamburger icon
    navButton.classList.toggle("show");

    // Open or close the navigation menu
    navBar.classList.toggle("open");

    // Check whether the menu is open
    const isOpen = navBar.classList.contains("open");

    // Update the accessibility attribute
    navButton.setAttribute("aria-expanded", isOpen);

});
