var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var number = "0123456789";
var specialChar = "!@#$%^&*/-+";
var passwordCharSet;

  var passLength = form ("How many characters do you want in your password?");
  var lowercase = confirm ("Do you want to include lowercase letters?");
  var uppercase = confirm ("Do you want to include uppercase letters?");
  var numbers = confirm ("Do you want to include numbers?");
  var special = confirm ("Do you want to include special characters?");


  function generatePassword () {
    userPassword = "";
    passwordCharSet = "";
    if (lowercaseInput.checked) {
      passwordCharSet += lowercase;
    }
    if (uppercaseInput.checked) {
      passwordCharSet += uppercase;
    }
    if (punctuationInput.checked) {
      passwordCharSet += punctuation;
    }
    if (numbersInput.checked) {
      passwordCharSet += numbers;
    }
    plength = Number(lengthInput.value);
   
    for (let i = 0; i < plength; i++) {
      userPassword += passwordCharSet.charAt(
        Math.floor(Math.random() * passwordCharSet.length)
      );
    }  