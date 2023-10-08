window.addEventListener("scroll", function () {
  var header = document.querySelector(".header");
  var scrollPosition = window.scrollY;

  if (scrollPosition > 100) {
    // change the value as you prefer
    header.style.backgroundColor = "white"; // white color
  } else {
    header.style.backgroundColor = "transparent";
  }
});
