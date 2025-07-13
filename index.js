const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

// This is a reusable function that will generate and return one random password with.a maximum length of 15
function generateRandomPassword() {
  const passwordLength = 15;
  let password = ""; // At the start, there should be no passwords displayed

  // The for loop is inside this function, as it's responsible for one password
  for (let i = 0; i < passwordLength; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex];
  }
  return password; // This sends or hands off the final password string back to the function that called it. Remember, password starts out as blank.
}

// Get the HTML elements
  let passwordOne = document.getElementById("password-one");
  let passwordTwo = document.getElementById("password-two");

// Get the button
  const generatePasswordsButton = document.getElementById("generatePasswordsButton");

// Add an event listener to the button
  generatePasswordsButton.addEventListener("click", function () {
  
// Call the function twice to get two different results
  const firstPassword = generateRandomPassword();
  const secondPassword = generateRandomPassword();
  
// Update the HTML elements after you have the final results
  passwordOne.textContent = firstPassword;
  passwordTwo.textContent = secondPassword;
  
});