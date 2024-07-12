window.addEventListener("load", resetElements)
window.addEventListener("load", function (e) {
    NumberInput = document.getElementById("pswlength");
    NumberInput.addEventListener("keydown", isNumberKeyorEnter);
    NumberInput.addEventListener("change", isNumberKeyorEnter);
})

function isNumberKeyorEnter(evt) {
    if (evt.key === "Enter") {
        evt.preventDefault();
        return false;
    }
    var allowedChars = "123456789";
    var newValue = Array.from(this.value).filter(f => allowedChars.includes(f)).join('');
    this.value = newValue;
};

function resetElements() {
    var inputs = document.querySelectorAll('input[type=text]');
    inputs.forEach((element) => { element.value = ""; })

    var inputs_checkbox = document.querySelectorAll('input[type=checkbox]');
    inputs_checkbox.forEach((element) => { element.checked = false })
}