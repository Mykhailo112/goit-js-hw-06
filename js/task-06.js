let validInput = document.getElementById('validation-input')
let dataLength = validInput.getAttribute('data-length');
console.log(dataLength);
validInput.addEventListener("blur", () => {
    let inputLength = validInput.value.length;
if (Number(dataLength)===Number(inputLength)) {
    validInput.classList.add('valid')
    validInput.classList.remove('invalid')
} else {
    validInput.classList.add('invalid')
    validInput.classList.remove('valid')
}
})