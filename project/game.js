const quizData = [
    {
        question: "Which country has won the most FIFA World Cups?",
        options: ["Germany", "Brazil", "Italy", "Argentina"],
        correct: 1 // index of Brazil
    },
    {
        question: "Who won the first ever World Cup in 1930?",
        options: ["Uruguay", "Argentina", "Brazil", "Italy"],
        correct: 0
    },
    {
        question: "Which player holds the record for the most goals in World Cup history?",
        options: ["Pelé", "Cristiano Ronaldo", "Miroslav Klose", "Lionel Messi"],
        correct: 2
    },
    {
        question: "In which year did England win their only World Cup?",
        options: ["1958", "1966", "1970", "1982"],
        correct: 1
    },
    {
        question: "Who won the Golden Ball (Best Player) at the 2022 World Cup?",
        options: ["Kylian Mbappé", "Luka Modrić", "Lionel Messi", "Antoine Griezmann"],
        correct: 2
    },
    {
        question: "Which nation hosted the 2010 FIFA World Cup?",
        options: ["Brazil", "South Africa", "Germany", "Russia"],
        correct: 1
    },
    {
        question: "Who is the youngest player to score in a World Cup final?",
        options: ["Kylian Mbappé", "Lionel Messi", "Pelé", "Diego Maradona"],
        correct: 2
    },
    {
        question: "How often is the FIFA World Cup held?",
        options: ["Every 2 years", "Every 3 years", "Every 4 years", "Every 5 years"],
        correct: 2
    },
    {
        question: "Which country won the World Cup in 2018?",
        options: ["Croatia", "France", "Spain", "Germany"],
        correct: 1
    },
    {
        question: "Which player scored the infamous 'Hand of God' goal in 1986?",
        options: ["Lionel Messi", "Zinedine Zidane", "Ronaldinho", "Diego Maradona"],
        correct: 3
    }
];

const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options');
const nextBtn = document.getElementById('next-btn');
const submitBtn = document.getElementById('submit-btn');
const quizContent = document.getElementById('quiz-content');
const quizResult = document.getElementById('quiz-result');
const scoreText = document.getElementById('score-text');
const resultMessage = document.getElementById('result-message');
const restartBtn = document.getElementById('restart-btn');
const resultImage = document.getElementById('result-image');

let currentQuestion = 0;
let score = 0;
let selectedOption = null;

function loadQuestion() {
    selectedOption = null;
    nextBtn.style.display = 'none';
    submitBtn.style.display = 'none';

    const q = quizData[currentQuestion];
    questionText.innerText = `${currentQuestion + 1}. ${q.question}`;
    optionsContainer.innerHTML = '';

    q.options.forEach((opt, index) => {
        const optionDiv = document.createElement('div');
        optionDiv.classList.add('option');
        optionDiv.innerText = opt;
        optionDiv.onclick = () => selectOption(index, optionDiv);
        optionsContainer.appendChild(optionDiv);
    });
}

function selectOption(index, elem) {
    const allOptions = document.querySelectorAll('.option');
    allOptions.forEach(opt => opt.classList.remove('selected'));

    elem.classList.add('selected');
    selectedOption = index;

    if (currentQuestion < quizData.length - 1) {
        nextBtn.style.display = 'block';
    } else {
        submitBtn.style.display = 'block';
    }
}

if (nextBtn) {
    nextBtn.addEventListener('click', () => {
        if (selectedOption === null) return;

        if (selectedOption === quizData[currentQuestion].correct) {
            score++;
        }

        currentQuestion++;
        loadQuestion();
    });
}

if (submitBtn) {
    submitBtn.addEventListener('click', () => {
        if (selectedOption === null) return;

        if (selectedOption === quizData[currentQuestion].correct) {
            score++;
        }

        showResult();
    });
}

function showResult() {
    quizContent.style.display = 'none';
    quizResult.style.display = 'block';

    scoreText.innerText = `You scored ${score} out of ${quizData.length}`;

    if (score >= 7) {
        // High score - Xavi
        resultMessage.innerText = '"You control the midfield of knowledge, simply brilliant. True understanding of the game." - Xavi';
        resultMessage.style.color = 'var(--text-primary)';
        if (resultImage) {
            resultImage.src = 'xavi.avif';
            resultImage.style.display = 'block';
        }
    } else {
        // Low score - Zlatan
        resultMessage.innerText = `"Lions don't compare themselves to humans, but even a human knows more than you about the World Cup. Do better." - Zlatan`;
        resultMessage.style.color = '#ff4d4d'; // Soft red
        if (resultImage) {
            resultImage.src = 'ibra.jpg';
            resultImage.style.display = 'block';
        }
    }
}

if (restartBtn) {
    restartBtn.addEventListener('click', () => {
        currentQuestion = 0;
        score = 0;
        quizResult.style.display = 'none';
        if (resultImage) resultImage.style.display = 'none';
        quizContent.style.display = 'block';
        loadQuestion();
    });
}

// Initialize
if (document.getElementById('quiz-container')) {
    loadQuestion();
}
