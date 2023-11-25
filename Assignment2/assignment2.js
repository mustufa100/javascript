//Assignment 5
//question 1

Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: 'Something went wrong!',
    footer: '<a href="">Why do I have this issue?</a>'
  })
// Prompt the user to enter two numbers
 var num1 = prompt("Enter the first number:",3);
 var num2 = prompt("Enter the second number:",4);

 // Convert the input to numbers and perform addition
 var result = parseFloat(num1) + parseFloat(num2);

 // Display the result in the browser
 document.write("The result of adding " + num1 + " and " + num2 + " is: " + result);

//question 2

 var num1 = parseFloat(prompt("Enter the first number:"));
 var num2 = parseFloat(prompt("Enter the second number:"));

 // Perform mathematical operations
 var addition = num1 + num2;
 var subtraction = num1 - num2;
 var multiplication = num1 * num2;
 var division = num1 / num2;
 var modulus = num1 % num2;

 // Display the results in the browser
 document.write("Addition: " + num1 + " + " + num2 + " = " + addition + "<br>");
 document.write("Subtraction: " + num1 + " - " + num2 + " = " + subtraction + "<br>");
 document.write("Multiplication: " + num1 + " * " + num2 + " = " + multiplication + "<br>");
 document.write("Division: " + num1 + " / " + num2 + " = " + division + "<br>");
 document.write("Modulus: " + num1 + " % " + num2 + " = " + modulus + "<br>");

//question 3

  // Declare a variable
  var myVariable;

  // Show the value after variable declaration
  document.write("Value after variable declaration is: " + myVariable + "<br>");

  // Initialize the variable with some number
  myVariable = 5;

  // Show the initial value
  document.write("Initial value: " + myVariable + "<br>");

  // Increment the variable
  myVariable++;

  // Show the value after increment
  document.write("Value after increment is: " + myVariable + "<br>");

  // Add 7 to the variable
  myVariable += 7;

  // Show the value after addition
  document.write("Value after addition is: " + myVariable + "<br>");

  // Decrement the variable
  myVariable--;

  // Show the value after decrement
  document.write("Value after decrement is: " + myVariable + "<br>");

  // Show the remainder after dividing the variable's value by 3
  var remainder = myVariable % 3;

  // Display the remainder
  document.write("The remainder is: " + remainder);


//question 4

  // Cost of one movie ticket
  var ticketPrice = 600;

  // Number of tickets to buy
  var numberOfTickets = 5;

  // Calculate the total cost
  var totalCost = ticketPrice * numberOfTickets;

  // Display the total cost
  document.write("The cost of buying " + numberOfTickets + " movie tickets is: " + totalCost + " PKR");



//question 5


 // Define the number for which you want to display the multiplication table
 var number = 5;

 // Display the table header
 document.write("<h2>Multiplication Table for " + number + "</h2>");
 document.write("<ul>");

 // Calculate and display the multiplication table
 for (var i = 1; i <= 10; i++) {
     var result = number * i;
     document.write("<li>" + number + " x " + i + " = " + result + "</li>");
 }

 document.write("</ul>");


//question 6

 // Celsius temperature
 var celsius = 30; // Change this value to the temperature in Celsius

 // Convert Celsius to Fahrenheit
 var fahrenheit = (celsius * 9/5) + 32;

 // Display the conversion result
 document.write(celsius + "°C is " + fahrenheit + "°F<br>");

 // Fahrenheit temperature
 var fahrenheit2 = 86; // Change this value to the temperature in Fahrenheit

 // Convert Fahrenheit to Celsius
 var celsius2 = (fahrenheit2 - 32) * 5/9;

 // Display the conversion result
 document.write(fahrenheit2 + "°F is " + celsius2 + "°C");


