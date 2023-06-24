/*
 * DOTS: Level Three
 *
 */
let score = 0;
let arenaEl = document.querySelector('.js-arena');
let scoreEl = document.querySelector('.js-score');

function declareWinner() {
  document.body.classList.add('game-over');
}
  
let ballList = arenaEl.querySelectorAll('.js-ball');

let twentyPoints = Number(ballList[0].dataset.increment);
let fivePoints = Number(ballList[1].dataset.increment);
let tenPoints = Number(ballList[2].dataset.increment);
  
function scorePointsBySize(pointsEarned) {
  let newScore = score + pointsEarned;
  if (newScore >= 100) {
    scoreEl.innerHTML = "0" + newScore;
    declareWinner();
  }
  else {
    score = newScore;
    if (score < 10) {
      scoreEl.innerHTML = "000" + score;
    }
    else {
      scoreEl.innerHTML = "00" + score;
    }
  }
}

ballList[0].onclick = function() {scorePointsBySize(twentyPoints)};
ballList[1].onclick = function() {scorePointsBySize(fivePoints)};
ballList[2].onclick = function() {scorePointsBySize(tenPoints)};






