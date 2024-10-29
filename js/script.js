var circle=document.getElementById("Index-circle")
var navbar=document.querySelector(".fa-caret-left")
var nav_item=document.querySelector(".index-ul")
var video = document.getElementById("video")
var times=true
function hidemain(){
    if(times==true){
    circle.style.left="95%"
    navbar.style.left="96%"
    navbar.style.transition="0.5s"
    circle.style.transition="0.5s"
    nav_item.style.transition="0.5s"
    nav_item.style.left="110%"
    times=false
}
else{
    circle.style.left="85%"
    nav_item.style.left="88%"
    navbar.style.left="86%"
    times=true
}
}
function CloseNav(){
    circle.style.left="95%"
    navbar.style.left="95%"
    navbar.style.transition="0.5s"
    circle.style.transition="0.5s"
    nav_item.style.transition="0.5s"
    nav_item.style.left="110%"
}
var msg=document.getElementById("message")
function BtnMsg(){
    msg.style.marginLeft="70%"
    msg.style.transition="0.5s"
    setTimeout(back,5000)
}
function back(){
    msg.style.marginLeft="100%"
}
function videoFun(){
    if(times==true){
     video.style.right="850px"
    video.style.transition="0.5s"
    times=false
}
else{
    video.style.right="2000px"
    times=true
}
}

