// require your modules
var Letter = require('./letter');
var Word = require('./word');
var prompt = require('prompt');
var Game = require('./game');
//var tWord = new Word('apple');
//tWord.testWord();
//tWord.convertString();
console.log('preguess');
//console.log(tWord.displayWord());
//tWord.checkLetter('p');
//tWord.checkLetter('a');
console.log('postguess');

//console.log(tWord.displayWord());

// put startGame variable here

// list the game array options. 

prompt.start();


game = {
      wordBank: ["New York City", "Hong Kong", "Istanbul", "London", "Nairobi", "Sydney", "Buenos Aires"],
      //words won variable
      wordsWon : 0,
       // guesses remaining 
      guessesRemaining : 9,
     // set the game variables here
      currentWrd : null,
      startGame : function (wrd) {

            this.resetGuessesRemaining();

            // get random word from the array
            this.currentWrd = new Word(this.wordBank[Math.floor(Math.random() * this.wordBank.length)]);

            // populate current word in the array 
            this.currentWrd.convertString();

            this.keepPromptingUser();

       },

    // within the function make sure there is a reset function
    // set reset game function
      resetGuessesRemaining : function (){
       this.guessesRemaining = 9;
      },
       
        
        // set keep prompting user function 
      keepPromptingUser : function (){
        var self = this;

        prompt.get(['guessLetter'], function(error, result) {
          console.log (' The letter you guessed is: ' + result.guessLetter);
          

          //this checks if the letter was found and if it is then it sets that specific letter in the word to be found
          var findUserGuessesCount = self.currentWrd.checkLetter(result.guessLetter);

          console.log("Guess " + findUserGuessesCount);

          //if the user guessed incorrectly minus the number of guesses they have left
          if (findUserGuessesCount === 0) {
            console.log ("incorrect guess!");
            self.guessesRemaining -= 1;

          } else {
            console.log("Yasss, correct guess!");
            //check if you win only when you are right
            if (self.currentWrd.charArray()=== true){
              console.log("You won!");
              return 1; 
            }

             
          }
     
  
          //console.log statements:
          console.log('Guesses remaining: ', self.guessesRemaining);
        console.log(self.currentWrd.displayWord());
        //console.log(self.currentWrd.convertString());
       // console.log(self.currentWrd.checkLetter());
        console.log(self.currentWrd.charArray());
        
        //console.log(self.currentWrd.word);
        console.log('here are the letters you guessed already: ', result.guessLetter);

        // if statements to check guesses remaining 
        if ((self.guessesRemaining > 0) && (self.currentWrd.found == false)){
          self.keepPromptingUser();
        }
        else if(self.guessesRemaining == 0){
          console.log('Game over, but nice try! ');
          console.log('sorry, it\'s all over');
          console.log('The correct city to guess was', self.currentWrd.charArray());
        }else{
          console.log(self.currentWrd.displayWord());
          console.log(self.keepPromptingUser());
        }
        });
      }
  

};

// startgame function goes here?
game.startGame();

// when you type t in new york city the t isnt registering as correct
// its not appearing in the guessed already array




