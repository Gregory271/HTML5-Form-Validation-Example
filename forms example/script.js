const userNameInput = document.getElementById('username');
const subButton = document.getElementById('submit');
const titleText = document.getElementById('title-text');
let userName;

subButton.onclick=function(){
  userName = userNameInput.value;

  if(titleText.value == "" || titleText.value == " "){
    titleText.innerHTML = "Sorry that didnt work, make sure the username field isnt blank. " + userName;
  }
  else{
    titleText.innerHTML = "Thank you for your submission " + userName;
  }

};