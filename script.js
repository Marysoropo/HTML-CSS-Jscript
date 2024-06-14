// script.js

// Variables of different data types
let visitorName = "John Doe"; // string
let visitCount = 5; // integer

// Perform and store the result of a mathematical operation
let nextVisitCount = visitCount + 1;

// Decision making with 'if' and 'else'
let isFrequentVisitor;
if (visitCount > 3) {
    isFrequentVisitor = true;
} else {
    isFrequentVisitor = false;
}

// Utilize Logical Operators for Complex Condition Evaluation
let greetingMessage;
if (isFrequentVisitor && nextVisitCount > 5) {
    greetingMessage = `Welcome back, ${visitorName}! You're now a super frequent visitor!`;
} else if (isFrequentVisitor) {
    greetingMessage = `Welcome back, ${visitorName}! Thanks for visiting us ${visitCount} times.`;
} else {
    greetingMessage = `Hello, ${visitorName}! It's your first few visits. Welcome!`;
}

// Print output to console
console.log(greetingMessage);

// Output to the browser screen via the DOM
document.addEventListener("DOMContentLoaded", function() {
    let greetingElement = document.createElement("p");
    greetingElement.textContent = greetingMessage;
    document.body.appendChild(greetingElement);
});
