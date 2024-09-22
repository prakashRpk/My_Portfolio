var AddValue=document.getElementById("Address")
var mapValue=document.getElementById("map")
var closepop=document.getElementById("Close")

function Address(){
    mapValue.style.left="10%"
    mapValue.style.transition="0.5s"
    closepop.style.transition="0.5s"
    closepop.style.left="80%"
}
function Close(){
    mapValue.style.left="-90%"
    mapValue.style.transition="0.5s"
    closepop.style.transition="0.5s"
    closepop.style.left="-90%"
}