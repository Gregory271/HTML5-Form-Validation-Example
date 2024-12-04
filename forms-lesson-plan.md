Aim: I can identify and describe the HTML & javaScript code necessary to collect and validate user input

Objectives: (this depends on the class's familiarity with JS)
1) Link jS & CSS to my HTML form website using <script> and <link>
2) Check value of variables using console.log(variable); and browser console
3) Modify submission output using conditional statement

Resources:
How to link css: 
https://www.w3schools.com/css/css_howto.asp\

How to link jS:
https://www.w3schools.com/tags/att_script_src.asp

How to check value of variables and send to console: 
https://www.w3schools.com/jsref/met_console_log.asp

How to check console and troubleshoot JS errors: 
https://w3colleges.org/developer-console-in-web-browsers/

How to make conditional statement in js:
https://www.w3schools.com/js/js_if_else.asp

Procedure:
1) Introduce students to starter code provided, ask them "what HTML tags seem to be part of our form?" ANSWER: Everything within the <form> element.
2) Identify the the CSS & JS links, remind students that these must be checked and correct before anything will display properly.
3) Demonstrate the websites functionality, asking the students "What are the possible outcomes/output?" ANSWER: The user will be told their username is blank, that their information is wrong, or that they are signed in and welcome to enter the site.
4) Demonstrate how console.log(username); will show their username in the console, this is for debussing purposes to make sure the value was correctly assigned.
5) Analyse the if statements inside of the "click function", ask the students about what they think the syntax of the condition is looking for.

Acitvitiy/Extension: Have students tweak the correct username and paswword variables, change the if statements themselves to check to see if ONLY their password is wrong, this will allow them to give the user additional feedback
   EXAMPLE: ADD THIS AFTER AN EXISTING IF AND BEFORE ELSE STATEMENT

   else if(username == correctusername && password != correctpassword){ //the != here checks to see if they are not entering the correct password
     titleText.innerHTML = "your password is wrong";
   }

