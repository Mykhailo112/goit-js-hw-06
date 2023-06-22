const counterValue = document.getElementById("value");

document.querySelector('button[data-action="increment"]').onclick=
function(){
    let countPlus = counterValue.innerHTML;
    if (countPlus+=1){
        counterValue.innerHTML++;
    }
}
document.querySelector('button[data-action="decrement"]').onclick=
function () {
let countMinus = counterValue.innerHTML;
if (countMinus+=1) {
    counterValue.innerHTML--;    
}    
}