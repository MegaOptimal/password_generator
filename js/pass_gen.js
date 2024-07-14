window.addEventListener("load", function (e) { window.passwordChecker = new PasswordStrength(); document.getElementById("btn_generate_psw").addEventListener("click", GeneratePassword) })

function GeneratePassword() {
    const logograms = "#$%&@^`~";
    const numbers = "0123456789";
    const lowercase_letters = 'abcdefghijklmnopqrstuvwxyz';
    const uppercase_letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    var allowedChars = "";
    var password = "";
    var password_length = Number(document.getElementById("pswlength").value)

    if (password_length == 0) {
        alert("Password Length cannot be 0")
        return false
    }

    if (document.getElementById("include_logograms").checked) allowedChars += logograms
    if (document.getElementById("include_numbers").checked) allowedChars += numbers
    if (document.getElementById("include_lowercase").checked) allowedChars += lowercase_letters
    if (document.getElementById("include_uppercase").checked) allowedChars += uppercase_letters

    allowChars_length = allowedChars.length;

    if (allowChars_length == 0) {
        alert("Please check at least 1 checkbox")
        return false
    }

    for (var i = 0; i < password_length; i++) {
        const randomIndex = Math.floor(window.crypto.getRandomValues(new Uint32Array(1))[0] / (0xFFFFFFFF + 1) * allowChars_length);
        password += allowedChars.charAt(randomIndex);
    }

    var password_html_space = document.getElementById("generated_psw");
    password_html_space.value = password
    CheckPswStrength(password);
}

function CheckPswStrength(password) {
    //https://www.color-hex.com/color-palette/4837
    const color_values = {
        "VERY_WEAK": "#ff8c5a",
        "WEAK": "#ffb234",
        "REASONABLE": "#ffd934",
        "STRONG": "#add633",
        "VERY_STRONG": "#a0c15a"
    }
    const GOOD_BIT_VALUE = 128; //Arbitrary
    var passwordStrengthObject = window.passwordChecker.check(password)
    var passwordClassification = passwordStrengthObject.strengthCode
    var passwordBits = passwordStrengthObject.shannonEntropyBits
    var progressBar = document.getElementById("progress");
    var passwordQuality = document.getElementById("pass_quality");
    passwordBits < GOOD_BIT_VALUE ? BarWidth = Math.floor((passwordBits / GOOD_BIT_VALUE) * 100) : BarWidth = "100";
    progressBar.style.width = BarWidth + "%";
    progressBar.style.backgroundColor = color_values[passwordClassification];
    passwordQuality.innerHTML = "Password Quality: " + passwordClassification;
}
