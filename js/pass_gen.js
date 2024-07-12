window.addEventListener("load", function (e) {
    NumberInput = document.getElementById("pswlength");
    NumberInput.addEventListener("keydown", isNumberKeyorEnter);
})

function isNumberKeyorEnter(evt) {
    if (evt.key === "Enter") {
        evt.preventDefault();
        return false;
    }
    var newValue = this.value.replace(new RegExp(/[^\d]/, 'ig'), "");
    this.value = newValue;
};

