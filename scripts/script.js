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

  function updateScroll() {
    var scrollPosition = $(window).scrollTop();
    var heroHeight = $(".hero").outerHeight();

    if (scrollPosition > heroHeight / 2 + 100) {
      $footer.css("visibility", "visible");
    } else {
      $footer.css("visibility", "hidden");
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
      "hero-description-titulo": "Sobre Mi",
      "hero-descripcion":
        "Estudiante de Desarrollo de Aplicaciones Multiplataforma con especialización en " +
        "ciberseguridad. <br><br>" +
        "Una sólida formación académica y certificaciones en diversas áreas tecnológicas. " +
        "Comprometido con el aprendizaje continuo y la adquisición de habilidades " +
        "prácticas en el desarrollo de software, ciberseguridad, administración de sistemas " +
        "y machine learning. <br><br>" +
        "Demostrada capacidad para diseñar, implementar y mantener aplicaciones seguras y eficientes.",
      "projects-titulo": "Proyectos",
      "projects-descripcion-1":
        "Una aplicación Java y Swing para la gestión eficiente de empleados. " +
        "Simplifica la administración de recursos humanos con una interfaz fácil de usar. " +
        "Incluye características esenciales para seguimiento, asignación de tareas y evaluación de desempeño.",
      "projects-descripcion-2":
        "App de catálogo de animes con .NET y WinForms. Explora tus animes favoritos " +
        "con interfaz atractiva y persistencia de datos en JSON para experiencia personalizada. Descubre nuevos animes eficientemente.",
      "projects-descripcion-3":
        "Entrenador de puntería web con temática japonesa. Perfecciona tu puntería " +
        "en un ambiente inspirado en la cultura japonesa. Desafía y mejora tus habilidades de apuntado con " +
        "una experiencia envolvente. ¡Domina tu puntería con este entrenador en línea único!",
      "technologies-titulo": "Tecnologías",
      "social-media-titulo": "Sígueme en las Redes Sociales",
      "contact-titulo": "Contacto",
      "contact-nombre": "Nombre",
      "contact-email": "Correo Electrónico",
      "contact-mensaje": "Mensaje",
      "contact-enviar": "Enviar",
      "navbar-inicio": "Inicio",
      "navbar-sobre-mi": "Sobre Mi",
      "navbar-proyectos": "Proyectos",
      "navbar-tecnologias": "Tecnologías",
      "navbar-contacto": "Contacto",
    },
    en: {
      "hero-titulo": "Nanashi",
      "hero-description-titulo": "About Me",
      "hero-descripcion":
        "Multiplatform Application Development student with a focus on cybersecurity. <br><br>" +
        "Solid academic background and certifications in various technological areas. " +
        "Committed to continuous learning and acquiring practical skills in software development, cybersecurity, system administration, and machine learning. <br><br>" +
        "Proven ability to design, implement, and maintain secure and efficient applications.",
      "projects-titulo": "Projects",
      "projects-descripcion-1":
        "A Java and Swing application for efficient employee management. " +
        "Simplifies human resources administration with a user-friendly interface. " +
        "Includes essential features for tracking, task assignment, and performance evaluation.",
      "projects-descripcion-2":
        "Anime catalog app with .NET and WinForms. Explore favorites with an attractive interface, " +
        "JSON data persistence for a personalized experience. Discover new anime efficiently.",
      "projects-descripcion-3":
        "Web-based target shooting trainer with a Japanese theme. Hone your aim in an " +
        "environment inspired by Japanese culture. Challenge and improve your targeting skills with an engaging " +
        "experience. Master your aim with this unique online trainer!",
      "technologies-titulo": "Technologies",
      "social-media-titulo": "Follow Me on Social Media",
      "contact-titulo": "Contact",
      "contact-nombre": "Name",
      "contact-email": "Email",
      "contact-mensaje": "Message",
      "contact-enviar": "Send",
      "navbar-inicio": "Home",
      "navbar-sobre-mi": "About Me",
      "navbar-proyectos": "Projects",
      "navbar-tecnologias": "Technologies",
      "navbar-contacto": "Contact",
    },
  };
  $("#btn-es").hide();

  function cambiarIdioma(idioma) {
    if (idioma === "es") {
      $("#btn-es").hide();
      $("#btn-en").show();
    } else if (idioma === "en") {
      $("#btn-es").show();
      $("#btn-en").hide();
    }
    // Obtén todos los elementos que tienen texto que cambiará
    var elementos = document.querySelectorAll(
      '[id^="hero-"], [id^="projects-"], [id^="technologies-"], [id^="social-media-"], [id^="contact-"], [id^="navbar-"]'
    );

    // Itera sobre los elementos y cambia su texto según el idioma seleccionado
    elementos.forEach(function (elemento) {
      var clave = elemento.id;
      if (textos[idioma] && textos[idioma][clave]) {
        elemento.innerHTML = textos[idioma][clave];
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

  $(document).ready(function () {
    // Selector de los enlaces de la barra de navegación
    $(".navbar li").on("click", function (e) {
      e.preventDefault();

      // Obtiene el atributo href del enlace clicado
      const target = $(this).find("a").attr("href");

      // Desplazamiento suave a la sección correspondiente
      $("html, body").animate(
        {
          scrollTop: $(target).offset().top - 70,
        },
        800
      );
    });
  });

  function noDrag(event) {
    event.preventDefault();
  }
  document.addEventListener("dragstart", noDrag, true);
});
