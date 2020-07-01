document.querySelector("#prompt").addEventListener("click", promptLength);

//Variables
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var number = "0123456789";
var special = "!@#$%^&*/-+";

var passLength;
var confirmLowercase;
var confirmUppercase;
var confirmNumbers;
var confirmSpecial; 
var confirmLoop;
var characters;


//Ask password Length
function promptLength () {
    var passLength = "";
    var passLength = Number(prompt ("How many characters do you want your password to be? Enter a number between 8 and 128."));

    //Loop if length isn't 8-128
    if (passLength <8) {
        alert("Please enter a number between 8 and 128");
        var passLength = Number(prompt ("How many characters do you want your password to be? Enter a number between 8 and 128."));
    }
    else if (passLength >128) {
        alert("Please enter a number between 8 and 128");
        var passLength = Number(prompt ("How many characters do you want your password to be? Enter a number between 8 and 128."));
    }

    //Display password length
    alert("Your password will be " + passLength + " characters");

    //confirm inclusion of characters, numbers, special characers

    var lowercase = confirm ("Do you want to include lowercase letters?");
    var uppercase = confirm ("Do you want to include uppercase letters?");
    var numbers = confirm ("Do you want to include numbers?");
    var special = confirm ("Do you want to include special characters?");

    if (lowercase === "false" && uppercase === "false" && numbers === "false" && special === "false") {
        alert ("Please include at least one set of characters");
        var lowercase = confirm ("Do you want to include lowercase letters?");
        var uppercase = confirm ("Do you want to include uppercase letters?");
        var numbers = confirm ("Do you want to include numbers?");
        var special = confirm ("Do you want to include special characters?");
    }

    alert ("test")

};



