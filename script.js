
function generatePassword (plength) {
    var charSet = "";
    var passLength = Number(prompt ("How many characters do you want your password to be? Enter a number between 8 and 128."));
        if (passLength <8) {
            "Please enter a number between 8 and 128."
        };
        if else (passLength >128) {
            "Please enter a number between 8 and 128."
        };
        else (passLength) {
            
        };

    var lowercase = confirm ("Do you want to include lowercase letters?");
    var uppercase = confirm ("Do you want to include uppercase letters?");
    var numbers = confirm ("Do you want to include numbers?");
    var special = confirm ("Do you want to include special characters?");
        if( lowercase === "true" ) {
            charSet + "abcdefghijklmnopqrstuvwxyz";
        } 
        else if( uppercase === "true" ) {
            charSet + "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        } 
        else if( numbers === "true" ) {
            charSet + "0123456789";
        } 
        else if( special === "true" ) {
            charSet + "~!@#$%^&*/-+";
        } 
    plength = Number(lengthInput.value);

    var value = "";
    for (var i = 0; i < length; i++) {
      userPassword += charSet.charAt(
        value+ (Math.floor(Math.random() * charSet.length)
      );
    }
    return value
}
alert(generatePassword());