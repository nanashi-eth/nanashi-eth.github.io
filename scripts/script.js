document.addEventListener("DOMContentLoaded", function () {
  var footer = document.querySelector("footer");
  footer.style.visibility = "hidden";

  window.addEventListener("scroll", function () {
    var scrollPosition = window.scrollY;
    var heroHeight = document.querySelector(".hero").offsetHeight;

    if (scrollPosition > heroHeight / 2) {
      document.querySelector(".hero").classList.add("active");
      footer.style.visibility = "visible";
    } else {
      document.querySelector(".hero").classList.remove("active");
      footer.style.visibility = "hidden";
    }
  });

  window.addEventListener("scroll", function () {
    var offset = window.scrollY;
    document.querySelector(".hero").style.backgroundPositionY =
      offset * 0.7 + "px";
  });

  window.addEventListener("scroll", function () {
    var scrollProgress =
      window.scrollY / (document.body.scrollHeight - window.innerHeight);
    var rotation = 360 * scrollProgress;
    document.querySelector(".pen").style.transform = `rotate(${rotation}deg)`;
  });
});
