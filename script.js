function convertTemperature() {
    const tempInput = document.getElementById("temperature").value;
const unit = document.getElementById("unit").value ;
const resultDiv  = document. getElementById("result");

if (tempInput === ""){
    resultDiv.textContent = "please enter a temperature."
    return;
}

const temperature = parseFloat(tempInput);
let converted, output;

if (unit === "celsius") {
    converted = (temperature * 9 / 5) + 32;
    output = `${temperature} &deg c = $ {converted.tofixed(2)} &deg f`; 
} else {
        converted = (temperature - 32) * 5 / 9;
        output = `${temperature} &deg f = ${converted.toFixed(2)}&deg c`;
    }
    resultDiv.textContent = output;
}


















