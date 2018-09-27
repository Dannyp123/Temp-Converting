document.addEventListener("DOMContentLoaded", function main() {
    var convertingButton = document.getElementById("FtoCbutton");
    var fInput = document.getElementById("f");
    var cSpan = document.getElementById("c");
    convertingButton.addEventListener("click", function convertClick() {
        cSpan.innerText = Math.round(convert(fInput.value));
    });
    var convertingKButton = document.getElementById("FtoCbutton");
    var kInput = document.getElementById("f");
    var kSpan = document.getElementById("k");
    convertingKButton.addEventListener("click", function convertingClick() {
        kSpan.innerText = Math.round(convertToKelvin(kInput.value));
    });

    function convert(degrees) {
        var converting = ((Number(degrees) - 32) * 5) / 9;
        return converting;
    }
    function convertToKelvin(temps) {
        var temp = ((Number(temps) + 459.67) * 5) / 9;
        return temp;
    }
    var convertingButton = document.getElementById("CtoFbutton");
    var cInput = document.getElementById("celsius");
    var fSpan = document.getElementById("fahrenheit");
    convertingButton.addEventListener("click", function convertingClick() {
        fSpan.innerText = Math.round(convertF(cInput.value));
    });
    function convertF(degree) {
        var convertingF = (Number(degree) * 9) / 5 + 32;
        return convertingF;
    }
});
