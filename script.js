const quizData = [
    {
        question: 'How many Rugby World Cups has the Northern Hemishpere won since the inaugural tournament in 1987?',
        a: '0',
        b: '1',
        c: '2',
        d: '3',
        correct: 'b',
    },{
        question: 'How many Rugby World Cups has the Southern Hemisphere won since the inaugural tournament in 1987?',
        a: '6',
        b: '7',
        c: '8',
        d: '9',
        correct_: 'c',
    }, {
        question: 'which player has scored the most tries in a Rugby World Cup tournament?',
        a: 'Jonny Wilkinson',
        b: 'Bryan Habana',
        c: 'Jonah Lomu',
        d: 'Bryan Habana & Jonah Lomu',
        correct: 'd',
    }, {
        question: 'Which player has scored the most overall points in Rugby World Cup history?',
        a: 'Gavin Hastings - Scotland',
        b: 'Michael Lynagh - Australia',
        c: 'Jonny Wilkinson - England',
        d: 'Dan Carter - New Zealand',
        correct: 'c',
    }, {
        question: 'Which player was the youngest player to score a try in a Rugby World cup game?',
        a: 'Juan Martín Hernández - Argentina',
        b: 'George North - Wales',
        c: 'Brian Lima - Samoa',
        d: 'Rory Best - Ireland',
        correct: 'b',
    }, {
        question: 'Which player scored the most points in a Rugby World Cup tournament?',
        a: 'Grant Fox - New Zealand',
        b: 'Percy Montgomery - South Africa',
        c: 'Thierry Lacroix - France',
        d: 'Jonny Wilkinson - England',
        correct: 'a',
    }, {
        question: 'Name the oldest player to win a Rugby World Cup final',
        a: 'Richie McCaw - New Zealand',
        b: 'Stirling Mortlock - Australia',
        c: 'Martin Johnson - England',
        d: 'Schalk Brits - South Africa',
        correct: 'd',
    }, {
        question: 'Name the youngest player to win a Rugby World Cup final',
        a: 'David Campese - Australia',
        b: 'Jonah Lomu - New Zealand',
        c: 'Cheslin Kolbe - South Africa',
        d: 'François Steyn - South Africa',
        correct: 'd',
    }, {

    }
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit")

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData
    [currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        answer = answerEl.id;
    });

    return answer;

}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;

    });

}

submitBtn.addEventListener("click", () => {
    //check to see the answer
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz.correct].correct) {
            score++;
        }

        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
            <h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
            
            <button onclick="location.reload()">Reload</button>
            `;
        }        
    }
});