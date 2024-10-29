var body = document.querySelector(".body");
var circle=document.getElementById("Index-circle")
// var navbar=document.querySelector(".navbar")
var nav_item=document.querySelector(".index-ul")
var times=true
function nav(){
if(375 >= body.offsetWidth){
    console.log("work")
    console.log( body.offsetWidth )
    if(times==true){
    circle.style.display="block"
    nav_item.style.display="block"
    times=false
    
}
else{
    circle.style.left="30%"
    nav_item.style.left="30%"
    navbar.style.left="60%"
}
}
}


