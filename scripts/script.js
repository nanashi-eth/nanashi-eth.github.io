$(document).ready(function () {
  // Selecciona el elemento hero-content
  const heroContent = $(".hero-content");

  // Configura la animación con GSAP
  gsap.from(heroContent, {
    y: -1000, // Mueve el elemento hacia arriba desde una posición inicial
    ease: "elastic", // Utiliza una función elástica para simular un rebote
    duration: 2, // Duración de la animación
    onComplete: function () {
      // Función que se ejecuta cuando la animación está completa
      gsap.to(heroContent, {
        y: 0, // Hace que el elemento se quede en su posición final
        ease: "elastic.out(1, 0.3)", // Utiliza una función elástica para simular un choque elástico
        duration: 1.5,
      });
    },
  });

  var $footer = $("footer");
  $footer.css("visibility", "hidden");

  var $description = $(".description");

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

    $(".hero").css("background-position-y", scrollPosition * 0.5 + "px");

    var scrollProgress =
      scrollPosition / ($(document).height() - $(window).height());
    var rotation = 360 * scrollProgress;
    $(".pen").css("transform", "rotate(" + rotation + "deg)");
    $(".pen1").css("transform", "rotate(" + -rotation + "deg)");
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
      name: "Anime Catalog",
      description:
        "Descripción corta del proyecto 2. Puedes proporcionar detalles sobre las tecnologías utilizadas y los objetivos del proyecto.",
      githubLink: "https://github.com/nanashi-eth/WinformApp",
    },
    3: {
      name: "Sakura Soundblade Saga",
      description:
        "Descripción corta del proyecto 2. Puedes proporcionar detalles sobre las tecnologías utilizadas y los objetivos del proyecto.",
      githubLink: "https://sakura-soundblade-saga.pages.dev/",
    },
    // Agrega más información según sea necesario
  };

  function redirectToGitHub() {
    var projectId = $(this).data("project-id");
    var githubURL = projectsData[projectId].githubLink;
    window.location.href = githubURL;
  }

  $projectCards.click(redirectToGitHub);

  // $(window).mousedown(function (e) {
  //   $(".click_pop").remove();
  //   $("body").append(
  //     '<span class="click_pop" style="left:' +
  //       e.pageX +
  //       "px;top:" +
  //       e.pageY +
  //       'px;"><span/><span/><span/><span/></span>'
  //   );
  // });
  // Manejadores de clic para cambiar idioma
  $("#btn-es").click(function () {
    cambiarIdioma("es");
  });

  $("#btn-en").click(function () {
    cambiarIdioma("en");
  });

  // Textos en diferentes idiomas
  const textos = {
    es: {
      "hero-titulo": "Nanashi",
      "hero-descripcion":
        "Estudiante de Desarrollo de Aplicaciones Multiplataforma con especialización en ciberseguridad...",
      "projects-titulo": "Proyectos",
      "projects-descripcion-1":
        "Una aplicación Java y Swing para la gestión eficiente de empleados...",
      "projects-descripcion-2":
        "Una aplicación de catálogo de animes con .NET y WinForms...",
      "projects-descripcion-3":
        "Un entrenador de puntería web con temática japonesa...",
      "technologies-titulo": "Tecnologías",
      "social-media-titulo": "Sígueme en las Redes Sociales",
      "contact-titulo": "Contacto",
      "contact-nombre": "Nombre",
      "contact-email": "Correo Electrónico",
      "contact-mensaje": "Mensaje",
      "contact-enviar": "Enviar",
    },
    en: {
      "hero-titulo": "Nanashi",
      "hero-descripcion":
        "Student of Multiplatform Application Development with a specialization in cybersecurity...",
      "projects-titulo": "Projects",
      "projects-descripcion-1":
        "A Java and Swing application for efficient employee management...",
      "projects-descripcion-2":
        "An anime catalog application with .NET and WinForms...",
      "projects-descripcion-3":
        "A web-based target shooting trainer with a Japanese theme...",
      "technologies-titulo": "Technologies",
      "social-media-titulo": "Follow Me on Social Media",
      "contact-titulo": "Contact",
      "contact-nombre": "Name",
      "contact-email": "Email",
      "contact-mensaje": "Message",
      "contact-enviar": "Send",
    },
  };

  function cambiarIdioma(idioma) {
    // Obtén todos los elementos que tienen texto que cambiará
    var elementos = document.querySelectorAll(
      '[id^="hero-"], [id^="projects-"], [id^="technologies-"], [id^="social-media-"], [id^="contact-"]'
    );

    // Itera sobre los elementos y cambia su texto según el idioma seleccionado
    elementos.forEach(function (elemento) {
      var clave = elemento.id;
      if (textos[idioma] && textos[idioma][clave]) {
        elemento.innerText = textos[idioma][clave];
        if (elemento.tagName === "INPUT" || elemento.tagName === "TEXTAREA") {
          elemento.placeholder = textos[idioma][clave];
          elemento.innerText = "";
        }
        if (clave === "contact-enviar") {
          elemento.value = textos[idioma][clave];
        }
      }
    });
  }
});
