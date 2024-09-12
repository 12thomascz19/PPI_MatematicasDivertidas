// script.js

const fractionQuestions = [
    {
        question: "1/2",
        answer: 0.5
    },
    {
        question: "3/4",
        answer: 0.75
    },
    {
        question: "5/8",
        answer: 0.625
    },
    {
        question: "6/2",
        answer: 3
    },
    {
        question: "10/4",
        answer: 2.5
    },
    {
        question: "20/4",
        answer: 5
    },
    {
        question: "5/6",
        answer: 0.83
    }
];

const statQuestions = [
    {
        question: "¿Cuál es la moda de los números 2, 4, 5, 5, 6, 7?",
        answer: 5
    },
    {
        question: "¿Cuál es el rango de los números 3, 6, 9, 12?",
        answer: 9
    },
    {
        question: "¿Cuál es la mediana de los números 1, 3, 3, 6, 7, 8, 9?",
        answer: 6
    },
    {
        question: "¿Cuál es la mediana de los números 2 5 6 4 6 7 8",
        answer: 4
    },
    {
        question: "¿Cuál es la mediana de los números 1 3 4 5 7 9 5 3",
        answer: 6
    },
    {
        question: "¿Cuál es la mediana de los números 2 5 9 0 1 2 3 4 5 6",
        answer: 1.5
    }
        
];

const multiplicationQuestions = [
    {
        question: "7 x 8",
        answer: 56
    },
    {
        question: "6 x 6",
        answer: 36
    },
    {
        question: "9 x 9",
        answer: 81
    },
    {
        question: "10 x 10",
        answer: 100
    },
    {
        question: "15 x 6",
        answer: 90
    },
    {
        question: "20 x 4",
        answer: 80
    },
    {
        question: "30 x 7",
        answer: 210
    },
    {
        question: "5 x 9",
        answer: 45
    },
    {
        question: "40 x 9",
        answer: 360
    }
];

let currentQuestionIndex = 0;
let currentGame = "";

function displayQuestion(game) {
    let questionObj;

    if (game === "fractions") {
        questionObj = fractionQuestions[currentQuestionIndex];
        document.getElementById('fraction-question').innerText = `Convierte ${questionObj.question} a decimal:`;
        document.getElementById('fraction-answer').value = '';
        document.getElementById('fraction-message').innerText = '';
        document.getElementById('fraction-message').className = '';
    } else if (game === "statistics") {
        questionObj = statQuestions[currentQuestionIndex];
        document.getElementById('statistics-question').innerText = questionObj.question;
        document.getElementById('statistics-answer').value = '';
        document.getElementById('statistics-message').innerText = '';
        document.getElementById('statistics-message').className = '';
    } else if (game === "multiplication") {
        questionObj = multiplicationQuestions[currentQuestionIndex];
        document.getElementById('multiplication-question').innerText = questionObj.question;
        document.getElementById('multiplication-answer').value = '';
        document.getElementById('multiplication-message').innerText = '';
        document.getElementById('multiplication-message').className = '';
    }
}

function checkAnswer(game) {
    let userAnswer, questionObj;

    if (game === "fractions") {
        userAnswer = parseFloat(document.getElementById('fraction-answer').value.trim());
        questionObj = fractionQuestions[currentQuestionIndex];

        if (userAnswer === questionObj.answer) {
            document.getElementById('fraction-message').innerText = '¡Correcto! Buen trabajo.';
            document.getElementById('fraction-message').className = 'correct';
        } else {
            document.getElementById('fraction-message').innerText = `Incorrecto. La respuesta correcta es ${questionObj.answer}.`;
            document.getElementById('fraction-message').className = 'incorrect';
        }
    } else if (game === "statistics") {
        userAnswer = parseFloat(document.getElementById('statistics-answer').value.trim());
        questionObj = statQuestions[currentQuestionIndex];

        if (userAnswer === questionObj.answer) {
            document.getElementById('statistics-message').innerText = '¡Correcto! Buen trabajo.';
            document.getElementById('statistics-message').className = 'correct';
        } else {
            document.getElementById('statistics-message').innerText = `Incorrecto. La respuesta correcta es ${questionObj.answer}.`;
            document.getElementById('statistics-message').className = 'incorrect';
        }
    } else if (game === "multiplication") {
        userAnswer = parseFloat(document.getElementById('multiplication-answer').value.trim());
        questionObj = multiplicationQuestions[currentQuestionIndex];

        if (userAnswer === questionObj.answer) {
            document.getElementById('multiplication-message').innerText = '¡Correcto! Buen trabajo.';
            document.getElementById('multiplication-message').className = 'correct';
        } else {
            document.getElementById('multiplication-message').innerText = `Incorrecto. La respuesta correcta es ${questionObj.answer}.`;
            document.getElementById('multiplication-message').className = 'incorrect';
        }
    }
}

document.getElementById('start-fractions').onclick = function () {
    currentGame = "fractions";
    document.getElementById('cover').classList.add('hidden');
    document.getElementById('fractions-game').classList.remove('hidden');
    displayQuestion(currentGame);
};

document.getElementById('start-statistics').onclick = function () {
    currentGame = "statistics";
    document.getElementById('cover').classList.add('hidden');
    document.getElementById('statistics-game').classList.remove('hidden');
    displayQuestion(currentGame);
};

document.getElementById('start-multiplication').onclick = function () {
    currentGame = "multiplication";
    document.getElementById('cover').classList.add('hidden');
    document.getElementById('multiplication-game').classList.remove('hidden');
    displayQuestion(currentGame);
};

document.getElementById('fraction-submit').onclick = function () {
    checkAnswer(currentGame);
};

document.getElementById('fraction-next').onclick = function () {
    currentQuestionIndex++;
    if (currentQuestionIndex < fractionQuestions.length) {
        displayQuestion(currentGame);
    } else {
        currentQuestionIndex = 0;
        displayQuestion(currentGame);
    }
};

document.getElementById('statistics-submit').onclick = function () {
    checkAnswer(currentGame);
};

document.getElementById('statistics-next').onclick = function () {
    currentQuestionIndex++;
    if (currentQuestionIndex < statQuestions.length) {
        displayQuestion(currentGame);
    } else {
        currentQuestionIndex = 0;
        displayQuestion(currentGame);
    }
};

document.getElementById('multiplication-submit').onclick = function () {
    checkAnswer(currentGame);
};

document.getElementById('multiplication-next').onclick = function () {
    currentQuestionIndex++;
    if (currentQuestionIndex < multiplicationQuestions.length) {
        displayQuestion(currentGame);
    } else {
        currentQuestionIndex = 0;
        displayQuestion(currentGame);
    }
};

document.querySelectorAll('.return-to-cover').forEach(button => {
    button.onclick = function () {
        document.getElementById(currentGame + '-game').classList.add('hidden');
        document.getElementById('cover').classList.remove('hidden');
    };
});

document.getElementById('fractions-instructions-button').onclick = function () {
    const instructionsDiv = document.getElementById('fractions-instructions');
    instructionsDiv.classList.toggle('hidden');
};

document.getElementById('statistics-instructions-button').onclick = function () {
    const instructionsDiv = document.getElementById('statistics-instructions');
    instructionsDiv.classList.toggle('hidden');
};

document.getElementById('multiplication-instructions-button').onclick = function () {
    const instructionsDiv = document.getElementById('multiplication-instructions');
    instructionsDiv.classList.toggle('hidden');
};

function goBack() {
    window.history.back();
}