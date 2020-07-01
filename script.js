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
var characters;


//Ask password Length
function promptLength () {
    var passLength = "";
    var passLength = Number(prompt ("How many characters do you want your password to be? Enter a number between 8 and 128."));

    //Loop if length isn't 8-128
    while(promptLength <= 8 && promptLength >= 128) {
        alert("Please enter a number between 8 and 128");
        var passLength = Number(prompt ("How many characters do you want your password to be? Enter a number between 8 and 128."));
    }

    //confirm inclusion of characters, numbers, special characers
    var lowercase = confirm ("Do you want to include lowercase letters?");
    var uppercase = confirm ("Do you want to include uppercase letters?");
    var numbers = confirm ("Do you want to include numbers?");
    var special = confirm ("Do you want to include special characters?");

    var characters = [lowercase, uppercase, numbers, special]
};



