
var resultEl = document.querySelector("#result");
var lengthEl = document.querySelector("#length");
var uppercaseEl = document.querySelector("#uppercase");
var lowercaseEl = document.querySelector("#lowercase");
var numbersEl = document.querySelector("#numbers");
var symbolsEl = document.querySelector("#symbols");
var generateEl = document.querySelector("#generate");
var clipboard = document.querySelector("#clipboard");

function generate( length = (12) ){
    var uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var lowercase = 'abcdefghijklmnopqrstuvwxyz';
    var numbers = '0123456789';
    var symbols = '!"#$%&\'()*+,-./:;<=>?@^[\\]^_`{|}~';
    var all = uppercase + lowercase + numbers + symbols;
    var password = '';
    for (var index = 0; index < length; index++) {
        var character = Math.floor(Math.random() * all.length);
        password += all.substring(character, character + 1);
        
    }
    return password;
    
}

document.getElementById("generate").addEventListener("click", text);

function text() {
    document.getElementById("output").innerHTML = generate();
}



function copy() {
    var copyText = generate();
    document.execCommand("copy");
    alert("Copies the text: " + copyText);
  }

  document.getElementById("clip").addEventListener("click", copy);
