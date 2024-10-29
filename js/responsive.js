var body = document.querySelector(".body");
var circle=document.getElementById("Index-circle")
var navbar=document.querySelector(".fa-bars")
var nav_item=document.querySelector(".index-ul")
var times=true
function nav(){
    if(times==true){
    circle.style.display="block"
    nav_item.style.display="block"
    times=false
    
}
else{
    circle.style.display="none"
    nav_item.style.display="none"
    times=true
}
}



