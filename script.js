// 1. Variables and Conditionals
// -----------------------------

let userName = "Abdul"; // User's name
const isLoggedIn = true; // Simulate login status
let age = 23; // User's age

if (isLoggedIn) {
    console.log(`Welcome back, ${userName}!`);
} else {
    console.log("Please log in First!");
}

// 2. Custom Functions
// -------------------

/**
 * Greets the user and returns a follow-up message.
 * @param {string} name - The user's name
 * @returns {string}
 */
function greetUser(name) {
    console.log(`Hello, ${name}!`);
    return `How are you today, ${name}?`;
}

/**
 * Checks user eligibility based on age.
 * @param {string} name - The user's name
 * @param {number} age - The user's age
 * @returns {string}
 */
function userEligibility(name, age) {
    return age >= 18
        ? `Congratulations ${name}! You are eligible to proceed.`
        : `Sorry, ${name}. You are not eligible to proceed.`;
}

console.log(greetUser(userName));
console.log(userEligibility(userName, age));

// 3. Loop Samples
// ---------------

// (i) Countdown using for loop
for (let i = 3; i >= 1; i--) {
    console.log(`Validating ... ${i}`);
}
console.log("Validation Complete!");

// (ii) Iterating over an array using for loop
const fruits = ["apple", "banana", "cherry"];
for (let i = 0; i < fruits.length; i++) {
    console.log(`I like ${fruits[i]}`);
}

// (iii) Using for...of loop (preferred for arrays)
for (const fruit of fruits) {
    console.log(`I prefer ${fruit}`);
}

// (iv) While loop example
let j = 0;
while (j < fruits.length) {
    console.log(`I Love ${fruits[j]}`);
    j++;
}

// 4. DOM Interaction
// ------------------

// i. Change the background color of the webpage to lightblue
document.body.style.backgroundColor = "lightblue";

// ii. Change text content of main title
const mainTitle = document.getElementById("main-title");
if (mainTitle) {
    mainTitle.innerHTML += "<br><br>This is added by JS";
}

// iii. Add a paragraph to the body
const paragraph = document.createElement("p");
paragraph.textContent = "This is a simple web page created using JavaScript.";
document.body.appendChild(paragraph);

// iv. Add event listener to button
const button = document.getElementById("action-btn");
if (button) {
    button.addEventListener("click", function () {
        alert("Button was clicked!");
        document.body.style.backgroundColor = "lightgreen";
    });
}

// v. Dynamic content addition
const loopOutput = document.getElementById("loop-output");
for (let i = 1; i <= 5; i++) {
    const listItem = document.createElement("li");
    listItem.textContent = `Loop ITEM ${i}`;
    loopOutput.appendChild(listItem);
}