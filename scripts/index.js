const navList = document.getElementById("js-nav");
const navBarToggle = document.getElementById("js-navbar-toggle");
const url = document.location.href.split("/").pop();
const allNavs = document.getElementsByClassName("nav-links");
const modalButton = document.getElementsByClassName("media-div")[0];
const hiddenList = document.getElementsByClassName("modal-div")[0];
const mediaIcon = document.getElementsByClassName("media-icon")[0];
var i = 0;
for (i = 0; i < allNavs.length; i++) {
  let spliced = allNavs[i].href.split("/").pop();
  if (spliced === url) {
    allNavs[i].className = "current";
  }
}
navBarToggle.addEventListener("click", event => {
  navList.classList.toggle("active");
});

modalButton.addEventListener("click", event => {
  console.log(hiddenList);
  if (hiddenList.style.display === "inline-block") {
    hiddenList.style.display = "none";
  } else {
    hiddenList.style.display = "inline-block";
  }
});

window.addEventListener("click", event => {
  console.log(event.target.value);
  if (event.target.value === 0) {
    hiddenList.style.display = "inline-block";
  } else if (event.target !== mediaIcon) {
    hiddenList.style.display = "none";
  }
});

closeList.addEventListener("click", event => {
  hiddenList.style.display = "none";
});

function reverseString(str) {
  return str === "" ? "" : reverseString(str.substr(1)) + str.charAt(0);
}

console.log("Welcome to my website!");
console.log("I'm glad you could join me!");
console.log(
  "If you need a developer let me know, I'm always interested in an opportunity."
);
