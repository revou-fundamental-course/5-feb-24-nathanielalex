    var fahrenheitInput = 1;
    
    function calculate() {
        var input = document.getElementById("input-form").value;    
        // document.forms["namaForm"]["inputYangMana"].[apaYangDiambil]
        if(fahrenheitInput == 1) {
            var result = input*1.8+32;
            var formula = input + "°C * (9/5) + 32 = " + result + "°F"
            document.getElementById("output-form").value  = result;
            document.getElementById("rumus-output").value  = formula;
        } else if (fahrenheitInput == 0){
            var result = (input-32)/1.8;
            var formula = input + "°F - 32 * (5/9) = " + result + "°C";
            document.getElementById("output-form").value  = result;
            document.getElementById("rumus-output").value  = formula;
        }
        
    }

function reverse() {
    if(fahrenheitInput == 0) {
        document.getElementById("rumus-akhir1").innerHTML   = "x 9/5) + 32";
        document.getElementById("rumus-akhir2").innerHTML   = "x 1.8) + 32";
        var celcius = document.getElementsByClassName("celcius");
        for (var i = 0; i < celcius.length; i++) {
            celcius[i].innerHTML = "Celcius (&deg;C)";
        }
        var fahrenheit = document.getElementsByClassName("fahrenheit");
        for (var i = 0; i < fahrenheit.length; i++) {
            fahrenheit[i].innerHTML = "Fahrenheit (&deg;F)";
        }
        var celciusSymbol = document.getElementsByClassName("celciusSymbol");
        for (var i = 0; i < celciusSymbol.length; i++) {
            celciusSymbol[i].innerHTML = "(&deg;C)";
        }
        var fahrenheitSymbol = document.getElementsByClassName("fahrenheitSymbol");
        for (var i = 0; i < fahrenheitSymbol.length; i++) {
            fahrenheitSymbol[i].innerHTML = "(&deg;F)";
        }
        document.getElementById("rumus-text").innerHTML  = "kali 9/5 tambah 32";
        fahrenheitInput = 1;
    } else if (fahrenheitInput == 1){
        document.getElementById("rumus-akhir1").innerHTML   = "- 32) x 5/9";
        document.getElementById("rumus-akhir2").innerHTML   = "- 32) x 0.56";
        var celcius = document.getElementsByClassName("celcius");
        for (var i = 0; i < celcius.length; i++) {
            celcius[i].innerHTML = "Fahrenheit (&deg;F)";
        }
        var fahrenheit = document.getElementsByClassName("fahrenheit");
        for (var i = 0; i < fahrenheit.length; i++) {
            fahrenheit[i].innerHTML = "Celcius (&deg;C)";
        }
        var celciusSymbol = document.getElementsByClassName("celciusSymbol");
        for (var i = 0; i < celciusSymbol.length; i++) {
            celciusSymbol[i].innerHTML = "(&deg;F)";
        }
        var fahrenheitSymbol = document.getElementsByClassName("fahrenheitSymbol");
        for (var i = 0; i < fahrenheitSymbol.length; i++) {
            fahrenheitSymbol[i].innerHTML = "(&deg;C)";
        }
        document.getElementById("rumus-text").innerHTML  = "kurang 32 lalu kali 5/9";
        fahrenheitInput = 0;
    }
    reset();
    
}

function reset() {
    document.getElementById("input-form").value = "";    
    document.getElementById("output-form").value  = "";
    document.getElementById("rumus-output").value  = "";

}