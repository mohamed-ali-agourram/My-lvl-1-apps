//HTML elemnts
const myDiv = document.querySelector(".div");
const btn = document.querySelector(".btn");
const userName = document.querySelector(".username");
const date = document.querySelector(".date");
const amount = document.querySelector(".amount");
const table = document.querySelector(".table");
//delete function

//Add expense btn
btn.addEventListener("click" , tableMaker)
function tableMaker(){
    var deleteButton = document.createElement("button");
   deleteButton.className = "fas fa-trash";
   deleteButton.setAttribute("id" , "btnID")
   deleteButton.onclick = function() {
    TR.remove()}
    var TR = document.createElement("tr");
    for(i = 0 ; i < 3 ; i++)
    {var rows = document.createElement("td");
    table.appendChild(TR)
     TR.appendChild(rows);
    if(i == 0){
        var name = document.createTextNode(userName.value);
        rows.appendChild(name);
    }
   else if(i == 1){
       var thedate = document.createTextNode(date.value);
       rows.appendChild(thedate);
   }
   else{
       var theamount = document.createTextNode(amount.value + "DHS");
       rows.appendChild(theamount);
       rows.appendChild(deleteButton)
   }
}
}


