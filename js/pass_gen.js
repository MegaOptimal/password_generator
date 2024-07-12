window.addEventListener("load", function (e) {
    NumberInput = document.getElementById("pswlength");
    NumberInput.addEventListener("keydown", isNumberKey);
})

function isNumberKey(evt) {
    var newValue = this.value.replace(new RegExp(/[^\d]/, 'ig'), "");
    this.value = newValue;
};