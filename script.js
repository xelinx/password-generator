document.querySelector("#prompt").addEventListener("click", promptLength);

//Variables
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var number = "0123456789";
var special = "!@#$%^&*/-+";

var passLength;
var lc;

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
    var lc = confirm ("Do you want to include lowercase letters?");
    var uppercase = confirm ("Do you want to include uppercase letters?");
    var numbers = confirm ("Do you want to include numbers?");
    var special = confirm ("Do you want to include special characters?");


};




var password = {
    //Ask password Length
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
    