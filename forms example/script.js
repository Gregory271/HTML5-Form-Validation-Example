//identifies the input boxes, submit button and text heading at top of website
const userNameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const subButton = document.getElementById('submit');
const titleText = document.getElementById('title-text');

//creates variable that will store users username, we will "check" this value later
let correctUsername = "digitalDesign"; //let indicates new variable, do this once for each variable
let correctPassword = "codeDaily";
let username;
let password;

subButton.onclick=function(){ //event handler that causes code between brackets to execute once subButton has been clicked
  username = userNameInput.value;
  password = passwordInput.value;
  console.log(username + " " + password);

  if(username == "" || username == " "){ //conditional statment that checks if userName field was empty
    titleText.innerHTML = "Sorry that didnt work, make sure the username field isnt blank. ";
  }
  else if(username == correctUsername && password == correctPassword){ //conditional statement that checks if both password & username are correct
    titleText.innerHTML = "Welcome " + username +"!";
  }
  else{ //if the userName field wasnt empty, this "else statement" acts as a fallback option, a default result if other conditionas are "false"
    titleText.innerHTML = "Sorry, something you are entering does not seem to be correct, please try again. ";
  }

};