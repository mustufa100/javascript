//question 1 

let futureStudentNames = [];

//question 2 

let fruits = ['apple', 'banana', 'orange', 'grape'];



//question 3

let numbers = [1, 2, 3, 4, 5];



//question 4

let booleanValues = [true, false, true, false];


//question 5

let mixedArray = [1, 'apple', true];



//question 6

let educationQualifications = ['SSC', 'HSC', 'BCS', 'BS', 'BCOM', 'MS', 'M. Phil.', 'PhD'];

// Display the qualifications in the browser
document.write("<p>Education Qualifications in Pakistan:</p>");
document.write("<ul>");

for (let qualification of educationQualifications) {
    document.write(`<li>${qualification}</li>`);
}

document.write("</ul>");




//question 7

// Arrays to store student names and scores
let studentNames = ['Student 1', 'Student 2', 'Student 3'];
let studentScores = [450, 380, 480];

// Function to calculate percentage
function calculatePercentage(score) {
    return (score / 500) * 100;
}

// Display scores and percentages
for (let i = 0; i < studentNames.length; i++) {
    let name = studentNames[i];
    let score = studentScores[i];
    let percentage = calculatePercentage(score);

    console.log(`${name}: Score - ${score}, Percentage - ${percentage}%`);
}



//question 8


// Initialize an array with color names
let colorNames = ['Red', 'Green', 'Blue'];

// Display the original array
console.log("Original Array:", colorNames);

// a. Add color to the beginning of the array
let newColorBegin = prompt("Enter color to add to the beginning:");
colorNames.unshift(newColorBegin);
console.log("Updated Array (Added to the Beginning):", colorNames);

// b. Add color to the end of the array
let newColorEnd = prompt("Enter color to add to the end:");
colorNames.push(newColorEnd);
console.log("Updated Array (Added to the End):", colorNames);

// c. Add two more colors to the beginning of the array
colorNames.unshift('Purple', 'Yellow');
console.log("Updated Array (Added Two Colors to the Beginning):", colorNames);

// d. Delete the first color in the array
colorNames.shift();
console.log("Updated Array (Deleted the First Color):", colorNames);

// e. Delete the last color in the array
colorNames.pop();
console.log("Updated Array (Deleted the Last Color):", colorNames);

// f. Add color to a user-defined position/index
let indexToAdd = prompt("Enter the index to add color:");
let colorToAdd = prompt("Enter color to add at the specified index:");
colorNames.splice(indexToAdd, 0, colorToAdd);
console.log("Updated Array (Added Color at User-Defined Index):", colorNames);

// g. Delete color(s) from a user-defined position/index
let indexToDelete = prompt("Enter the index to delete color(s):");
let numToDelete = prompt("Enter the number of colors to delete:");
colorNames.splice(indexToDelete, numToDelete);
console.log("Updated Array (Deleted Color(s) from User-Defined Index):", colorNames);



//question 9

// Array to store student scores
let studentscores = [78, 92, 85, 60, 95];

// Display the original array
console.log("Original Scores:", studentscores);

// Sort the array in ascending order
studentscores.sort(function (a, b) {
    return a - b;
});

// Display the sorted array
console.log("Sorted Scores (Ascending Order):", studentscores);



//question 10


// Initialize an array with city names
let cities = ['New York', 'London', 'Paris', 'Tokyo', 'Sydney'];

// Display the original array
console.log("Original Cities:", cities);

// Copy three elements from cities array to selectedCities array
let selectedCities = cities.slice(1, 4); // Copy elements from index 1 to 3
console.log("Selected Cities:", selectedCities);



//question 11


// Array with string elements
var arr = ["This", "is", "my", "cat"];

// Use the join method to create a single string
var resultString = arr.join(" ");

// Display the result
console.log("Result String:", resultString);



//question 12

// Initialize an empty array
let fifoArray = [];

// Add values to the array (FIFO)
fifoArray.push("keyboard");
fifoArray.push("mouse");
fifoArray.push("printer");

// Display the array after adding values
console.log("Array after adding values:", fifoArray);

// Access values in the order they were stored (FIFO)
let firstValue = fifoArray.shift();
let secondValue = fifoArray.shift();
let thirdValue = fifoArray.shift();

// Display the values in the order they were stored
console.log("First Value:", firstValue);
console.log("Second Value:", secondValue);
console.log("Third Value:", thirdValue);

// Display the array after accessing values
console.log("Array after accessing values:", fifoArray);



//question 13


// Initialize an empty array
let lifoArray = [];

// Add values to the array (LIFO)
lifoArray.push("keyboard");
lifoArray.push("mouse");
lifoArray.push("printer");

// Display the array after adding values
console.log("Array after adding values:", lifoArray);

// Access values in reverse order (LIFO)
let lastValue = lifoArray.pop();
let secondLastValue = lifoArray.pop();
let thirdLastValue = lifoArray.pop();

// Display the values in reverse order
console.log("Last Value:", lastValue);
console.log("Second Last Value:", secondLastValue);
console.log("Third Last Value:", thirdLastValue);

// Display the array after accessing values
console.log("Array after accessing values:", lifoArray);


//question 14

// Array of phone manufacturers
let phoneManufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

// Start building the HTML string for the dropdown/select menu
let dropdownHtml = "<select>";

// Add options for each phone manufacturer
for (let i = 0; i < phoneManufacturers.length; i++) {
    dropdownHtml += "<option value='" + phoneManufacturers[i] + "'>" + phoneManufacturers[i] + "</option>";
}

// Close the select tag
dropdownHtml += "</select>";

// Display the dropdown/select menu in the browser
document.write(dropdownHtml);
