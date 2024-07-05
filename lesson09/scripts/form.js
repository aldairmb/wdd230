document.addEventListener('DOMContentLoaded', () => {
    let rangeinput = document.getElementById("rating");
    rangeinput.addEventListener('change', () => {
        document.getElementById("rangevalue").innerText = rangeinput.value;
    });

    let repeatinput = document.getElementById("repeat");
    repeatinput.addEventListener("focusout", () => {
        let passwordinput = document.getElementById("password");
        if (passwordinput.value !== repeatinput.value) {
            document.getElementById("message").innerText = " Password values do not match! 😡";
            passwordinput.focus();
        } else {
            document.getElementById("message").innerText = "";
        }
    });
});