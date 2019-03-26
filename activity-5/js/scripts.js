// Object for header data
var headerInfo = {
 title: "The 20 Best Atom Packages for Front End Developers (Simplified)",
 author: "Tiffany Tse",
 date: "May 30, 2017",
 heroImage: "images/the-best-atom-packages-2017.png"
};

// Array with objects that have package data
var database = [
  // Beautify Info (package 1, index 0)
  {
    name: "atom-beautify",
    description: "This package beautifies code, or cleans up the code so it is easier to read. The package has support for many languages, including HTML, CSS, JavaScript, PHP, Python, Ruby, Java, C, C++, C#, Objective-C, CoffeeScript, and more.",
    author: "Glavin001",
    downloads: 6017706,
    stars: 5050,
    image: "images/beautify.gif",
    url: "https://atom.io/packages/atom-beautify",
    selector: "beautify"
  },
  // Pigments Info (package 2, index 1)
  {
    name: "Pigments",
    description: "A package that displays colors in projects and files. It's especially useful when dealing with hex codes that aren't labeled with variables.",
    author: "abe33",
    downloads: 2542411,
    stars: 3603,
    image: "images/pigments.png",
    url: "https://atom.io/packages/pigments",
    selector: "pigments"
  },
  // Pane Layout Plus Info (package 3, index 2)
  {
    name: "Pane Layout Plus",
    description: "The Pane Layout Plus package allows you to easily organize and control the distribution of multiple panes in Atom. This package has shortcuts to jump between columns, and set column layouts.",
    author: "chemoish",
    downloads: 17693,
    stars: 57,
    image: "images/pane-layout-plus.gif",
    url: "https://atom.io/packages/pane-layout-plus",
    selector: "pane"
  },
];

// Function for creating package objects
function Package(packageData) {
  this.name = packageData.name;
  this.description = packageData.description;
  this.author = packageData.author;
  this.downloads = packageData.downloads;
  this.stars = packageData.stars;
  this.image = packageData.image;
  this.url = packageData.url;
  this.selector = packageData.selector;
  this.formatDownloads = function() {
    return this.downloads.toLocaleString();
  };
  this.formatStars = function() {
    return this.stars.toLocaleString();
  };
}

/* Creating three objects based on the object creator function above The main purpose for this is that now the functions formatDownloads and formatStars can be accessed with the information from the database! */
var beautifyPackage = new Package(database[0]);
var pigmentsPackage = new Package(database[1]);
var panePackage = new Package(database[2]);

// Adding the objects to a new array that will be used to update the web package
var packageData = [beautifyPackage, pigmentsPackage, panePackage];

// Function that writes the package data into the DOM elements
function writePackageInfo(package) {
  // Get reference to DOM elements
  var selector = package.selector;
  elName = document.getElementById(selector + "Name"),
  elDesc = document.getElementById(selector + "Description");
  elAuthor = document.getElementById(selector + "Author");
  elDownloads = document.getElementById(selector + "Downloads");
  elStars = document.getElementById(selector + "Stars");
  elImage = document.getElementById(selector + "Image");
  elButton = document.getElementById(selector + "Button");

  // Write package data into the web page
  elName.textContent = package.name;
  elDesc.textContent = package.description;
  elAuthor.textContent = "Author: " + package.author;
  elDownloads.textContent = "Downloads: " + package.formatDownloads();
  elStars.textContent = "Stars: " + package.formatStars();
  //Changes the "src" value to the image's location
  elImage.setAttribute("src", package.image);
  // Writes text inside the button
  elButton.textContent = "View " + package.name + " package";
  // Adds the correct link to the button
  elButton.setAttribute("href", package.url);
}

// Inserts the article information into the webpage
function writeHeaderInfo() {
  // Get reference to DOM elements
  elTitle = document.getElementById("title");
  elAuthor = document.getElementById("author");
  elDate = document.getElementById("date");
  elHeroImage = document.getElementById("heroImage");

  // Write header info into the web page
  elTitle.textContent = headerInfo.title;
  elAuthor.textContent = headerInfo.author;
  elDate.textContent = headerInfo.date;
  elHeroImage.src = headerInfo.heroImage;
}

// Inserts the package data into the webpage
function init() {
  // Write package data by looping through each item in the array called "packageData"
  for (let i = 0; i < packageData.length; i++) {
    // Creates the constant "package" from the specified item from the array of objects "packageData"
    const package = packageData[i];
    // Calls funciton "writePackageInfo" to use package and write that section
    writePackageInfo(package);
  }
}

//Calling writeHeaderInfo
writeHeaderInfo();

// Calling init
init();
