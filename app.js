var displayScreen = document.getElementById('display');

function display(num) {
    displayScreen.value += num;
}
function evaluation() {
    try {
        displayScreen.value = eval(displayScreen.value);
    }
    catch (err) {
        alert("Invalid Evaluation !")
    }
}
function Clear() {
    displayScreen.value = "";
}
function Delete() {
    displayScreen.value = displayScreen.value.slice(0, -1);
}
