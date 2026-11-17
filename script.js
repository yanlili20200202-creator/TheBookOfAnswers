const visitCountElement = document.getElementById("visit-count");
const answerButton = document.getElementById("answer-button");
const answerElement = document.getElementById("answer");

try {
  const previousVisits = Number(localStorage.getItem("bookOfAnswersVisits")) || 0;
  const currentVisits = previousVisits + 1;
  localStorage.setItem("bookOfAnswersVisits", currentVisits);
  visitCountElement.textContent = `这是你第 ${currentVisits} 次访问。`;
} catch {
  visitCountElement.textContent = "浏览器未允许本地存储，无法记录访问次数。";
}

const answers = [
  "Yes.",
  "No.",
  "Maybe.",
  "Be patient.",
  "Trust yourself."
];

answerButton.addEventListener("click", function () {
  const randomIndex = Math.floor(Math.random() * answers.length);
  answerElement.textContent = answers[randomIndex];
});
