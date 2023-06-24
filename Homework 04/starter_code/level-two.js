/*
 * DOTS: Level Two
 *
 */
let score = 0;
let arenaEl = document.querySelector('.js-arena');
let scoreEl = document.querySelector('.js-score');

function declareWinner() {
    document.body.classList.add('game-over');
}

let ballList = arenaEl.querySelectorAll('.js-ball');

function scorePoints() {
  let newScore = score + 10;
  if (newScore == 100) {
    scoreEl.innerHTML = "0" + newScore;
    declareWinner();
  }
  else {
    score = newScore;
    scoreEl.innerHTML = "00" + score;
  }
}

ballList[0].onclick = function() {scorePoints()};
ballList[1].onclick = function() {scorePoints()};
ballList[2].onclick = function() {scorePoints()};
  