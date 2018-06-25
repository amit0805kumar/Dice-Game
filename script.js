var scores, roundScore, activePlayer;
var diceDom = document.querySelector('.dice-icon');

scores = [0, 0];
roundScore = 0;
activePlayer = 0;



document.querySelector('.dice-icon').style.display = 'none';

/////
//Initialise
document.querySelector('#score-0').textContent = "0";
document.querySelector('#score-1').textContent = "0";
document.querySelector('#current-score-0').textContent = "0";
document.querySelector('#current-score-1').textContent = "0";



document.querySelector('.btn-spin').addEventListener('click', function () {

    var dice = Math.floor(Math.random() * 6) + 1;

    diceDom.style.display = 'block';
    diceDom.src = "Images/dice-" + dice + ".png";



    if (dice !== 1) {
        roundScore += dice;
        document.querySelector('#current-score-' + activePlayer).textContent = roundScore;

    } else {
        roundScore = 0;
        document.querySelector('#current-score-' + activePlayer).textContent = roundScore;
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
        document.querySelector('#active-1').classList.toggle('active-icon');
        document.querySelector('#active-0').classList.toggle('active-icon');

        document.querySelector('#player-1').classList.toggle('player_active');
        document.querySelector('#player-0').classList.toggle('player_active');
       
        
    }

});


document.querySelector('.btn-hold').addEventListener('click',function(){

    scores[activePlayer] += roundScore;
    document.querySelector('#score-'+activePlayer).textContent = scores[activePlayer];

        roundScore = 0;
        document.querySelector('#current-score-' + activePlayer).textContent = roundScore;
        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
        document.querySelector('#current-score-' + activePlayer).textContent = roundScore;
        document.querySelector('#active-1').classList.toggle('active-icon');
        document.querySelector('#active-0').classList.toggle('active-icon');

        document.querySelector('#player-1').classList.toggle('player_active');
        document.querySelector('#player-0').classList.toggle('player_active');
       
     diceDom.src = "Images/dice-1.png";
    
});






















