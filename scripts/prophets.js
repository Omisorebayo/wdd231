
// JSON data source URL
const url = "https://byui-cse.github.io/cse-ww-program/data/latter-day-prophets.json";

// Select the HTML div where the prophet cards will appear
const cards = document.querySelector("#cards");

// Function to display prophet cards

const displayProphets = (prophets) => {
    prophets.forEach((prophet) => {

        // Create HTML elements
        const card = document.createElement("section");
        const fullName = document.createElement("h2");
        const portrait = document.createElement("img");
        const birthDate = document.createElement("p");
        const birthPlace = document.createElement("p");

        // Add the prophet's full name
        fullName.textContent = `${prophet.name} ${prophet.lastname}`;

        // Set image attributes
        portrait.setAttribute("src", prophet.imageurl);
        portrait.setAttribute("alt", `Portrait of ${prophet.name} ${prophet.lastname}`);
        portrait.setAttribute("loading", "lazy");
        portrait.setAttribute("width", "340");
        portrait.setAttribute("height", "440");

        // Add date and place of birth
        birthDate.textContent = `Date of Birth: ${prophet.birthdate}`;
        birthPlace.textContent = `Place of Birth: ${prophet.birthplace}`;

        // Add elements to the card
        card.appendChild(fullName);
        card.appendChild(portrait);
        card.appendChild(birthDate);
        card.appendChild(birthPlace);

        // Add the card to the webpage
        cards.appendChild(card);
    });
};

// Function to fetch prophet data
async function getProphetData() {
    try {
        const response = await fetch(url);

        // Check whether the request was successful
        if (!response.ok) {
            throw new Error(`Request failed with status ${response.status}`);
        }

        // Convert the response into a JavaScript object
        const data = await response.json();

        // Temporary testing
        // console.table(data.prophets);

        // Display the prophets
        displayProphets(data.prophets);

    } catch (error) {
        console.error(error);
    }
}

// Call the function to retrieve and display the prophets
getProphetData();
