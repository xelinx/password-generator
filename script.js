var password = {
function promptLength () {
    var charSet = "";
    var passLength = Number(prompt ("How many characters do you want your password to be? Enter a number between 8 and 128."));
        if (passLength <8) {
            "Please enter a number between 8 and 128.";
        }
    },
addLower: function() {
    var lowercase = confirm ("Do you want to include lowercase letters?");
        if( lowercase === "true" ) {
            this.charSet= this.charSet + "abcdefghijklmnopqrstuvwxyz";
        }
        else( lowercase === "false") {
            this.charSet;
        }
    },
addUpper: function() {
    var uppercase = confirm ("Do you want to include uppercase letters?");
        if( uppercase === "true" ) {
            this.charSet= this.charSet + "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        } 
        else( lowercase === "false") {
            this.charSet;
        }
    },
addNumber: function() {  
    var numbers = confirm ("Do you want to include numbers?");
        if( numbers === "true" ) {
            this.charSet = this.charSet + "0123456789";
        } 
        else( lowercase === "false") {
            this.charSet;
        }
    },
addSpecial: function() {
    var special = confirm ("Do you want to include special characters?");
        if( special === "true" ) {
            this.charSet = this.charSet + "~!@#$%^&*/-+";
        } 
        else( lowercase === "false") {
            this.charSet;
        }
    },
    var value = "";
    for (var i = 0; i < length; i++) {
      value += charSet.charAt(Math.floor(Math.random() * charSet.length));
    }
    return value
}
alert(generatePassword());