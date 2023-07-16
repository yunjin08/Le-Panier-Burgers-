        
        
        let computerMovePrint = '';
        let result = '';
        let playerMovePrint = '';
        let computerMove = '';
        let isAutoPlaying = false;
        let intervalId;

        const event1ELement = document.querySelector('.js-button1');
        event1ELement.addEventListener('click', ()=>{playGame('rock')});

        const event2ELement = document.querySelector('.js-button2');
        event2ELement.addEventListener('click', ()=>{playGame('paper')});

        const event3ELement = document.querySelector('.js-button3');
        event3ELement.addEventListener('click', ()=>{playGame('scissor')});

        const event4ELement = document.querySelector('.js-button4');
        event4ELement.addEventListener('click', ()=>{resetScore()});

        const event5ELement = document.querySelector('.js-button5');
        event5ELement.addEventListener('click', ()=>{autoPlay()});

        document.body.addEventListener('keydown', (event) =>{
          if(event.key === 'r'){
            playGame('rock');
          }else if(event.key === 'p'){
            playGame('paper');
          }else if(event.key === 's'){
            playGame('scissor');
          }
        });

        const tallyWinner = JSON.parse(localStorage.getItem('score'))
        || {
            win: 0,
            lose: 0,
            tie: 0
        };

        function definePlay(){
            document.querySelector('.definePlay')
                .innerHTML = `It's a ${result}. 
            You chose rock. Computer chose ${computerMove}. `;
        }
        querySel();

        function pickComputerMoves(){
        const randomNumber = Math.random();

        if(randomNumber >= 0 && randomNumber <= 1/3){
          return 'rock';
        } else if (randomNumber > 1/3 && randomNumber <= 2/3){
          return 'paper';
        } else if (randomNumber > 2/3 && randomNumber <= 1){
          return'scissor';
        }
        }

        function playGame(playerMove){
          computerMove = pickComputerMoves();
        

        if (playerMove === 'rock'){
          playerMovePrint = 'rock';
          if(computerMove === 'rock'){
            result = 'tie';
          } else if (computerMove === 'paper'){
            result = 'lose';
          } else if (computerMove === 'scissor'){
            result = 'win'
          }
          tallyScore();
        }


        if (playerMove === 'paper'){
          playerMovePrint = 'paper';
          if(computerMove === 'rock'){
            result = 'win';
          } else if (computerMove === 'paper'){
            result = 'tie';
          } else if (computerMove === 'scissor'){
            result = 'lose'
          }
          tallyScore();
        }


        if (playerMove === 'scissor'){
          playerMovePrint = 'scissor';
          if(computerMove === 'rock'){
            result = 'win';
          } else if (computerMove === 'paper'){
            result = 'tie';
          } else if (computerMove === 'scissor'){
            result = 'lose'
          }
          tallyScore();
        }
      }

        function tallyScore(){
          if(result === 'win'){
            tallyWinner.win +=1;
          } else if (result === 'lose'){
            tallyWinner.lose +=1;
          } else if (result === 'tie'){
            tallyWinner.tie +=1;
          }

          localStorage.setItem('score', JSON.stringify(tallyWinner)); 
          
            
          document.querySelector('.defineWin')
            .innerHTML = `It's a ${result}.`;

          document.querySelector('.definePlay')
            .innerHTML = 
            `You chose <img src="images/${playerMovePrint}-emoji.png"> Computer chose <img src="images/${computerMove}-emoji.png">`;
        
          querySel();
        }

        function querySel(){
            document.querySelector('.js-score')
            .innerHTML = `Wins: ${tallyWinner.win}, Losses: ${tallyWinner.lose}, Ties: ${tallyWinner.tie}`;
        }

        function resetScore(){

            tallyWinner.win = 0;
            tallyWinner.lose = 0;
            tallyWinner.tie = 0;
            localStorage.removeItem('score');
            querySel();

            document.querySelector('.defineWin')
            .innerHTML = ``;

          document.querySelector('.definePlay')
            .innerHTML = ``;
        }


        function autoPlay(){
          if (!isAutoPlaying){
            intervalId = setInterval(() => {    //Save The ID for Interval, intervals have unique ID
              const PlayerMove = pickComputerMoves();
              playGame(PlayerMove);
              
            }, 1000);
            isAutoPlaying = true;
          } else {
            clearInterval(intervalId);
            isAutoPlaying = false;
          }
        }