//question 7

 // Prices of items
 var priceItem1 = 500;
 var priceItem2 = 300;

 // Ordered quantities of items
 var quantityItem1 = 2;
 var quantityItem2 = 3;

 // Shipping charges
 var shippingCharges = 50;

 // Calculate the total cost of items
 var totalCostItems = (priceItem1 * quantityItem1) + (priceItem2 * quantityItem2);

 // Add shipping charges to the total cost
 var totalCostWithShipping = totalCostItems + shippingCharges;

 // Display the receipt
 document.write("<h2>Shopping Cart Receipt</h2>");
 document.write("Price of Item 1: " + priceItem1 + " PKR<br>");
 document.write("Price of Item 2: " + priceItem2 + " PKR<br>");
 document.write("Ordered Quantity of Item 1: " + quantityItem1 + "<br>");
 document.write("Ordered Quantity of Item 2: " + quantityItem2 + "<br>");
 document.write("Shipping Charges: " + shippingCharges + " PKR<br>");
 document.write("Total Cost of Items: " + totalCostItems + " PKR<br>");
 document.write("Total Cost with Shipping: " + totalCostWithShipping + " PKR");


//question 8

   // Total marks
   var totalMarks = 1000; // Change this value to the total marks for the exam

   // Marks obtained by the student
   var marksObtained = 850; // Change this value to the actual marks obtained

   // Calculate the percentage
   var percentage = (marksObtained / totalMarks) * 100;

   // Display the result
   document.write("<h2>Percentage Calculation</h2>");
   document.write("Total Marks: " + totalMarks + "<br>");
   document.write("Marks Obtained: " + marksObtained + "<br>");
   document.write("Percentage: " + percentage + "%");


//question 9

       // Amount in US Dollars
       var usDollars = 10;

       // Amount in Saudi Riyals
       var saudiRiyals = 25;

       // Exchange rates
       var usdToPKR = 104.80;
       var saudiToPKR = 28;

       // Calculate the total amount in Pakistani Rupees
       var totalPKR = (usDollars * usdToPKR) + (saudiRiyals * saudiToPKR);

       // Display the result
       document.write("<h2>Currency Conversion</h2>");
       document.write("Amount in US Dollars: " + usDollars + " USD<br>");
       document.write("Amount in Saudi Riyals: " + saudiRiyals + " SAR<br>");
       document.write("Total Amount in Pakistani Rupees: " + totalPKR + " PKR");

//question 10

 // Initialize a variable with some number
 var initialValue = 8; // Change this value to the desired number

 // Perform arithmetic operations in a single expression
 var result = ((initialValue + 5) * 10) / 2;

 // Display the result
 document.write("<h2>Arithmetic Operations</h2>");
 document.write("Initial Value: " + initialValue + "<br>");
 document.write("Result: " + result);


//question 11

  // Store the current year
  var currentYear = new Date().getFullYear();

  // Store their birth year
  var birthYear = 1990; // Change this value to the person's birth year

  // Calculate their possible ages
  var age1 = currentYear - birthYear;
  var age2 = age1 - 1;

  // Display the result
  document.write("<h2>Age Calculator</h2>");
  document.write("Current Year: " + currentYear + "<br>");
  document.write("Birth Year: " + birthYear + "<br>");
  document.write("They are either " + age1 + " or " + age2 + " years old");


//question 12

 // Store the radius of the circle
 var radius = 5; // Change this value to the desired radius

 // Calculate the circumference of the circle
 var circumference = 2 * Math.PI * radius;

 // Calculate the area of the circle
 var area = Math.PI * Math.pow(radius, 2);

 // Display the results
 document.write("<h2>Geometrizer</h2>");
 document.write("Radius of the Circle: " + radius + "<br>");
 document.write("The circumference is " + circumference.toFixed(2) + "<br>");
 document.write("The area is " + area.toFixed(2));



 //question 13

   // Store your favorite snack
   var favoriteSnack = "chocolate";

   // Store your current age
   var currentAge = 30; // Change this value to your current age

   // Store the maximum age you expect to live
   var maximumAge = 80; // Change this value to your expected maximum age

   // Store an estimated amount of snacks consumed per day
   var snacksPerDay = 2; // Change this value to your estimated daily consumption

   // Calculate how many snacks you will need for the rest of your life
   var yearsRemaining = maximumAge - currentAge;
   var snacksNeeded = yearsRemaining * 365 * snacksPerDay;

   // Display the result
   document.write("<h2>Lifetime Supply Calculator</h2>");
   document.write("Your favorite snack: " + favoriteSnack + "<br>");
   document.write("Your current age: " + currentAge + " years<br>");
   document.write("Expected maximum age: " + maximumAge + " years<br>");
   document.write("Estimated snacks consumed per day: " + snacksPerDay + " per day<br>");
   document.write("You will need " + snacksNeeded + " " + favoriteSnack + " to last you until the ripe old age of " + maximumAge);

 

