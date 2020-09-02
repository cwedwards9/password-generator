// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Generating password
function generatePassword(){

  // Get password length
  var passwordLength = Number(window.prompt("How many characters do you want your password to be?"));

  while(passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength) || !Number.isInteger(passwordLength)){
    alert("Your password must be a whole number between 8 and 128 characters");
    var passwordLength = Number(window.prompt("How many characters do you want your password to be?"));
  }

  // Get password case
  var hasUppercase = window.confirm("Do you want your password to use uppercase characters?");
  var hasLowercase = window.confirm("Do you want your password to use lowercase characters?");
  
  while(!hasUppercase && !hasLowercase){
    alert("You must select at least one case type!")
    var hasUppercase = window.confirm("Do you want your password to use uppercase characters?");
    var hasLowercase = window.confirm("Do you want your password to use lowercase characters?");
  }

  // Get any extra password characters (numbers and special chars)
  var hasNumeric = window.confirm("Do you want your password to include numbers?");
  var hasSpecial = window.confirm("Do you want your password to include special characters?");

  // Generate the password based off of the input from the user
  var characters = "";
  if(hasUppercase){
    characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  if(hasLowercase){
    characters += "abcdefghijklmnopqrstuvwxyz";
  }
  if(hasNumeric){
    characters+= "1234567890";
  }
  if(hasSpecial){
    characters+= "!#$%&()+-/:?@[\]^_~";
  }

  console.log("The user's password can contain these characters: " + characters);

}
