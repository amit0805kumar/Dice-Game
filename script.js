var scores, roundScore, activePlayer, gamePlaying, winningScore;

var diceDom_1 = document.querySelector('.dice-icon-1');
var diceDom_2 = document.querySelector('.dice-icon-2');




/////
//Initialise
function initialise() {
    gamePlaying = true;
    document.querySelector('.win-score__value').disabled = false;
    document.querySelector('.win-score__value').value = "";
    document.querySelector('.dice-icon-1').style.display = 'none';
    document.querySelector('.dice-icon-2').style.display = 'none';
    document.querySelector('#score-0').textContent = "0";
    document.querySelector('#score-1').textContent = "0";
    document.querySelector('#current-score-0').textContent = "0";
    document.querySelector('#current-score-1').textContent = "0";
    scores = [0, 0];
    roundScore = 0;
    document.querySelector('#player-0').textContent = "Player 1";
    document.querySelector('#player-0').classList.add('active-icon');
    document.querySelector('#player-0').classList.add('player_active');
    document.querySelector('#player-1').textContent = "Player 2";
    document.querySelector('#player-1').classList.remove('active-icon');
    document.querySelector('#player-1').classList.remove('player_active');
    activePlayer = 0;
}
initialise();

function nextPlayer() {

    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    document.querySelector('#current-score-' + activePlayer).textContent = roundScore;

    /*  if (activePlayer === 1) {
          document.querySelector('#active-1').classList.add('active-icon');
          document.querySelector('#active-0').classList.remove('active-icon');
          
          document.querySelector('#player-1').classList.add('player_active');
          document.querySelector('#player-0').classList.remove('player_active');
      } else {
          document.querySelector('#active-1').classList.remove('active-icon');
          document.querySelector('#active-0').classList.add('active-icon');
          
          document.querySelector('#player-1').classList.remove('player_active');
          document.querySelector('#player-0').classList.add('player_active');
      }*/


    document.querySelector('#player-1').classList.toggle('player_active');
    document.querySelector('#player-0').classList.toggle('player_active');
    document.querySelector('#player-1').classList.toggle('active-icon');
    document.querySelector('#player-0').classList.toggle('active-icon');

}


document.querySelector('.btn-spin').addEventListener('click', function () {

    if (gamePlaying) {
        winningScore = document.querySelector('.win-score__value').value;

        document.querySelector('.win-score__value').disabled = true;
        var dice_1 = Math.floor(Math.random() * 6) + 1;
        var dice_2 = Math.floor(Math.random() * 6) + 1;

        diceDom_1.style.display = 'block';
        diceDom_2.style.display = 'block';

        diceDom_1.src = "Images/dice-" + dice_1 + ".png";
        diceDom_2.src = "Images/dice-" + dice_2 + ".png";

        if ((dice_1 !== 1) && (dice_2 !== 1)) {
            roundScore += (dice_1 + dice_2);
            document.querySelector('#current-score-' + activePlayer).textContent = roundScore;

        } else {
            roundScore = 0;
            document.querySelector('#current-score-' + activePlayer).textContent = roundScore;
            nextPlayer();

        }

    }

});


document.querySelector('.btn-hold').addEventListener('click', function () {

    if (gamePlaying) {
        scores[activePlayer] += roundScore;
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

        roundScore = 0;
        document.querySelector('#current-score-' + activePlayer).textContent = roundScore;
        diceDom_1.src = "Images/dice-1.png";
        diceDom_2.src = "Images/dice-1.png";
        if (scores[activePlayer] >= winningScore) {
            document.querySelector('#player-' + activePlayer).textContent = "Winner!";
            document.querySelector('.dice-icon-1').style.display = 'none';
            document.querySelector('.dice-icon-2').style.display = 'none';
            document.querySelector('#player-1').classList.remove('active-icon');
            document.querySelector('#player-0').classList.remove('active-icon');
            gamePlaying = false;
        } else {
            nextPlayer();

        }

    }


});

document.querySelector('.btn-newgame').addEventListener('click', initialise);
