//Assignment 1 
//Question 1

alert('Hello, welcome to our website! We are glad you are here.');

//Question 2

alert('Error! Please enter a valid password.');

//Question 3

alert('Welcome to JS Land... \n Happy Coding!');

//Question 4

alert('Welcome to JS Land...')
alert('Happy Coding!')

//Question 5

console.log("Hello...I can run JS through my web browser's console")

//Question 6

  // JavaScript function to display an alert
  function showAlert() {
    alert("This is an alert message!");
}



// Assignment 2 
// Question 1 

var username;


// Question 2

var myName = "Syed Mustufa Ahmed Naqvi";



// Question 3

  // a) Declare a JavaScript variable titled 'message'
  var message;

  // b) Assign "Hello World" to the variable 'message'
  message = "Hello World";

  // c) Display the message in an alert box
  alert(message);

// Question 4

   // Declare variables for student's bio data
   var studentName = "John Doe";
   var studentAge = "15 years old";
   var certification = "Certified Mobile Application Development";

   // Display the student's bio data in alert boxes
   alert("Student Name: " + studentName);
   alert("Student Age: " + studentAge + " years");
   alert("Student Grade: " + certification);


// Question 5

 // Declare a JavaScript variable with the word
 var word = "pizza";

 // Create the message with progressively shorter versions of the word
 var message = word + "\n" +
                word.substring(0, word.length - 1) + "\n" +
                word.substring(0, word.length - 2) + "\n" +
                word.substring(0, word.length - 3) + "\n" +
                word.substring(0, word.length - 4);

 // Display the message in an alert box
 alert(message);


// Question 6


var email = "mustufanaqvi44@gmail.com";

// Create a message with your email address
var message = "Your email address is: " + email;

// Display the message in an alert box
alert(message);


//Question 7

var book = "A smarter way to learn JavaScript";

// Create a message with the book title
var message = "I'm currently reading the book: " + book;

// Display the message in an alert box
alert(message);

//Question 8

var textToDisplay = "Yah! I can write HTML content through JavaScript.";
document.write(textToDisplay);


// Assignment 3 

//Question 1

var age = 20; // Replace 30 with your actual age

var message = "Your age is: " + age;
alert(message);

//Question 2

// Check if local storage is supported by the browser
if (typeof(Storage) !== "undefined") {
    // Check if the visitor count exists in local storage
    if (localStorage.getItem("visitorCount") === null) {
        // If it doesn't exist, initialize it to 1
        localStorage.setItem("visitorCount", 1);
    } else {
        // If it exists, increment the visitor count
        var visitorCount = parseInt(localStorage.getItem("visitorCount"));
        visitorCount++;
        localStorage.setItem("visitorCount", visitorCount);
    }

    // Get the visitor count and display it
    var visitorCount = localStorage.getItem("visitorCount");
    var message = "You have visited this site " + visitorCount + " times.";
    document.write(message);
} else {
    // Local storage is not supported
    document.write("Local storage is not supported, cannot track visits.");
}


//Question 3

var BirthYear = 2002; // Replace 1990 with your actual birth year

var Message = "My birth year is: " + BirthYear;
document.write(Message)



//Question 4

// Visitor's information
var visitorName = "John Doe";
var productTitle = "T-shirt";
var quantity = 5;

// Create a message with the order details
var message = visitorName + " ordered " + quantity + " " + productTitle + "(s) on XYZ Clothing store.";

// Display the message in the browser
document.write(message);



//Assignment 4

//Question 1

var variable1, variable2, variable3;


//Question 2

//Legal names

var firstName;
var user123;
var myVar;
var _privateVar;
var $specialVar;

//illegal names

// 123user ;
// my-variable ;
// user@domain ;
// for ;
// class ;

//Question 3

document.write("<h1>Rules for naming JS variables</h1>");
document.write("<p>Variable names can only contain letters, numbers, underscores, and dollar signs. For example $my_1stVariable</p>");
document.write("<p>Variables must begin with a letter, underscore, or dollar sign. For example $name, _name, or name</p>");
document.write("<p>Variable names are case-sensitive</p>");
document.write("<p>Variable names should not be JS reserved words</p>");


