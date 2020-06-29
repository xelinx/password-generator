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


    // Loop over every question object
    for (var i = 0; i < questions.length; i++) {
        // Display current question to user and ask OK/Cancel
        var answer = confirm(questions[i].q);

  function generatePassword () {
    userPassword = "";
    passwordCharSet = "";
    if (lowercase, uppercase, numbers, special === true) {
      passwordCharSet += lowercase, uppercase, numbers, special;
    }
    plength = Number(lengthInput.value);
   
    for (let i = 0; i < plength; i++) {
      userPassword += passwordCharSet.charAt(
        Math.floor(Math.random() * passwordCharSet.length)
      );
    }  

generateButton.addEventListener("click", generate);