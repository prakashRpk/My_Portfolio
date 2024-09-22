var circle=document.getElementById("Index-circle")
var navbar=document.querySelector(".navbar")
var nav_item=document.querySelector(".index-ul")
var times=true
function hide(){
    if(times==true){
    circle.style.left="95%"
    navbar.style.left="95%"
    navbar.style.transition="0.5s"
    circle.style.transition="0.5s"
    nav_item.style.transition="0.5s"
    nav_item.style.left="110%"
    times=false
}
else{
    circle.style.left="85%"
    nav_item.style.left="88%"
    navbar.style.left="85%"
    times=true
}
}
