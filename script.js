let Temperature = function (degree) {
    this.celsius = degree;
    this.toFahrenheit = function () {
        return (this.celsius*9/5)+32
    }
    this.toKelvin = function () {
        return this.celsius + 273.15
    }
}
function convert() {
    var celsius = Number(document.getElementById('celsius').value);
    let temperature = new Temperature(celsius);
    document.getElementById('fahrenheit').value = temperature.toFahrenheit();
    document.getElementById('kelvin').value = temperature.toKelvin()
}