var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var number = "0123456789";
var specialChar = "!@#$%^&*/-+";
var passwordCharSet;
var copyButton = document.getElementsById ("copy");
function generate() {
    userPassword = "";
    passwordCharSet = "";
    if (lowercase ===trie) {
      passwordCharSet += lowercase;
    }
    if (uppercase === true) {
      passwordCharSet += uppercase;
    }
    if (number ===true) {
      passwordCharSet += punctuation;
    }
    if (specialChar === true) {
      passwordCharSet += numbers;
    }
    plength = Number(lengthInput.value);
   
    for (let i = 0; i < plength; i++) {
      userPassword += passwordCharSet.charAt(
        Math.floor(Math.random() * passwordCharSet.length)
      );
    }
    if (userPassword == "") {
      let alertbox = document.getElementById('alert');
      alertbox.innerHTML = "Please select an option before generating"
      alertbox.classList.add('fail');
      setTimeout(function(){ 
        alertbox.classList.remove('fail');
      }, 3000);
    } else {
      passwordFeild.innerHTML = userPassword;
    }
    copyButton.setAttribute("data-clipboard-text", userPassword)
  }
  generateButton.addEventListener("click", generate);
 

        button.addEventListener("click", function()
        {
            input.value = generatePassword(length.value);
        });



        function generatePassword(n) 
        {
            let pwd = "";
                
            while(!pwd || pwd.length  n<=128)
            {
                pwd += Math.random().toString(36).slice(-22);
            }
                  
            return pwd.substring(0, n);
        }
                
        
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
        
        function populateform(enterlength){
            document.pgenerate.output.value=generatePassword(enterlength)
        
            var passLength = form ("How many characters do you want in your password?");
            var lowercase = confirm ("Do you want to include lowercase letters?");
            var uppercase = confirm ("Do you want to include uppercase letters?");
            var numbers = confirm ("Do you want to include numbers?");
            var special = confirm ("Do you want to include special characters?");
          