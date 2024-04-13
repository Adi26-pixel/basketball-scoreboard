let homeScoreEl = document.getElementById("home-score");
let addHomeOne = document.getElementById("add-home-one");
let homeScore = 0;

function addHomeScoreOne() {
  homeScore += 1;
  homeScoreEl.textContent = homeScore;
}

function addHomeScoreTwo() {
  homeScore += 2;
  homeScoreEl.textContent = homeScore;
}

function addHomeScoreThree() {
  homeScore += 3;
  homeScoreEl.textContent = homeScore;
}

let guestScoreEl = document.getElementById("guest-score");
let guestScore = 0;

function addGuestScoreOne() {
  guestScore += 1;
  guestScoreEl.textContent = guestScore;
}

function addGuestScoreTwo() {
  guestScore += 2;
  guestScoreEl.textContent = guestScore;
}

function addGuestScoreThree() {
  guestScore += 3;
  guestScoreEl.textContent = guestScore;
}
