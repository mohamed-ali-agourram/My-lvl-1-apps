//HTML elements
var visisble = "block"
var hidden = "none"
var A = document.querySelector(".A");
A.addEventListener("click" , ()=>{
    flipA.style.display = visisble;
   A.style.display = hidden;
})
var flipA = document.querySelector(".flipA");
flipA.addEventListener("click" , ()=>{
    A.style.display = "block";
    flipA.style.display = "none";
})
var B = document.querySelector(".B");
B.addEventListener("click" , ()=>{
    flipB.style.display = "block";
   B.style.display = "none";
})
var flipB = document.querySelector(".flipB");
flipB.addEventListener("click" , ()=>{
   B.style.display = "block";
   flipB.style.display = "none";
})
var C = document.querySelector(".C");
C.addEventListener("click" , ()=>{
    flipC.style.display = "block";
   C.style.display = "none";
})
var flipC = document.querySelector(".flipC");
flipC.addEventListener("click" , ()=>{
    C.style.display = "block";
   flipC.style.display = "none";
})
var D = document.querySelector(".D");
D.addEventListener("click" , ()=>{
   flipD.style.display = "block";
   D.style.display = "none";
})
var flipD = document.querySelector(".flipD");
flipD.addEventListener("click" , ()=>{
    D.style.display = "block";
   flipD.style.display = "none";
})
var E = document.querySelector(".E");
E.addEventListener("click" , ()=>{
    flipE.style.display = "block";
   E.style.display = "none";
})
var flipE = document.querySelector(".flipE");
flipE.addEventListener("click" , ()=>{
    E.style.display = "block";
   flipE.style.display = "none";
})
var F = document.querySelector(".F");
F.addEventListener("click" , ()=>{
    flipF.style.display = "block";
   F.style.display = "none";
})
var flipF = document.querySelector(".flipF");
flipF.addEventListener("click" , ()=>{
    flipF.style.display = "none";
   F.style.display = "block";
})
var G = document.querySelector(".G");
G.addEventListener("click" , ()=>{
    flipG.style.display = "block";
   G.style.display = "none";
})
var flipG = document.querySelector(".flipG");
flipG.addEventListener("click" , ()=>{
    G.style.display = "block";
   flipG.style.display = "none";
})
var H = document.querySelector(".H");
H.addEventListener("click" , ()=>{
    flipH.style.display = "block";
   H.style.display = "none";
})
var flipH = document.querySelector(".flipH");
flipH.addEventListener("click" , ()=>{
    H.style.display = "block";
   flipH.style.display = "none";
})
var score = 0;
//check the math
var elemA = document.querySelector(".container2");
var divText = document.querySelector(".result");
var text = divText.textContent;
elemA.addEventListener("click" ,()=>{
 if(A.style.display == "block" && B.style.display == "block"){
      score += 1
   A.remove();
   flipA.remove()
   B.remove()
   flipB.remove()}
 if(C.style.display == "block" && F.style.display == "block"){
      score += 1
   C.remove();
   flipC.remove()
   F.remove()
   flipF.remove()}
    if(D.style.display == "block" && H.style.display == "block"){
      score += 1
   D.remove();
   flipD.remove()
   H.remove()
   flipH.remove()}
   
    if(E.style.display == "block" && G.style.display == "block"){
      score += 1
   E.remove();
   flipE.remove()
   G.remove()
   flipG.remove()}
   console.log(score)
})




