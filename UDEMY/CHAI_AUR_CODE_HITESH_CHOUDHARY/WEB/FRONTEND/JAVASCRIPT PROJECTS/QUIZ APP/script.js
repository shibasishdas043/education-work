// document.addEventListener("DOMContentLoaded", () => {
//   const startBtn = document.getElementById("start-btn");
//   const nextBtn = document.getElementById("next-btn");
//   const restartBtn = document.getElementById("restart-btn");
//   const questionContainer = document.getElementById("question-container");
//   const questionText = document.getElementById("question-text");
//   const choicesList = document.getElementById("choices-list");
//   const resultContainer = document.getElementById("result-container");
//   const scoreDisplay = document.getElementById("score");

  // const questions = [
  //   {
  //     question: "What is the capital of France?",
  //     choices: ["Paris", "London", "Berlin", "Madrid"],
  //     answer: "Paris",
  //   },
  //   {
  //     question: "Which planet is known as the Red Planet?",
  //     choices: ["Mars", "Venus", "Jupiter", "Saturn"],
  //     answer: "Mars",
  //   },
  //   {
  //     question: "Who wrote 'Hamlet'?",
  //     choices: [
  //       "Charles Dickens",
  //       "Jane Austen",
  //       "William Shakespeare",
  //       "Mark Twain",
  //     ],
  //     answer: "William Shakespeare",
  //   },
  // ];

//   let currentQuestionIndex = 0;
//   let score = 0;

//   startBtn.addEventListener("click", startQuiz);

//   nextBtn.addEventListener("click", () => {
//     currentQuestionIndex++;
//     if (currentQuestionIndex < questions.length) {
//       showQuestion();
//     } else {
//       showResult();
//     }
//   });

//   restartBtn.addEventListener("click", () => {
//     currentQuestionIndex = 0;
//     score = 0;
//     resultContainer.classList.add("hidden");
//     startQuiz();
//   });

//   function startQuiz() {
//     startBtn.classList.add("hidden");
//     resultContainer.classList.add("hidden");
//     questionContainer.classList.remove("hidden");
//     showQuestion();
//   }

//   function showQuestion() {
//     nextBtn.classList.add("hidden");
//     questionText.textContent = questions[currentQuestionIndex].question;
//     choicesList.innerHTML = ""; //clear previous choices
//     questions[currentQuestionIndex].choices.forEach((choice) => {
//       const li = document.createElement("li");
//       li.textContent = choice;
//       li.addEventListener("click", () => selectAnswer(choice));
//       choicesList.appendChild(li);
//     });
//   }

//   function selectAnswer(choice) {
//     const correctAnswer = questions[currentQuestionIndex].answer;
//     if (choice === correctAnswer) {
//       score++;
//     }
//     nextBtn.classList.remove("hidden");
//   }

//   function showResult() {
//     questionContainer.classList.add("hidden");
//     resultContainer.classList.remove("hidden");
//     scoreDisplay.textContent = `${score} out of ${questions.length}`;
//   }
// });




document.addEventListener("DOMContentLoaded", () => {

    const startQuizButton = document.getElementById("start-btn");

    // Questions
    const questions = [
        {
            question: "What is the capital of France?",
            choices: ["Paris", "London", "Berlin", "Madrid"],
            answer: "Paris",
        },
        {
            question: "Which planet is known as the Red Planet?",
            choices: ["Mars", "Venus", "Jupiter", "Saturn"],
            answer: "Mars",
        },
        {
            question: "Who wrote 'Hamlet'?",
            choices: [
                "Charles Dickens",
                "Jane Austen",
                "William Shakespeare",
                "Mark Twain",
            ],
            answer: "William Shakespeare",
        },
    ];

    // Start Of Question Container
    const questionContainer = document.getElementById("question-container");
    const questionText = document.getElementById("question-text");
    const choicesList = document.getElementById("choices-list");
    const nextQuestionButton = document.getElementById("next-btn");
    // End Of Question Container

    // Start Of Result Container
    const resultContainer = document.getElementById("result-container");
    let score = document.getElementById("score");
    const restartQuizButton = document.getElementById("restart-btn");
    // End Of Result Container

    let currentQuestion = 0;
    let defaultScore = 0;

    startQuizButton.addEventListener("click", startQuiz);

    function startQuiz() {
        startQuizButton.classList.add("hidden");

        resultContainer.classList.add("hidden");
        questionContainer.classList.remove("hidden");

        showQuestions();
    }

    function showQuestions() {
        nextQuestionButton.classList.add("hidden");
        questionText.textContent = questions[currentQuestion].question;

        choicesList.innerHTML = ""; // Clear The Previous Choices
        questions[currentQuestion].choices.forEach(iterator => {
           const li = document.createElement("li");
           li.textContent = iterator;

           li.addEventListener("click", () => selectAnswer(iterator));

           choicesList.appendChild(li);
        });
    }

    function selectAnswer(choice){
        const correctAnswer = questions[currentQuestion].answer;
        if (choice === correctAnswer){
            defaultScore++;
        }
        nextQuestionButton.classList.remove("hidden");
    }

    nextQuestionButton.addEventListener("click", () => {
        currentQuestion++;
        if (currentQuestion < questions.length){
            showQuestions();
        }else{
            showResult();
        }
    });

    function showResult(){
        questionContainer.classList.add("hidden");
        resultContainer.classList.remove("hidden");

        score.textContent = `${defaultScore} Out Of ${questions.length}`;
    }

    restartQuizButton.addEventListener("click", () => {
        currentQuestion = 0;
        defaultScore = 0;
        resultContainer.classList.add("hidden");
        startQuiz();
    });























});









