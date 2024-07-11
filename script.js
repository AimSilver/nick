const bullet = document.querySelector(".bullet");
const target = document.querySelector(".target");
const shoot = document.querySelector(".fire");
const reload = document.querySelector(".reload");
const collison = document.querySelector(".collison");
const reset = document.querySelector(".reset");
const scope = document.querySelector(".scope");
let detectCollison;

//  events
shoot.addEventListener("click", () => {
  shootBullet();
  startCollisionDetection(); // Start collision detection when "shoot" is clicked
});
reload.addEventListener("click", reloadGun);

reset.addEventListener("click", playAgain);
scope.addEventListener("click", zoomIn);

// Functions
function shootBullet() {
  bullet.classList.add("shoot");
}

function reloadGun() {
  bullet.classList.remove("shoot");
}
function playAgain() {
  collison.style.visibility = "hidden";

  clearInterval(detectCollison);
  target.classList.remove("collided");
  target.classList.add("bouncing");
}

function zoomIn() {
  target.classList.remove("bouncing");
  target.style.transform = "scale(5)";
}

// Collision detection
function checkCollision() {
  let bX = window.getComputedStyle(bullet, null).getPropertyValue("left");
  let bY = window.getComputedStyle(bullet, null).getPropertyValue("top");
  let tX = window.getComputedStyle(target, null).getPropertyValue("left");
  let tY = window.getComputedStyle(target, null).getPropertyValue("top");
  let intbX = parseInt(bX);
  let intbY = parseInt(bY);
  let inttX = parseInt(tX);
  let inttY = parseInt(tY);

  let offsetX = Math.abs(intbX - inttX);
  let offsetY = Math.abs(intbY - inttY);
  console.log(offsetX);
  console.log(offsetY);

  if (offsetX < 10 && offsetY < 10) {
    collison.style.visibility = "visible";
    bullet.classList.remove("shoot");
    target.classList.remove("bouncing");
    target.classList.add("collided");
    clearInterval(detectCollison); // Stop the interval
  }
}

function startCollisionDetection() {
  detectCollison = setInterval(checkCollision, 100);
}

// Initially, the collision detection interval is paused until "shoot" is clicked
