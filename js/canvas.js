var canvas = document.getElementById('game-canvas');
var ctx = canvas.getContext('2d');
canvas.width = window.innerWidth
canvas.height = window.innerHeight

function animate() {
  requestAnimationFrame(animate)
  ctx.fillStyle = "rgba(255, 255, 255, 0.1)"
  ctx.fillRect(0, 0, canvas.width, canvas.height)
}

animate()