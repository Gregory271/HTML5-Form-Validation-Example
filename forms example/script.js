//identifies the input box, submit button and text heading at top of website
const userNameInput = document.getElementById('username');
const subButton = document.getElementById('submit');
const titleText = document.getElementById('title-text');

//creates variable that will store users username, we will "check" this value later 
let userName;

subButton.onclick=function(){ //event handler that causes code between brackets to execute once subButton has been clicked
  userName = userNameInput.value;

  if(userName == "" || userName == " "){ //conditional statment that checks if userName field was empty
    titleText.innerHTML = "Sorry that didnt work, make sure the username field isnt blank. ";
  }
  else{ //if the userName field wasnt empty, this "else statement" acts as a fallback option, a default result for users who enter it correctly
    titleText.innerHTML = "Thank you for your submission " + userName;
  }

};