//Assignment 6
//question 1 



//question 2

var a = 2, b = 1;
var result = --a - --b + ++b + b--;

//question 3 

var userName = prompt("Enter your name:");
document.write("<h2>Hello, " + userName + "!</h2>");


//question 4 

var userNumber = prompt("Enter a number (or press Enter for the multiplication table of 5):");
if (userNumber === "") {
    userNumber = 5;
}
document.write("<h2>Multiplication Table of " + userNumber + "</h2>");
for (var i = 1; i <= 10; i++) {
    document.write(userNumber + " x " + i + " = " + (userNumber * i) + "<br>");
}


//question 5 

var subject1 = prompt("Enter the name of the first subject:");
var subject2 = prompt("Enter the name of the second subject:");
var subject3 = prompt("Enter the name of the third subject:");

var totalMarks = 100;

var marksSubject1 = parseFloat(prompt("Enter obtained marks for " + subject1 + ":"));
var marksSubject2 = parseFloat(prompt("Enter obtained marks for " + subject2 + ":"));
var marksSubject3 = parseFloat(prompt("Enter obtained marks for " + subject3 + ":"));

var totalObtainedMarks = marksSubject1 + marksSubject2 + marksSubject3;
var percentage = (totalObtainedMarks / (totalMarks * 3)) * 100;

document.write("<h2>Subject Marks</h2>");
document.write("Subject 1: " + subject1 + " (Total Marks: " + totalMarks + ", Obtained Marks: " + marksSubject1 + ")<br>");
document.write("Subject 2: " + subject2 + " (Total Marks: " + totalMarks + ", Obtained Marks: " + marksSubject2 + ")<br>");
document.write("Subject 3: " + subject3 + " (Total Marks: " + totalMarks + ", Obtained Marks: " + marksSubject3 + ")<br>");
document.write("Total Obtained Marks: " + totalObtainedMarks + "<br>");
document.write("Percentage: " + percentage.toFixed(2) + "%");



//question 6 


var usDollars = 10; // Amount in US Dollars
var saudiRiyals = 25; // Amount in Saudi Riyals

var exchangeRateUSD = 104.80; // Exchange rate: 1 US Dollar = 104.80 Pakistani Rupees
var exchangeRateSAR = 28; // Exchange rate: 1 Saudi Riyal = 28 Pakistani Rupees

var convertedAmountUSD = usDollars * exchangeRateUSD;
var convertedAmountSAR = saudiRiyals * exchangeRateSAR;

document.write("<h2>Currency Converter</h2>");
document.write(usDollars + " US Dollars = " + convertedAmountUSD + " Pakistani Rupees<br>");
document.write(saudiRiyals + " Saudi Riyals = " + convertedAmountSAR + " Pakistani Rupees");



//Assignment 9-10
// question 1

var cityName = prompt("Enter the name of your city:");

        if (cityName.toLowerCase() === "karachi") {
            document.write("<h2>Welcome to the city of lights</h2>");
        } else {
            document.write("<h2>Welcome to " + cityName + "</h2>");
        }

// question 2

var gender = prompt("Enter your gender (male/female):");

if (gender.toLowerCase() === "male") {
    document.write("<h2>Good Morning Sir</h2>");
} else if (gender.toLowerCase() === "female") {
    document.write("<h2>Good Morning Ma'am</h2>");
} else {
    document.write("<h2>Good Morning</h2>");
}


// question 3

var signalColor = prompt("Enter the color of the traffic signal (red/yellow/green):");

