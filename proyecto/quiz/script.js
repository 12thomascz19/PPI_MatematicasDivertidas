function submitQuiz() {
    var totalQuestions = 5;
    var score = 0;
    var icons = {
        correct: "<img src='https://p7.hiclipart.com/preview/625/746/421/check-mark-royalty-free-stock-photography-clip-art-green-tick.jpg' class='icon'>",
        incorrect: "<img src='https://cdn.pixabay.com/photo/2013/07/12/16/22/alphabet-150787_640.png' class='icon'>"
    };

    // Pregunta 1
    var q1 = document.querySelector('input[name="q1"]:checked');
    var q1Result = document.getElementById("question1");
    if (q1 && q1.value === "1/2") {
        score++;
        q1Result.querySelector('.options').innerHTML += icons.correct;
    } else {
        q1Result.querySelector('.options').innerHTML += icons.incorrect;
    }

    // Pregunta 2
    var q2 = document.querySelector('input[name="q2"]:checked');
    var q2Result = document.getElementById("question2");
    if (q2 && q2.value === "2/5") {
        score++;
        q2Result.querySelector('.options').innerHTML += icons.correct;
    } else {
        q2Result.querySelector('.options').innerHTML += icons.incorrect;
    }

    // Pregunta 3
    var q3 = document.querySelector('input[name="q3"]:checked');
    var q3Result = document.getElementById("question3");
    if (q3 && q3.value === "7") {
        score++;
        q3Result.querySelector('.options').innerHTML += icons.correct;
    } else {
        q3Result.querySelector('.options').innerHTML += icons.incorrect;
    }

    // Pregunta 4
    var q4 = document.querySelector('input[name="q4"]:checked');
    var q4Result = document.getElementById("question4");
    if (q4 && q4.value === "1/3") {
        score++;
        q4Result.querySelector('.options').innerHTML += icons.correct;
    } else {
        q4Result.querySelector('.options').innerHTML += icons.incorrect;
    }

    // Pregunta 5
    var q5 = document.querySelector('input[name="q5"]:checked');
    var q5Result = document.getElementById("question5");
    if (q5 && q5.value === "4") {
        score++;
        q5Result.querySelector('.options').innerHTML += icons.correct;
    } else {
        q5Result.querySelector('.options').innerHTML += icons.incorrect;
    }

    // Calcular nota
    var grade = 1; // Nota mínima
    if (score === 5) {
        grade = 5; // Perfecto
    } else if (score === 4) {
        grade = 4; // Muy bien
    } else if (score >= 3) {
        grade = 3; // Bien
    } else if (score >= 2) {
        grade = 2; // Regular
    }

    // Mostrar el resultado y la nota
    var result = document.getElementById("result");
    result.innerHTML = "Obtuviste " + score + " de " + totalQuestions + " preguntas correctas.<br>Tu nota es: " + grade + " de 5.";
    result.classList.remove("hidden");
}

//funcion para regresar
function goBack() {
    window.history.back();
}