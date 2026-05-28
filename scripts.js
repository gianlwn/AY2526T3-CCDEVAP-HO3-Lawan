let num1, num2, operator, correctAnswer;
let score = 0;
const operators = ["+", "-", "*"];

// generate quesiton instantly
generateQuestion();

function generateQuestion() {
  num1 = Math.floor(Math.random() * 11);
  num2 = Math.floor(Math.random() * 11);

  // get random operator
  let randomOperatorIdx = Math.floor(Math.random() * operators.length);
  operator = operators[randomOperatorIdx];

  // dispaky the question
  document.getElementById("question").textContent =
    num1 + " " + operator + " " + num2;

  if (operator === "+") {
    correctAnswer = num1 + num2;
  } else if (operator === "-") {
    correctAnswer = num1 - num2;
  } else if (operator === "*") {
    correctAnswer = num1 * num2;
  }
}

function checkAnswer() {
  const answerInput = document.getElementById("answer");
  const message = document.getElementById("message");

  // check if player has an answer
  if (answerInput.value.trim() !== "") {
    let userAnswer = Number(answerInput.value);

    if (userAnswer === correctAnswer) {
      score++;
      document.getElementById("score").textContent = score;
      message.textContent = "Correct!";
      message.style.color = "green";
    } else {
      message.textContent = "Wrong! Correct answer was " + correctAnswer;
      message.style.color = "red";
    }

    // generate nbew question right after
    generateQuestion();
    answerInput.value = "";

    // win con
    if (score >= 5) {
      document.getElementById("div-questions").style.display = "none";
      document.getElementById("div-success").style.display = "block";
    }
  }
}

function playAgain() {
  // reset score
  score = 0;

  // reset score, message box, and answer input
  document.getElementById("score").textContent = score;
  document.getElementById("answer").textContent = "";
  document.getElementById("message").textContent = "";

  // genmerate new question
  generateQuestion();

  // remove the winning screen
  document.getElementById("div-success").style.display = "none";
  document.getElementById("div-questions").style.display = "block";
}
