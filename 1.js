const title = document.querySelector(".title");
const title2 = document.querySelector(".title2");
const leftCloud = document.querySelector(".left-cloud");
const rightCloud = document.querySelector(".right-cloud");
const water = document.querySelector(".water");
const land = document.querySelector(".land");
const morningCloud = document.querySelector(".morning-cloud");

const morningLand = document.querySelector(".morning-land");
const morningSun = document.querySelector(".morning-sun");

document.addEventListener("scroll", function () {
  let value = window.scrollY;
  title.style.marginTop = value + "px";
  title2.style.marginTop = -value + "px";
  leftCloud.style.marginLeft = -value + "px";
  rightCloud.style.marginLeft = value + "px";
  water.style.marginBottom = -value + "px";
  land.style.marginBottom = value * -1.5 + "px";
  // morningCloud.style.marginTop = -value + "px";
  morningLand.style.marginTop = -value * 0.28 + "px";
  morningSun.style.marginTop = -value * 0.35 + "px";
});
