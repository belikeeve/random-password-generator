const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

// This is a reusable function that will generate and return one random password with a maximum length of 15
function generateRandomPassword() {
  const passwordLength = 15;
  let password = ""; // At the start, there should be no passwords displayed

  // The for loop is inside this function, as it's responsible for one password
  for (let i = 0; i < passwordLength; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex];
  }
  return password; // This sends the final password string back to the function that called it. 
}

// Get the HTML elements
  let passwordOne = document.getElementById("password-one");
  let passwordTwo = document.getElementById("password-two");

// Get the button
  const generatePasswordsButton = document.getElementById("generatePasswordsButton");

// Get the new elements
  const copyIconOne = document.getElementById("copy-icon-one");
  const copyIconTwo = document.getElementById("copy-icon-two");
  const successMessage = document.getElementById("copy-success");

// The copy function
    function copyText(element) {
      const textToCopy = element.textContent;
      const tempInput = document.createElement("input");
      tempInput.value = textToCopy;
      document.body.appendChild(tempInput);
      
      tempInput.select();
      document.execCommand("copy");
      
      document.body.removeChild(tempInput);
      
      // Show the success message and then hide it
      successMessage.classList.add("visible");
      setTimeout(() => {
          successMessage.classList.remove("visible");
      }, 1500); // 1.5 seconds
    }

// Add an event listener to the button
  generatePasswordsButton.addEventListener("click", function () {
  
// Call the function twice to get two different results
  const firstPassword = generateRandomPassword();
  const secondPassword = generateRandomPassword();
  
// Update the HTML elements after the final results have been generated
  passwordOne.textContent = firstPassword;
  passwordTwo.textContent = secondPassword;
  
});

// Add event listeners to the icons
    copyIconOne.addEventListener("click", function() {
    copyText(passwordOne);
});

    copyIconTwo.addEventListener("click", function() {
    copyText(passwordTwo);
});
