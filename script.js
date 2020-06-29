
function promptLength () {
    var passLength = Number(prompt ("How many characters do you want your password to be? Enter a number between 8 and 128."));
        if (passLength <8) {
            "Please enter a number between 8 and 128."
        }
    var lowercase = confirm ("Do you want to include lowercase letters?");
    var uppercase = confirm ("Do you want to include uppercase letters?");
    var numbers = confirm ("Do you want to include numbers?");
    var special = confirm ("Do you want to include special characters?");
}



function generatePassword () {
    userPassword = "";
    passwordCharSet = "";
    if (lowercase === true) {
        passwordCharSet+ lowerCase;
    }
    if (uppercase === true) {
        passwordCharSet+ upperCase;
    }
    if (numbers === true) {
        passwordCharSet+ number;
    }
    if (special === true) {
        passwordCharSet+ specialChar;
    }
    plength = Number(lengthInput.value);

    for (let i = 0; i < plength; i++) {
      userPassword += passwordCharSet.charAt(
        Math.floor(Math.random() * passwordCharSet.length)
      );
    }
    return 
}