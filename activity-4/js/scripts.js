// Declaring and assigning variable related to price
var price = 2.88;
var studentDiscount = .10;
// studentPrice is rounded to the nearest hundredth after calculating original price - studentDiscount
var studentPrice = Math.round((price - (price * studentDiscount)) / 0.01) * 0.01;

// Declaring and assigning variables for greeting the user
var user = "customer", salutation = "Howdy";
var welcomeMessage = salutation + ", " + user + "!";

// Declaring elGreeting and setting the value to the element with id = "greeting"
var elGreeting = document.getElementById("greeting");

//Changing the content of the element to the value of the variable called "greeting"
elGreeting.textContent = welcomeMessage;

//Using the elPrice variable to set the text in the element with id = "price"
var elPrice = document.getElementById("price");
elPrice.textContent = "Price: $" + price;

//Using the elStudentPrice variable to set the text in the element with id = "studentPrice"
var elStudentPrice = document.getElementById("studentPrice");
elStudentPrice.textContent = "Student Price: $" + studentPrice;
