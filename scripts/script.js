$(document).ready(function () {
  var $footer = $("footer");
  $footer.css("visibility", "hidden");

  var $hero = $(".hero");
  var $description = $(".description");
  var $logo = $(".developer-logo");
  var $h1 = $(".hero h1");
  var $technologyIcons = $(".technology-icons");
  $hero.addClass("active");

  function updateScroll() {
    var scrollPosition = $(window).scrollTop();
    var heroHeight = $(".hero").outerHeight();

    if (scrollPosition > heroHeight / 2 + 100) {
      $footer.css("visibility", "visible");
    } else {
      $footer.css("visibility", "hidden");
    }

    var descriptionOffset =
      $description.offset().top - $(window).height() + 100;
    var hideDescriptionOffset = heroHeight / 2 + 130;

    if (
      scrollPosition > descriptionOffset &&
      scrollPosition < hideDescriptionOffset
    ) {
      fadeIn($description);
    } else {
      fadeOut($description);
    }

    var technologiesOffset =
      $technologyIcons.offset().top - $(window).height() + 100;

    if (scrollPosition > technologiesOffset) {
      $technologyIcons.addClass("active");
    } else {
      $technologyIcons.removeClass("active");
    }

    $(".hero").css("background-position-y", scrollPosition * 0.5 + "px");

    var scrollProgress =
      scrollPosition / ($(document).height() - $(window).height());
    var rotation = 360 * scrollProgress;
    $(".pen").css("transform", "rotate(" + rotation + "deg)");
    $(".pen1").css("transform", "rotate(" + -rotation + "deg)");

    if (scrollPosition > heroHeight / 7) {
      fadeOut($logo);
      fadeOut($h1);
    } else if (scrollPosition === 0) {
      fadeIn($logo);
      fadeIn($h1);
    }
  }

  function scrollHandler() {
    requestAnimationFrame(updateScroll);
  }

  $(window).scroll(scrollHandler);

  function fadeIn(element) {
    element.css({ opacity: 0, transition: "opacity 0.5s ease-in-out" });
    setTimeout(function () {
      element.css("opacity", 1);
    }, 0);
  }

  function fadeOut(element) {
    element.css({ opacity: 1, transition: "opacity 0.5s ease-in-out" });
    setTimeout(function () {
      element.css("opacity", 0);
    }, 0);
  }

  var $projectCards = $(".project-card");

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

  function redirectToGitHub() {
    var projectId = $(this).data("project-id");
    var githubURL = projectsData[projectId].githubLink;
    window.location.href = githubURL;
  }

  $projectCards.click(redirectToGitHub);
});
