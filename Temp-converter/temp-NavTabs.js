document.addEventListener("DOMContentLoaded", function main() {
    // Fahrenheit Converter
    var convertingFahrenheitButton = document.getElementById("FtoCbutton");
    var fInput = document.getElementById("f");
    var cSpan = document.getElementById("c");
    convertingFahrenheitButton.addEventListener(
        "click",
        function convertClick() {
            cSpan.innerText = Math.round(convert(fInput.value));
        }
    );
    var convertingkelButton = document.getElementById("FtoCbutton");
    var fahrenheitInput = document.getElementById("f");
    var fahrenheitSpan = document.getElementById("k");
    convertingkelButton.addEventListener("click", function convertingClick() {
        fahrenheitSpan.innerText = Math.round(
            convertToKelvin(fahrenheitInput.value)
        );
    });

    function convert(degrees) {
        var converting = ((Number(degrees) - 32) * 5) / 9;
        return converting;
    }
    function convertToKelvin(temps) {
        var temp = ((Number(temps) + 459.67) * 5) / 9;
        return temp;
    }
    // Celsius to Fahrenheit
    var convertingCelsiusButton = document.getElementById("CtoFbutton");
    var cInput = document.getElementById("celsius");
    var FSpan = document.getElementById("fahrenheit");
    convertingCelsiusButton.addEventListener(
        "click",
        function ConvertingClick() {
            FSpan.innerText = Math.round(convertF(cInput.value));
        }
    );
    var convertingkButton = document.getElementById("CtoFbutton");
    var CInput = document.getElementById("celsius");
    var KelvinSpan = document.getElementById("kelvin");
    convertingkButton.addEventListener("click", function ConvertClick() {
        KelvinSpan.innerText = Math.round(convertK(CInput.value));
    });
    function convertF(degree) {
        var convertingF = Number(degree) * (9 / 5) + 32;
        return convertingF;
    }
    function convertK(d) {
        var converting = Number(d) + 273.15;
        return converting;
    }
    // kelvin converter
    var convertingKelButton = document.getElementById("KtoFbutton");
    var KInput = document.getElementById("KtoF");
    var fSpan = document.getElementById("tempF");
    convertingKelButton.addEventListener("click", function convertingClick() {
        fSpan.innerText = Math.round(convertingK(KInput.value));
    });

    var convertingKFButton = document.getElementById("KtoFbutton");
    var KelvinInput = document.getElementById("KtoF");
    var CelSpan = document.getElementById("tempC");
    convertingKFButton.addEventListener("click", function convertingKCClick() {
        CelSpan.innerText = Math.round(convertingK(KelvinInput.value));
    });

    var convertingKCButton = document.getElementById("KtoFbutton");
    var kelvinInput = document.getElementById("KtoF");
    var celSpan = document.getElementById("tempC");
    convertingKCButton.addEventListener("click", function convertingKCClick() {
        celSpan.innerText = Math.round(convertingKelToCel(kelvinInput.value));
    });

    function convertingK(k) {
        var convertToK = Number(k) * (9 / 5) - 459.67;
        return convertToK;
    }

    function convertingKelToCel(kel) {
        var convertToC = Number(kel) - 273.15;
        return convertToC;
    }
});
