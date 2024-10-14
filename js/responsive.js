var body = document.querySelector(".body");
var circle=document.getElementById("Index-circle")
var navbar=document.querySelector(".navbar")
var nav_item=document.querySelector(".index-ul")
var times=true
if(375 >= body.offsetWidth){
    console.log("work")
    console.log( body.offsetWidth )
    if(times==true){
    circle.style.left="55%"
    navbar.style.left="70%"
    navbar.style.transition="0.5s"
    circle.style.transition="0.5s"
    nav_item.style.transition="0.5s"
    nav_item.style.left="60%"
    times=false
    
}
else{
    circle.style.left="30%"
    nav_item.style.left="30%"
    navbar.style.left="60%"
}
}


