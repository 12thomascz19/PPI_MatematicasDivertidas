let progress = 0;

function startGame(gameType) {
    alert("¡Iniciando el juego de " + gameType + "!");
    let scoreElement = document.getElementById(`score-${gameType}`);
    let score = parseInt(scoreElement.textContent);
    score += 10; // Simulación de puntaje por juego completado
    scoreElement.textContent = score;

    // Actualizar progreso
    updateProgress();
}

function checkAnswer() {
    const answer = document.getElementById('daily-answer').value;
    const resultMessage = document.getElementById('result-message');
    
    if (answer == 6) {
        resultMessage.textContent = "¡Correcto! Ganaste 10 puntos.";
        resultMessage.style.color = 'green';
        progress += 10; // Añadir progreso
        updateProgress();
    } else {
        resultMessage.textContent = "Inténtalo de nuevo.";
        resultMessage.style.color = 'red';
    }
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
