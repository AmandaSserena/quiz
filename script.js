const questions = [
    {
        question: "Qual é a capital da França?",
        options: ["Londres", "Berlim", "Paris", "Roma"],
        answer: 2
    },
    {
        question: "Qual o nome do autor do livro Dom Quixote?",
        options: ["William Shakespeare", "Miguel de Cervantes", "Victor Hugo", "Mark Twain"],
        answer: 1
    },
    {
        question: "Em que ano o homem pisou na Lua pela primeira vez?",
        options: ["1956", "1969", "1979", "1989"],
        answer: 1
    },
    {
        question: "Qual o maior oceano do mundo?",
        options: ["Atlântico", "Índico", "Ártico", "Pacífico"],
        answer: 3
    },
    {
        question: "Quem pintou a Mona Lisa?",
        options: ["Vincent van Gogh", "Leonardo da Vinci", "Pablo Picasso", "Michelangelo"],
        answer: 1
    },
    {
        question: "Qual é o elemento químico mais abundante no universo?",
        options: ["Oxigênio", "Hidrogênio", "Carbono", "Hélio"],
        answer: 1
    },
    {
        question: "Qual o nome do dispositivo usado para medir a temperatura?",
        options: ["Barômetro", "Termômetro", "Anemômetro", "Higrômetro"],
        answer: 1
    },
    {
        question: "Quem é conhecido como o pai da computação?",
        options: ["Alan Turing", "Bill Gates", "Steve Jobs", "Charles Babbage"],
        answer: 3
    },
    {
        question: "Qual foi o primeiro satélite artificial lançado ao espaço?",
        options: ["Explorer 1", "Sputnik 1", "Luna 2", "Vanguard 1"],
        answer: 1
    },
    {
        question: "O que significa a sigla HTTP na internet?",
        options: ["HyperText Transfer Protocol", "HyperText Transmission Protocol", "HyperText Transaction Protocol", "HyperText Translation Protocol"],
        answer: 0
    },
    {
        question: "Quem foi o primeiro presidente dos Estados Unidos?",
        options: ["George Washington", "Thomas Jefferson", "Abraham Lincoln", "John Adams"],
        answer: 0
    },
    {
        question: "Em que ano ocorreu a Revolução Francesa?",
        options: ["1776", "1789", "1812", "1848"],
        answer: 1
    },
    {
        question: "Qual imperador romano se declarou o Senhor de Todo o Mundo?",
        options: ["Júlio César", "Augusto", "Nero", "Constantino"],
        answer: 0
    },
    {
        question: "Quem foi o líder da Revolução Russa de 1917?",
        options: ["Vladimir Lenin", "Joseph Stalin", "Leon Trotsky", "Mikhail Gorbachev"],
        answer: 0
    },
    {
        question: "Qual civilização antiga construiu as pirâmides de Gizé?",
        options: ["Babilônia", "Mesopotâmia", "Egito", "Grécia"],
        answer: 2
    }
];

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
    const questionElement = document.getElementById("question");
    const optionsElement = document.querySelectorAll(".option-btn");

    questionElement.textContent = questions[currentQuestion].question;
    optionsElement.forEach((btn, index) => {
        btn.textContent = questions[currentQuestion].options[index];
    });
}

function checkAnswer(selectedOption) {
    const correctAnswer = questions[currentQuestion].answer;
    if (selectedOption === correctAnswer) {
        score++;
    }
    document.getElementById("score").textContent = `Pontuação: ${score}`;
}

function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        document.getElementById("quiz-container").innerHTML = `<h1>Quiz Finalizado</h1><p>Sua pontuação é: ${score}</p>`;
    }
}

window.onload = () => {
    loadQuestion();
};
