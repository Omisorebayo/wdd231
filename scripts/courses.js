
// Array containing the Web and Computer Programming courses
const courses = [
    {
        subject: "CSE",
        number: 110,
        title: "Introduction to Programming",
        credits: 2,
        completed: true
    },
    {
        subject: "WDD",
        number: 130,
        title: "Web Fundamentals",
        credits: 2,
        completed: true
    },
    {
        subject: "CSE",
        number: 111,
        title: "Programming with Functions",
        credits: 2,
        completed: true
    },
    {
        subject: "CSE",
        number: 210,
        title: "Programming with Classes",
        credits: 2,
        completed: true
    },
    {
        subject: "WDD",
        number: 131,
        title: "Dynamic Web Fundamentals",
        credits: 2,
        completed: true
    },
    {
        subject: "WDD",
        number: 231,
        title: "Web Frontend Development I",
        credits: 2,
        completed: false
    }
];


// Select the HTML elements
const courseContainer = document.querySelector("#courseContainer");
const creditTotal = document.querySelector("#creditTotal");


// Function to display courses
function displayCourses(courseList) {

    // Clear the previous course cards
    courseContainer.innerHTML = "";

    // Loop through each course
    courseList.forEach(course => {

        // Create a course card
        const courseCard = document.createElement("div");

        // Add the course-card class
        courseCard.classList.add("course-card");

        // Add completed class if the course is completed
        if (course.completed) {
            courseCard.classList.add("completed");
        }

        // Determine the course completion status
        const courseStatus = course.completed
            ? "Completed"
            : "In Progress";

        // Create the course card content
        courseCard.innerHTML = `
            <h3>${course.subject} ${course.number}</h3>
            <p>${course.title}</p>
            <p>${course.credits} Credits</p>
            <p>${courseStatus}</p>
        `;

        // Add the course card to the container
        courseContainer.appendChild(courseCard);

    });


    // Calculate the total credits of displayed courses
    const totalCredits = courseList.reduce(
        (total, course) => total + course.credits,
        0
    );

    // Display the total credits
    creditTotal.textContent = `Total Credits: ${totalCredits}`;

}


// Display all courses
document.querySelector("#allCourses").addEventListener("click", () => {

    displayCourses(courses);

});


// Filter and display WDD courses
document.querySelector("#wddCourses").addEventListener("click", () => {

    const wddCourses = courses.filter(course =>
        course.subject === "WDD"
    );

    displayCourses(wddCourses);

});


// Filter and display CSE courses
document.querySelector("#cseCourses").addEventListener("click", () => {

    const cseCourses = courses.filter(course =>
        course.subject === "CSE"
    );

    displayCourses(cseCourses);

});


// Display all courses when the page loads
displayCourses(courses);
