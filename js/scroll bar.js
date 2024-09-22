let progress=document.getElementById("progress-ber");
let totalHeight=document.body.scrollHeight 
window.innerHeight;
window.onscroll=function(){
    let progressHeight=(window.pageYOffset / totalHeight)*100;
    progress.style.height=progressHeight+"%";
}
document.getElementById("con-left").onclick = function() {
    document.getElementById("scroll-con").scrollBy(-250, 0);
  }
  document.getElementById("con-right").onclick = function() {
    document.getElementById("scroll-con").scrollBy(250, 0);
  }
  document.getElementById("con-left-pro").onclick = function() {
    document.getElementById("scroll-con-pro").scrollBy(-960, 0);
  }
  document.getElementById("con-right-pro").onclick = function() {
    document.getElementById("scroll-con-pro").scrollBy(960, 0);
  }