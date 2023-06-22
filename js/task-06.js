let validInput = document.getElementById('validation-input')
let dataLength = Number(document.getElementById("data-length"));
let inputLength = validInput.value.length;

validInput.addEventListener("blur", () => {
if (Number(validInput)===Number(inputLength)) {
    if (!validInput.classList.contains('invalid')) {
        validInput.classList.add('valid')
    } else {
        validInput.classList.replace('invalid','valid')
    }
}else{
    if (!validInput.classList.contains('valid')) {
        validInput.classList.add('invalid')
    } else {
        validInput.classList.replace('valid','invalid')
    }
}})
