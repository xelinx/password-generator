var questions ["Do you want to include"+lowercase, uppercase, numbers, special"in your password?"];

var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var number = "0123456789";
var specialChar = "!@#$%^&*/-+";
var userPassword;
var passwordCharSet;
var Button = document.getElementsById ("button");


var passLength = prompt ("How many characters do you want your password to be? Enter a number between 8 and 128.");
    if (passLength <8) {
        alert ("Please select between 8 and 128");
    }
    else if (passLength >128) {
        alert ("Please select between 8 and 128");
    }

    var lowercase = confirm ("Do you want to include lowercase letters?");
    var uppercase = confirm ("Do you want to include uppercase letters?");
    var numbers = confirm ("Do you want to include numbers?");
    var special = confirm ("Do you want to include special characters?");
    
    function generate () {
        userPassword = "";
        passwordCharSet = "";
        if (lowercase === true) {
            passwordCharSet+= lowerCase;
        }
        if (uppercase === true) {
            passwordCharSet+= upperCase;
        }
        if (numbers === true) {
            passwordCharSet+= number;
        }
        if (special === true) {
            passwordCharSet+= specialChar;
        }
        return 
    }

button.addEventListener("click", generate);