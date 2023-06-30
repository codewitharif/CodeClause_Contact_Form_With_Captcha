// Generate the CAPTCHA
function generateCaptcha() {
  var captchaContainer = document.getElementById("preview");
  var captcha = generateRandomCaptcha(); // Generate the CAPTCHA value

  // Display the CAPTCHA in the container
  captchaContainer.textContent = captcha;
}

// Generate a random CAPTCHA
function generateRandomCaptcha() {
  // Generate a random 5-digit number
  var captcha = Math.floor(Math.random() * 90000) + 10000;
  return captcha.toString();
}

// Compare the CAPTCHA on button click
document.getElementById("submit").addEventListener("click", function () {
  var userCaptcha = document.getElementById("captcha-for-input").value;
  var generatedCaptcha = document.getElementById("preview").textContent;

  if (userCaptcha === generatedCaptcha) {
    alert("CAPTCHA matched! Proceed with the form submission.");
    // Add your code here to submit the form or perform further actions
  } else {
    alert("CAPTCHA does not match. Please try again.");
  }
});

// Generate a new CAPTCHA when the page loads
window.onload = generateCaptcha;
