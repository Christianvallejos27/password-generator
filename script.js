// Assignment Code
var generateBtn = document.querySelector("#generate");
var numbers = "1234567890"
var symbols = "!@#$%^&*()"
var lowercase = "abcdefghi"
var uppercase = "ABCDEFGHI"
var possiblepassword = ""

function generatePassword(){
var passwordlength = prompt("how many characters")
  if (passwordlength<8||passwordlength>128||isNaN(passwordlength)){
    alert("password much be an intager between 8 and 128")
  }
  var wantnumbers = confirm("would you like numbers in your password?")
  if (wantnumbers === true){
    possiblepassword += numbers
  }
  var wantsymbols = confirm("would you like symbols in your password?")
  if (wantsymbols === true){
    possiblepassword += symbols

  }
  var wantlowercase = confirm("would you like lowercase?")
  if (wantlowercase === true){
    possiblepassword += lowercase
  }
  var wantuppercase = confirm("would you like uppercase")
  if (wantuppercase === true){
    possiblepassword += uppercase
  }
  if (!wantnumbers&&!wantsymbols&&!wantlowercase&&!wantuppercase){
    alert ("must choose at least one option")
  }
  var finalpassword = ""
  for(var i = 0; i < passwordlength; i ++ ){
var randomindex =Math.floor(Math.random()*possiblepassword.length)
finalpassword += possiblepassword[randomindex]
  }
  return finalpassword
console.log(passwordlength,wantnumbers,possiblepassword)
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



