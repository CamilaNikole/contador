var counter=0;

function incrementClick(){
    updateDisplay (++counter);
}

function decreaseClick(){
    updateDisplay (counter--);
}

function resetClick() {
    counter = 0;
    updateDisplay(counter);
}

function updateDisplay(val) {
    document.getElementById("valor").innerHTML = val;
}


    






