const originalText = 21.12345;
document.getElementById('originalText').innerHTML = originalText;

var input = document.getElementById('inputText');
var output = document.getElementById('output');

const clearInput = function () {
    return input.value = "";
}
const clearOutput = () => {
    return output.innerHTML = "";
}

const showOutput = (outputData) => {
    output.innerHTML = outputData;
}


// Round a Number
// let number = document.getElementById('orginalText');
function round() {
    let number = document.getElementById("inputText").value;
    if (!number) {
        alert('Please enter a floating point number.');
        return;
    }
    let roundTheNumber = Math.round(number);
    let html = "<h1 class = 'text-primarytheme mb-0'>" + roundTheNumber + "</h1>"
    showOutput(html);
}
// Ceil a Number
function ceil() {
    let number = document.getElementById("inputText").value;
    if (!number) {
        alert('Please enter a floating point number.');
        return;
    }
    let roundTheNumber = Math.ceil(number);
    let html = "<h1 class = 'text-primarytheme mb-0'>" + roundTheNumber + "</h1>"
    showOutput(html);
}

// Floor a Number
function floor() {
    let number = document.getElementById("inputText").value;
    if (!number) {
        alert('Please enter a floating point number.');
        return;
    }
    let roundTheNumber = Math.floor(number);
    let html = "<h1 class = 'text-primarytheme mb-0'>" + roundTheNumber + "</h1>"
    showOutput(html);
}
// Generate a Random Number 
function randomNumber() {
    let randomNumber = Math.random();
    let html = "<h1 class = 'text-primarytheme mb-0'>" + randomNumber + "</h1>";
    showOutput(html);
}

// Dice a Number 
function dice() {
    let randomNumber = Math.random();
    randomNumber = (randomNumber * 6) + 1;
    let dice = Math.floor(randomNumber);
    let html = "<h1 class = 'text-primarytheme mb-0'>" + dice + "</h1>";
    showOutput(html);

}

// Generate a Random String:

function randomString() {
    let length = input.value;
    if (!length) {
        alert("Enter your length");
        return;
    }

    let randomString = "";
    let upperCaseAlphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let lowerCaseAlphabets = "abcdefghijklmnopqrstuvwxyz";
    let numbers = "0123456789";
    let symbols = "`!@#$%^&*-_=+/?.,"
    let possibleString = upperCaseAlphabets + lowerCaseAlphabets + numbers + symbols;

    for (let i = 0; i < length; i++) {
        let randomNumber = Math.random();
        randomString += possibleString.charAt(Math.floor(randomNumber * possibleString.length));
        let html = "<h3 class = 'text-primarytheme mb-0'>" + randomString + "</h3>";
        showOutput(html);
    }
}

// Converting string to integer decimal

function convertingString() {
    let num = input.value;

    if (!num) {
        alert("Please enter some number");
        return;
    }
    console.log(num);
    // let num = "251.99999999";
    console.log(typeof num);
    num = parseInt(num);
    num = parseFloat(num);
    num = Number(num);
    console.log(typeof num);
    let html = "<h3 class = 'text-primarytheme mb-0'>" + num + "</h3>";
    showOutput(html);
}
// controling the length of decimal:
function controlingLength() {
    let num = input.value;
    if (!num) {
        alert("Please enter some number");
        return;
    }
    // let num = "251.99999999";
    num = Number(num);
    console.log(typeof num);
    num = num.toFixed(2);
    console.log(typeof num);
    let html = "<h3 class = 'text-primarytheme mb-0'>" + num + "</h3>";
    showOutput(html);
}
// Calculate GST

function calculateGST() {
    let cost = input.value;
    if (!cost) {
        alert("Please enter some amount");
        return;
    }
    // let cost ="912";
    cost = Number(cost);
    // let tax = 17/100;

    let tax = cost * (17 / 100);
    let totalCost = cost + tax;
    totalCost = Math.round(totalCost);
    
    document.getElementById('output').innerHTML = "";
    document.getElementById('output').innerHTML += '<p>Your bill = <span class ="text-primaryTheme fw-bold fw-18">' + cost + '</span> </p>';
    document.getElementById('output').innerHTML += '<p> Tax 17% = <span class ="text-danger fw-bold fw-18">' + tax.toFixed(2) + '</span> </p>';
    document.getElementById('output').innerHTML += '<p> Total amount including tax = <span class ="text-success fw-bold fw-18">' + totalCost + '</span> </p>';
}