document.addEventListener("DOMContentLoaded", function () {
  const checkbox = document.querySelector(".antorcha input");
  const body = document.body;
  const musicaBoton = document.getElementById("musica-boton");
  const efectoCumple = document.getElementById("efecto-cumple");
  const musicaContainer = document.getElementById("musica-container");
  const nostalgicBoton = document.getElementById("nostalgic-boton");

  const initial = document.getElementById('mensaje-inicial');
  const message = document.getElementById('birthdayMessage');
  const fiestaBoton = document.getElementById("fiestaBtn");
  const fiestaBotonContainer = document.getElementById("fiesta-boton");
  const cancionFiesta = new Audio("otros/CancionLoca.mp3"); // Ruta a la canción loca

  let musica = new Audio("otros/cancion.mp3"); 
  musica.loop = true;

  let fireballSound = new Audio("otros/Fireball_Sound.mp3");

  musicaContainer.style.display = "block"; 

  musicaBoton.addEventListener("click", function () {
    if (musica.paused) {
      musica.play();
    } else {
      musica.pause(); 
      cancionFiesta.pause(); 
      body.classList.remove("flash"); 
      body.style.transform = "scale(1)"; // Restaurar el zoom
    
    }
  });

  checkbox.addEventListener("change", function () {
    if (checkbox.checked) {
      fireballSound.play();
      body.classList.remove("modo-nocturno");
      body.classList.add("modo-claro");

      initial.classList.remove('visible');
      initial.classList.add('hidden');

      message.classList.remove('hidden');
      message.classList.add('visible');
      efectoCumple.style.display = "block";
      musicaBoton.style.display = "block";
      fiestaBotonContainer.style.display = "block"; 
      nostalgicBoton.style.display = "block"; 
      musica.play();
    } else {
      body.classList.remove("modo-claro");
      body.classList.add("modo-nocturno");

      efectoCumple.style.display = "none";
      musicaBoton.style.display = "none";
      nostalgicBoton.style.display = "none";
      fiestaBotonContainer.style.display = "none"; 
      message.classList.remove('visible');
      message.classList.add('hidden');
      initial.classList.remove('hidden');
      initial.classList.add('visible');
      
      musica.pause(); 
      cancionFiesta.pause(); // Pausar la canción de fiesta
      body.classList.remove("flash"); // Quitar la clase flash para detener la animació
    }
  });

// Espera a que el DOM esté cargado
document.addEventListener("DOMContentLoaded", function () {
  const checkbox = document.getElementById("checkbox-antorcha");
  const mensajeInicial = document.getElementById("mensaje-inicial");
  
  // Agregar un event listener para el cambio en el checkbox
  checkbox.addEventListener("change", function () {
    if (checkbox.checked) {
      // Si el checkbox está marcado, oculta el mensaje
      mensajeInicial.classList.add("oculto");
    } else {
      // Si el checkbox está desmarcado, muestra el mensaje
      mensajeInicial.classList.remove("oculto");
    }
  });
});

fiestaBoton.addEventListener("click", function () {
  if (cancionFiesta.paused) {
    musica.pause(); // Detener la música anterior si estaba sonando
    cancionFiesta.play(); // Reproducir la canción de fiesta
    body.classList.add("flash"); // Añadir la clase flash para activar la animación
    body.style.transform = "scale(1.1)"; // Añadir zoom temporal
    fiestaBtn.textContent = "Detener Fiesta"; // Cambiar el texto del botón
    
    // Activar globos y confetis con party.js
    party.confetti(fiestaBoton, {
      count: party.variation.range(80, 120), // Ajustar la cantidad de confetis
    });
    
    party.sparkles(fiestaBoton, {
      count: 40, // Ajustar la cantidad de chispas o globos
    });

    // Iniciar fuegos artificiales con Fireworks.js
    const container = document.getElementById('fireworks-container') || body;
    const fireworks = new Fireworks(container, {
      speed: 3,
      acceleration: 1.25,
      friction: 0.95,
      gravity: 1.5,
      particles: 50,
      explosion: 7,
      count: 10,
      boundaries: {
        top: 50,
        bottom: container.clientHeight,
        left: 50,
        right: container.clientWidth
      }
    });

    fireworks.start(); // Iniciar los fuegos artificiales

    body.classList.remove("modo-claro");
    body.classList.add("modo-nocturno");

  } else {
    cancionFiesta.pause(); // Pausar la canción de fiesta
    body.classList.remove("flash"); // Quitar la clase flash para detener la animación
    body.style.transform = "scale(1)"; // Restaurar el zoom
    fiestaBtn.textContent = "Iniciar Fiesta"; // Cambiar el texto del botón
    fireworks.pause(); // no funciona? 
  }
});
});
