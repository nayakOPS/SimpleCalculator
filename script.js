const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");
// Button click Event Handling
buttons.forEach((item) => {
    //looping through each button and atttaching `onclick` event handler
  item.onclick = () => {
    // handling different button clicks
    if (item.id == "clear") {
        //  if C button is clicked it clear the display screen
      display.innerText = "";
    } else if (item.id == "backspace") {
      let string = display.innerText.toString();
    // when clicked the backspace then removes the last number
      display.innerText = string.substr(0, string.length - 1);
    }//if the equal button is clicked and the display is not empty
     else if (display.innerText != "" && item.id == "equal") {
        //then evaluate using the eval()
        //The eval() function in JavaScript is used to evaluate JavaScript code represented as a string. 
        //It takes a string argument that contains a JavaScript expression or a series of statements, and
        // it executes them.
        /* eval(display.innerText): This evaluates the JavaScript expression represented by the text content.
         For example, if the display contains the string "2 + 3", eval("2 + 3") will return 5. */
      display.innerText = eval(display.innerText);
     }//if the equal button is clicked and the display is empty
     else if (display.innerText == "" && item.id == "equal") {
      display.innerText = "Empty!";
      //display empty text after 2 seconds
      setTimeout(() => (display.innerText = ""), 2000);
    } else {
      display.innerText += item.id;
    }
  };
});
// for theme toggler handling
const themeToggleBtn = document.querySelector(".theme-toggler");
const calculator = document.querySelector(".calculator");
const toggleIcon = document.querySelector(".toggler-icon");
//for keepung track of whether the dark theme is currently active
let isDark = true;
themeToggleBtn.onclick = () => {
  calculator.classList.toggle("dark");
  themeToggleBtn.classList.toggle("active");
  isDark = !isDark;
};