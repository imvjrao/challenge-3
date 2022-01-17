// The password generator will generate a random password between 8 and 128 characters following the different criterias listed below.



// Get references to the #generate element
var length = "";


var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", randompassword);
// function generatePassword() {
  
function randompassword() {
  var length = prompt("How many characters would you like your password to contain?");

 if(length<8 || length>128){
  alert ("Password length must be between 8-128 characters. Try again");
  var length = prompt("How many characters would you like your password to contain?");
  
}

 if (confirm("Click OK to confirm if you would like to add upper case")){
  var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
 }
 else {
  var uppercase = "";
 }
  
 if (confirm("Click OK to confirm if you would like to add lower case")){
  var lowercase = "abcdefghijklmnopqrstuvwxyz";
 }
 else{
   var lowercase = "";
 }
 if (confirm("Click OK to confirm if you would like to add number")){
  var number = "0123456789";
 }
 else{
   var number = "";
 }
 if (confirm("Click OK to confirm if you would like to add special character")){
  var specialcharacter = "!@#$%^&*()_+";
 }
 else{
   var specialcharacter = "";
 }

 
  console.log (uppercase);
  console.log (lowercase);
  console.log (number);
  console.log (specialcharacter);
  generateBtn.removeEventListener("click", randompassword);
  generateBtn.addEventListener("click", generatePassword);

  

function generatePassword(){
  var passwordcharacter = uppercase + lowercase + number + specialcharacter;
  var password = "";
for (var i=1; i <= length; i++){
  createpassword = Math.floor(Math.random()*passwordcharacter.length);
  password += passwordcharacter.substring(createpassword, createpassword + 1)
  }



// Write password to the #password input
function writePassword() {
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
writePassword();
}
}
