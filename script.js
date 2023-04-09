const test = [
  {
    question: "What was the most used programming language in 2019?",
    a: "Java",
    b: "C",
    c: "Python",
    d: "JavaScript",
    correct: "d",
  },

  {
    question: "Who is the President of US?",
    a: "Donald Trump",
    b: "Joe Biden",
    c: "Hillary Clinton",
    d: "Bernie Sanders",
    correct: "b",
  },

  {
    question: "What does HTML stand for?",
    a: "Hypertext Markup Language",
    b: "Cascading Style Sheet",
    c: "Jason Object Notation",
    d: "none of the above",
    correct: "a",
  },

  {
    question: "What year was JavaScript launched?",
    a: "1993",
    b: "1994",
    c: "1995",
    d: "1996",
    correct: "c",
  },
];

const quiz = document.getElementById("quiz");
const startButton = document.getElementById("start-button");
const ansA = document.getElementById("ansA");
const ansB = document.getElementById("ansB");
const ansC = document.getElementById("ansC");
const ansD = document.getElementById("ansD");
const submitButton = document.getElementById("submit");
const answers = document.querySelectorAll(".answer");
const questions = document.getElementById("question");

let mainQuiz = 0;
let score = 0;

startQuiz();

function startQuiz() {
  deselectAnswers();

  const mainQuizData = test[mainQuiz];

  questions.innerText = mainQuizData.question;
  ansA.innerText = mainQuizData.a;
  ansB.innerText = mainQuizData.b;
  ansC.innerText = mainQuizData.c;
  ansD.innerText = mainQuizData.d;
}

function deselectAnswers() {
  answers.forEach((answerr) => (answerr.checked = false));
}

function getSelected() {
  let answer;
  answers.forEach((answerr) => {
    if (answerr.checked) {
      answer = answerr.id;
    }
  });
  return answer;
}

submitButton.addEventListener("click", () => {
  const answer = getSelected();
  if (answer) {
    if (answer === test[mainQuiz].correct) {
      score++;
    }

    mainQuiz++;

    if (mainQuiz < test.length) {
      startQuiz();
    } else {
      quiz.innerHTML = `
         <h2>You answered ${score}/${test.length} questions correctly</h2>

         <button onclick="location.reload()">Reload</button>
         `;
    }
  }
});

startButton.addEventListener("click", function () {
  document.querySelector(".starter").classList.add("hidden");
  quiz.classList.remove("hidden");
});
