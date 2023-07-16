        
        
        let computerMovePrint = '';
        let result = '';
        let playerMovePrint = '';
        let computerMove = '';


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
          alert(`You chose rock. Computer chose ${computerMove}. It's a ${result}. 
Wins: ${tallyWinner.win}, Losses: ${tallyWinner.lose}, Ties: ${tallyWinner.tie}`);
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
          alert(`You chose paper. Computer chose ${computerMove}. It's a ${result}.
Wins: ${tallyWinner.win}, Losses: ${tallyWinner.lose}, Ties: ${tallyWinner.tie}`);
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
          alert(`You chose scissor. Computer chose ${computerMove}. It's a ${result}.
Wins: ${tallyWinner.win}, Losses: ${tallyWinner.lose}, Ties: ${tallyWinner.tie}`);
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
