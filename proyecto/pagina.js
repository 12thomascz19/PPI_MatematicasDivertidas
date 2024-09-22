function displayUserInfo() {
    const loggedInUser = localStorage.getItem('loggedInUser');
    if (loggedInUser) {
        document.getElementById('user-info').style.display = 'block';
        document.getElementById('display-username').textContent = loggedInUser;
    } else {
        // Redirigir a la página de inicio de sesión si no hay usuario logueado
        window.location.href = 'index.html';
    }
}

// Llamar a displayUserInfo cuando la página de destino se cargue
document.addEventListener('DOMContentLoaded', displayUserInfo);
console.log(localStorage.getItem('loggedInUser'));

function toggleMenu() {
    var menu = document.getElementById("dropdownMenu");
    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
}

// Cierra el menú si el usuario hace clic fuera del mismo
window.onclick = function(event) {
    if (!event.target.matches('.menu-btn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.style.display === "block") {
                openDropdown.style.display = "none";
            }
        }
    }
}

const logoutButton = document.getElementById('logoutButton');
logoutButton.addEventListener('click', () => {
    localStorage.removeItem('loggedInUser'); // Eliminar el usuario logueado
    window.location.href = 'registro.html'; // Redirigir a la página de inicio de sesión
});

// Comprobar si el usuario está logueado al cargar la página
window.addEventListener('load', () => {
    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
    if (!loggedInUser) {
        window.location.href = 'registro.html'; // Redirigir a la página de inicio de sesión si no está logueado
    }
});



// Llamar a displayUserInfo cuando la página de destino se cargue
document.addEventListener('DOMContentLoaded', displayUserInfo);

document.getElementById("quiz-button").addEventListener("click", function() {
    alert("¡Prepárate para un divertido quiz de matemáticas!");
    window.location.href = 'quiz/index.html';
  });
  
  document.getElementById("subscribe-button").addEventListener("click", function() {
    const email = document.querySelector('input[type="email"]').value;
    if (email) {
      alert(`¡Gracias por suscribirte! Pronto recibirás nuestros trucos matemáticos en ${email}`);
    } else {
      alert("Por favor ingresa un correo válido.");
    }
  });
  
  // Generador de hechos matemáticos aleatorios
  const facts = [
    "¿Sabías que el número 0 no fue inventado hasta el siglo IX?",
    "El número 7 es el número favorito de la mayoría de la gente.",
    "El matemático más joven de la historia fue un niño de 2 años llamado Akrit Jaswal.",
    "El número Pi tiene más de un millón de dígitos."
  ];
  
  document.getElementById("quiz-button").addEventListener("mouseenter", function() {
    const randomFact = facts[Math.floor(Math.random() * facts.length)];
    document.getElementById("random-fact").innerText = randomFact;
  });
  
  let progress = 0;
let challengeAttempted = false; // Variable para controlar el intento del desafío

// Al cargar la página, recuperar el progreso y el estado del desafío
window.onload = function() {
    const savedProgress = localStorage.getItem('progress');
    const savedAttempted = localStorage.getItem('challengeAttempted');

    if (savedProgress) {
        progress = parseInt(savedProgress);
        updateProgress();
    }

    if (savedAttempted === 'true') {
        challengeAttempted = true;
        document.getElementById('attempt-message').textContent = "Ya completaste el desafío diario. ¡Inténtalo mañana!";
    }
};

function startGame(gameType) {
    alert("¡Iniciando el juego de " + gameType + "!");
    let scoreElement = document.getElementById(`score-${gameType}`);
    let score = parseInt(scoreElement.textContent);
    score += 10; // Simulación de puntaje por juego completado
    scoreElement.textContent = score;

    // Actualizar progreso y guardarlo
    progress += 10; // Ajusta según sea necesario
    updateProgress();
    localStorage.setItem('progress', progress);
}

function checkAnswer() {
    const answer = document.getElementById('daily-answer').value;
    const resultMessage = document.getElementById('result-message');
    const attemptMessage = document.getElementById('attempt-message');

    if (challengeAttempted) {
        attemptMessage.textContent = "Ya completaste el desafío diario. ¡Inténtalo mañana!";
        resultMessage.textContent = "";
        return;
    }

    if (answer == 6) {
        resultMessage.textContent = "¡Correcto! Ganaste 10 puntos.";
        resultMessage.style.color = 'green';
        progress += 10; // Añadir progreso
        updateProgress();
        localStorage.setItem('progress', progress); // Guardar progreso
    } else {
        resultMessage.textContent = "Inténtalo de nuevo.";
        resultMessage.style.color = 'red';
    }

    challengeAttempted = true; // Marcar que se completó el intento del desafío
    localStorage.setItem('challengeAttempted', challengeAttempted); // Guardar estado del desafío
    attemptMessage.textContent = "Has utilizado tu intento diario. ¡Vuelve mañana!";
}

function updateProgress() {
    let progressBar = document.getElementById('progress-inner');
    if (progress <= 100) {
        progressBar.style.width = progress + '%';
    }
}

function changeTheme() {
    const theme = document.getElementById('theme').value;

    if (theme === 'claro') {
        document.body.style.backgroundColor = '#fff';
        document.body.style.color = '#333';
    } else if (theme === 'oscuro') {
        document.body.style.backgroundColor = '#333';
        document.body.style.color = '#fff';
    } else if (theme === 'divertido') {
        document.body.style.backgroundColor = '#ffcc00';
        document.body.style.color = '#333';
    }
}

function openHelp() {
    document.getElementById('help-modal').style.display = 'block';
}

function closeHelp() {
    document.getElementById('help-modal').style.display = 'none';
}

function scrollToSection(section) {
    document.getElementById(section).scrollIntoView({ behavior: 'smooth' });
}
