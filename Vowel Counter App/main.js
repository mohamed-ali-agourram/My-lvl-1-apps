//HTML elements
var input = document.querySelector(".input");
var modal = document.querySelector(".modal");
var newP = document.querySelector(".newP");
var theSpan = document.querySelector(".X")
//vowel
var vowels = 0;
//check button
function check(){
    userInput = input.value;
    var xInput = userInput.split('');
    xInput.forEach(x => {
        if(x.includes("a") || x.includes("e") || x.includes("i") || x.includes("o") || x.includes("u") || x.includes("A") || x.includes("E") || x.includes("I") || x.includes("O") || x.includes("U")){
            vowels += 1;
        }
    });
   newP.textContent = vowels +" vowel on your text";
   input.value = "";
}
function refresh(){
    vowels = 0;
    newP.textContent = vowels + " vowel on your text";;
}