switch (signalColor.toLowerCase()) {
    case "red":
        document.write("<h2>Must Stop</h2>");
        break;
    case "yellow":
        document.write("<h2>Ready to move</h2>");
        break;
    case "green":
        document.write("<h2>Move now</h2>");
        break;
    default:
        document.write("<h2>Invalid input</h2>");
}


// question 4

var remainingFuel = parseFloat(prompt("Enter the remaining fuel in your car (in liters):"));

if (remainingFuel < 0.25) {
    document.write("<h2>Please refill the fuel in your car</h2>");
} else {
    document.write("<h2>Your fuel level is sufficient</h2>");
}


// question 5

//a

var a = 4;
if (++a === 5){
    alert("given condition for variable a is true");
}


//b 

var b = 82;
if (b++ === 83){
    alert("given condition for variable b is true");
}


//c

var c = 12;
if (c++ === 13){
    alert("condition 1 is true");
}
if (c === 13){
    alert("condition 2 is true");
}
if (++c < 14){
    alert("condition 3 is true");
}
if (c === 14){
    alert("condition 4 is true");
}


//d

var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
    alert("The cost equals");
}


//e

if (true){
    alert("True");
}
if (false){
    alert("False");
}



//f

if ("car" < "cat"){
    alert("car is smaller than cat");
}



// question 6




// question 7

// Store the secret number (you can change it to any number from 1 to 10)
var secretNumber = 7;

// Prompt user to guess the number
var userGuess = parseInt(prompt("Guess the secret number (from 1 to 10):"));

// Check if the user's guess is correct or close
if (userGuess === secretNumber) {
    alert("Bingo! Correct answer.");
} else if (userGuess === secretNumber + 1 || userGuess === secretNumber - 1) {
    alert("Close enough to the correct answer.");
} else {
    alert("Sorry, try again.");
}



// question 8

// Prompt the user to enter a number
var userNumber = parseInt(prompt("Enter a number:"));

// Check if the number is divisible by 3
if (userNumber % 3 === 0) {
    alert(userNumber + " is divisible by 3.");
} else {
    alert(userNumber + " is not divisible by 3.");
}


// question 9

// Prompt the user to enter a number
var userNumber = parseInt(prompt("Enter a number:"));

// Check if the number is even or odd
if (userNumber % 2 === 0) {
    alert(userNumber + " is an even number.");
} else {
    alert(userNumber + " is an odd number.");
}


// question 10

// Prompt the user to enter the temperature
var temperature = parseFloat(prompt("Enter the temperature:"));

// Check the temperature and display a message
if (temperature > 40) {
    alert("It is too hot outside.");
} else if (temperature > 30) {
    alert("The Weather today is Normal.");
} else if (temperature > 20) {
    alert("Today’s Weather is cool.");
} else if (temperature > 10) {
    alert("OMG! Today’s weather is so Cool.");
} else {
    alert("It's quite cold outside.");
}


// question 11

// Prompt the user for the first number
var firstNumber = parseFloat(prompt("Enter the first number:"));

// Prompt the user for the operation (+, -, *, /, %)
var operation = prompt("Enter the operation (+, -, *, /, %):");

// Prompt the user for the second number
var secondNumber = parseFloat(prompt("Enter the second number:"));

// Initialize a variable to store the result
var result;

// Perform the selected operation
if (operation === "+") {
    result = firstNumber + secondNumber;
} else if (operation === "-") {
    result = firstNumber - secondNumber;
} else if (operation === "*") {
    result = firstNumber * secondNumber;
} else if (operation === "/") {
    if (secondNumber !== 0) {
        result = firstNumber / secondNumber;
    } else {
        result = "Division by zero is not allowed.";
    }
} else if (operation === "%") {
    if (secondNumber !== 0) {
        result = firstNumber % secondNumber;
    } else {
        result = "Modulo by zero is not allowed.";
    }
} else {
    result = "Invalid operation. Please use +, -, *, /, or %.";
}

// Display the result
alert("Result: " + result);
