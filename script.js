const answer = "一期一会"; // 今日の正解
const maxAttempts = 6;
let attempts = 0;

const outputDiv = document.getElementById("output");
const guessInput = document.getElementById("guessInput");
const submitBtn = document.getElementById("submitBtn");
const resultP = document.getElementById("result");

submitBtn.addEventListener("click", () => {
  const guess = guessInput.value.trim();
  if (guess.length !== 4) {
    alert("4文字の四字熟語を入力してください。");
    return;
  }

  attempts++;
  const result = checkGuess(guess);
  outputDiv.innerHTML += `<div>${result}</div>`;

  if (guess === answer) {
    resultP.textContent = `正解！「${answer}」でした！`;
    guessInput.disabled = true;
    submitBtn.disabled = true;
  } else if (attempts >= maxAttempts) {
    resultP.textContent = `残念！正解は「${answer}」でした。`;
    guessInput.disabled = true;
    submitBtn.disabled = true;
  } else {
    guessInput.value = "";
  }
});

// 判定関数
function checkGuess(guess) {
  let result = "";
  for (let i = 0; i < 4; i++) {
    if (guess[i] === answer[i]) {
      result += `<span class="green">${guess[i]}</span>`;
    } else if (answer.includes(guess[i])) {
      result += `<span class="yellow">${guess[i]}</span>`;
    } else {
      result += `<span class="gray">${guess[i]}</span>`;
    }
  }
  return result;
}
