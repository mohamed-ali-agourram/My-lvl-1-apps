//HTML elements
const input = document.querySelector(".input");
const myDiv = document.querySelector(".myDiv");
const  modal = document.querySelector(".modal");
const newP = document.querySelector(".newP")
const X = document.querySelector(".X")
//onclick function
function submit(){
  var theP = document.createElement("p");
  theP.className = "theP";
  myDiv.appendChild(theP)
  var btn2 = document.createElement("button");
  btn2.className = "fas fa-trash";
  btn2.setAttribute("id" , "btn2")
  btn2.onclick = function(){
      theP.remove();
  }
  theP.appendChild(btn2);
  var userText = document.createTextNode(input.value);
  if(userText.length >= 100){
      var btn3 = document.createElement("button");
      btn3.setAttribute("class" , "btn3");
      btn3.textContent = "Show More";
      btn3.onclick = function(){
          modal.style.display = "block";
          var theSpan = document.createElement("span");
          theSpan.setAttribute("class" , "X");
          var Xicon = document.createElement("i");
          Xicon.setAttribute("class" , "fas fa-times-circle");
          theSpan.appendChild(Xicon);
          theSpan.addEventListener("click" , ()=>{
            modal.style.display = "none";})
          var moreText = userText.cloneNode()
          modal.textContent= ""
          modal.appendChild(theSpan)
          modal.appendChild(moreText)
      }
    theP.appendChild(btn3)
  }
  theP.appendChild(userText);
  input.value = '';
} ;



