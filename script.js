// Assignment Code
var generateBtn = document.querySelector("#generate");

// character criteria options
function getPassword() {
    var upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var lowerLetters = "abcdefghijklmnopqrstuvwxyz";

    var symbols = "!@#$%^&*()_+{}|[];:',./<>?";
    var numbers = "1234567890";
    var passwordConditions = "";
    var password = "";

    var passwordLength = prompt(
        "How many characters would you like the password to contain? Enter a value between 8 to 128 characters.");

    if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
        alert("Please enter a valid length. The value has to be between 8 to 128.");
        return;
    }

    else {
        var upperLettersValue = confirm("Click OK to include uppercase characters.")
        var lowerLettersValue = confirm("Click OK to include lowercase characters.")
        var numbersValue = confirm("Click OK to include numeric characters.")
        var symbolsValue = confirm("Click OK to include special characters")
    }

    //conditionals
    if (upperLettersValue) { passwordConditions += upperLetters }
    if (lowerLettersValue) { passwordConditions += lowerLetters }
    if (numbersValue) { passwordConditions += numbers }
    if (symbolsValue) { passwordConditions += symbols }


    for (i = 0; i < passwordLength; i++) {
        password += passwordConditions[Math.floor(Math.random() * passwordConditions.length)]
    }
    return (password)
}



//write password
function writePassword(password) {
    var passwordText = document.querySelector("#password");
    if (password.length === 0) {
        return
    }
    passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", function () { writePassword(getPassword()) });