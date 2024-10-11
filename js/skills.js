
document.addEventListener("DOMContentLoaded", function(event) {
start()
  });
//-------------------------------------------------------------------------------------------------------//
function start() {
  const circles = document.querySelectorAll('.circle');
  circles.forEach(function(progress) {
    let degree = 0;
    const targetDegree = parseInt(progress.getAttribute('data-degree'));
    const color = progress.getAttribute('data-color');
    const number = progress.querySelector('.number');
    
    const interval = setInterval(function() {
      degree += 1;
      if (degree > targetDegree) {
        clearInterval(interval);
        return;
      }
      progress.style.background = `conic-gradient(${color} ${degree}%, #222 ${degree}%)`;
      number.textContent = `${degree}%`;
      number.style.color = color;
    }, 50);
  });
}
