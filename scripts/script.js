document.addEventListener("DOMContentLoaded", function () {
  var footer = document.querySelector("footer");
  footer.style.visibility = "hidden";

  var hero = document.querySelector(".hero");
  var description = document.querySelector(".description");
  var heroContent = document.querySelector(".hero-content");
  var logo = document.querySelector(".developer-logo");
  var h1 = document.querySelector(".hero h1");
  var technologyIcons = document.querySelector(".technology-icons");
  var h2Title = document.querySelector("#technologies h2");
  hero.classList.add("active");



  function updateScroll() {
    var scrollPosition = window.scrollY;
    var heroHeight = document.querySelector(".hero").offsetHeight;

    if (scrollPosition > heroHeight / 2) {
      footer.style.visibility = "visible";
    } else {
      footer.style.visibility = "hidden";
    }

    var descriptionOffset = description.offsetTop - window.innerHeight + 100;
    var hideDescriptionOffset = description.offsetTop + description.clientHeight ;

    if (scrollPosition > descriptionOffset && scrollPosition < hideDescriptionOffset) {
      fadeIn(description);
      fadeIn(description);
    } else {
      fadeOut(description);
      fadeOut(description);
    }

    var scrollPosition = window.scrollY;
    var technologiesOffset = technologyIcons.offsetTop - window.innerHeight + 100;

    if (scrollPosition > technologiesOffset) {
      technologyIcons.classList.add("active");
    } else {
    technologyIcons.classList.remove("active");
  }

    // Parallax effect
    document.querySelector(".hero").style.backgroundPositionY =
      scrollPosition * 0.5 + "px";

    // Rotation effect
    var scrollProgress =
      scrollPosition / (document.body.scrollHeight - window.innerHeight);
    var rotation = 360 * scrollProgress;
    document.querySelector(".pen").style.transform = `rotate(${rotation}deg)`;
    document.querySelector(".pen1").style.transform = `rotate(${-rotation}deg)`;

    // Animación de entrada y salida para el logo y h1
    if (scrollPosition > heroHeight / 7) {
      fadeOut(logo);
      fadeOut(h1);
    } else if (scrollPosition == 0){
      fadeIn(logo);
      fadeIn(h1);
    }
  }

  function scrollHandler() {
    requestAnimationFrame(updateScroll);
  }

  window.addEventListener("scroll", scrollHandler);

  // Función para animación de entrada
  function fadeIn(element) {
    element.style.opacity = 0;
    element.style.transition = "opacity 0.5s ease-in-out";
    setTimeout(() => {
      element.style.opacity = 1;
    }, 0);
  }

  // Función para animación de salida
  function fadeOut(element) {
    element.style.opacity = 1;
    element.style.transition = "opacity 0.5s ease-in-out";
    setTimeout(() => {
      element.style.opacity = 0;
    }, 0);
  }

  var projectCards = document.querySelectorAll(".project-card");

  // Objeto que almacena información sobre cada proyecto, incluyendo los enlaces a los repositorios
  var projectsData = {
    1: {
      name: "Employee App",
      description:
        "Descripción corta del proyecto 1. Puedes proporcionar detalles sobre las tecnologías utilizadas y los objetivos del proyecto.",
      githubLink: "https://github.com/nanashi-eth/employeeAppV2.0",
    },
    2: {
      name: "Nombre del Proyecto 2",
      description:
        "Descripción corta del proyecto 2. Puedes proporcionar detalles sobre las tecnologías utilizadas y los objetivos del proyecto.",
      githubLink: "https://github.com/nanashi-eth/WinformApp",
    },
    // Agrega más información según sea necesario
  };

  function redirectToGitHub(event) {
    var projectId = event.currentTarget.getAttribute("data-project-id");
    var githubURL = projectsData[projectId].githubLink;
    window.location.href = githubURL;
  }

  projectCards.forEach(function (card) {
    card.addEventListener("click", redirectToGitHub);
  });

});
