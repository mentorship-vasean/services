var header = Array.from(document.querySelectorAll("header"));
var mobileNavButton = document.querySelector(
  "div.mobile-header__icon-wrapper i.fa-solid.fa-bars-staggered"
);
var mobileHeaderNav = document.querySelector(
  "nav.mobile-header__menu-items__wrapper"
);

var video = document.querySelector("video");
var playButton = document.querySelector("i.fa-solid.fa-play");
var pauseButton = document.querySelector("i.fa-solid.fa-pause");


window.addEventListener("scroll", function (e) {
  let currentScroll = window.pageYOffset;
  if (currentScroll >= 46) {
    header.forEach((element) => {
      element.style.backgroundColor = "rgba(37, 43, 66, .9)";
    });
  }
  // console.log("this is our event target", window.pageYOffset, currentScroll);
  // console.log("this is main.js !!!!", header);
});

mobileNavButton.addEventListener("click", (e) => {
  mobileHeaderNav.classList.toggle("flexed");
  console.log("display", mobileHeaderNav.classList);
});

playButton.addEventListener("click", (e) => {
  e.target.style.display = "none";
  pauseButton.style.display = "flex";
  pauseButton.style.backgroundColor = "transparent";
  video.play();
  console.log("play target", e.target);
});
pauseButton.addEventListener("click", (e) => {
  e.target.style.display = "none";
  playButton.style.display = "flex";
  video.load();
  console.log("pause target", e.target);
});

console.log("button", playButton);
console.log("video", video);
