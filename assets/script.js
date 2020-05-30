
var start = document.getElementById("startBtn")
var question = document.getElementById("question")
var info = document.getElementById("info")
var a1 = document.getElementById("testBtn1")     
var a2 = document.getElementById("testBtn2")     
var a3 = document.getElementById("testBtn3")     
var a4 = document.getElementById("testBtn4")     
a1.style.visibility="hidden"
a2.style.visibility="hidden"
a3.style.visibility="hidden"
a4.style.visibility="hidden"


start.addEventListener("click",function(){
    
  info.style.visibility="hidden"
  a1.style.visibility="visible"
  a2.style.visibility="visible"
  a3.style.visibility="visible"
  a4.style.visibility="visible"
  question.innerHTML="Commonly used data types DO NOT include :"
  a1.innerText="1. strings"
  a2.innerText="2. booleans"
  a3.innerText="3. alerts"
  a4.innerText="4. numbers"
 
});


