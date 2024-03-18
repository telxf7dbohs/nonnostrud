function addClass(elements, className) {
  for (var i = 0; i < elements.length; i++) {
    elements[i].classList.add(className);
  }
}

var leaderboardButtons = document.getElementsByClassName("leaderboard-button");
addClass(leaderboardButtons, "selected");
