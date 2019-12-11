
var resultEl = document.querySelector("#result");
var lengthEl = document.querySelector("#length");
var uppercaseEl = document.querySelector("#uppercase");
var lowercaseEl = document.querySelector("#lowercase");
var numbersEl = document.querySelector("#numbers");
var symbolsEl = document.querySelector("#symbols");
var generateEl = document.querySelector("#generate");
var clipboard = document.querySelector("#clipboard");




// function checkSymbols() {
   
//     if(document.getElementById("symbols").checked == true){
//         console.log("is working")
//     }
    
// };

function checkSymbols () {
    //var checkbox = document.getElementById("symbols");
    if(document.getElementById("symbols").checked){
        return true
    }
}
function checkNumbers(){
    if(document.getElementById("numbers").checked){
        return true
    }   
     
};
function checkLowercase(){
    if(document.getElementById("lowercase").checked){
        return true
    }   
};
function checkUppercase(){
    if(document.getElementById("uppercase").checked){
        return true
    }   
}






function generate(){
    var length = lengthEl.value
   
    var uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var lowercase = 'abcdefghijklmnopqrstuvwxyz';
    var numbers = '0123456789';
    var symbols = '!"#$%&\'()*+,-./:;<=>?@^[\\]^_`{|}~';
    var itemsToLoop = ""
     //var all = uppercase + lowercase + numbers + symbols;

    if(checkSymbols()){
        itemsToLoop += symbols
    }

    if(checkNumbers()){
        itemsToLoop += numbers
    }

    if(checkLowercase()){
        itemsToLoop += lowercase
    }
   
    if(checkUppercase()){
        itemsToLoop += uppercase
    }
   
   




    var password = '';

    for (var index = 0; index < length; index++) {
        var character = Math.floor(Math.random() * itemsToLoop.length);
        password += itemsToLoop.substring(character, character + 1);
    }

    return password;

    

    
}

document.getElementById("generate").addEventListener("click", text);

function text() {
    document.getElementById("output").innerHTML = generate();
}


function copy() {
    var copyText = document.getElementById("#output");
    copyText.select();
    document.execCommand("copy");
    alert("Copied Text " + resultEl)
  }

  document.querySelector("#clip").addEventListener("click", copy);

  

  
