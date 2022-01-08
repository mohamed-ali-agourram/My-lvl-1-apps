//HTML elements
const border = document.querySelector(".border");
const userInput = document.getElementById("input");
const theList = document.querySelector(".list");
var style = document.createElement('style');
var dateOfDay = document.getElementById('Daydate')
//userTask
//date of the day
let today = new Date().toLocaleDateString("en-US").split(/:| /);
dateOfDay.innerHTML =  today;
//output the user tasks
document.getElementById("submit").addEventListener("submit" , ()=>{
   ouputTasks()
   userInput.value = null;
});
 
function ouputTasks(){
   let deleteButton = document.createElement("button");
   deleteButton.className = "fas fa-trash";
   let userTask = document.createTextNode(userInput.value)
   var li = document.createElement("li");
 var checkbox = document.createElement("input")
      checkbox.type  = "checkbox";
      checkbox.id = "checkbox";
      li.appendChild(checkbox);
      li.appendChild(userTask);
      li.appendChild(deleteButton)
      theList.appendChild(li)
     deleteButton.onclick = function() {
       li.remove()
     }
}
 //


