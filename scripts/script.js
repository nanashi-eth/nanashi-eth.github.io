document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", function () {
    let offset = window.scrollY;
    document.querySelector(".hero").style.backgroundPositionY =
      offset * 0.7 + "px";
  });
});

document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", function () {
    let scrollProgress =
      window.scrollY / (document.body.scrollHeight - window.innerHeight);
    let rotation = 360 * scrollProgress;
    document.querySelector(".pen").style.transform = `rotate(${rotation}deg)`;
  });
});
