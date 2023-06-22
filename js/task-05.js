let input = document.getElementById("name-input");
let output = document.getElementById("name-output");

input.addEventListener("input", (event) => {
  output.textContent = event.currentTarget.value;
if (output.textContent=="") 
  output.innerHTML='Anonymous'

});