// Both letter.js and word.js should be constructor files:
// should contain all of the methods which will check the letters
// guessed versus the random word selected.
var Letter = require('./letter');

// create a Word Constructor -> new Word("apple") 
function Word(wrd) {
    // properties gameWord[String]
    // properties letters[Array] to contain char "a", "p",
    this.gameWord = wrd.toLowerCase();
    this.letters = [];
    // a guessedLetters array of strings
    this.guessedLetters = [];


}

// create a method convertString()
// turn the parameter into an array of LETTERS(letter objects of
// the letter class NOT JUST STRINGS)
Word.prototype.convertString = function() {
    // break up this.gameword
    var brokenWordArray = this.gameWord.split('');

    // ***********using array.forEach iterator****
    // for each string in the brokenWordArray
    brokenWordArray.forEach(function(brokenElement) {
        // create Letters from broken string
        var letterObj = new Letter(brokenElement);
        // push letter objects to this.letters
        this.letters.push(letterObj);
    }, this);
   
};
// methods which will check the letters
// guessed versus
// 
// method called checkLetter(usrGuess[string])
// compare usrGuess to the letters in this.letters
Word.prototype.checkLetter = function(usrGuess) { // same is checkifLetterFound
    // prevent user from guessing twice
    // if usrGuess in guessedArray then somehow stop function
    // and console log ('u guessed that already');
    if (this.guessedLetters.indexOf(usrGuess) > -1) {

        console.log('you guessed that already');
        return;
    }
    for (var i = 0; i < this.letters.length; i++) {
        // grab the current lettr
        var currLet = this.letters[i];
        // check if they have the same character
        if (currLet.character === usrGuess) {
            // change ALL OF THE correct letters guessedCorrectly attribute to true
           // console.log(currLet.character);
            //console.log(usrGuess);
            currLet.guessedCorrectly = true;
           // console.log('you found the letter', usrGuess);
        } 
        //else {
           // currLet.guessedCorrectly = false;
           // console.log('incorrect LETTER', usrGuess);
            //console.log(currLet.character);
            //console.log(usrGuess);
        //}
    }
    // change guessedLetters, to include usrGuess
    this.guessedLetters.push(usrGuess);
}


/*Word.prototype.checkLetter = function(usrGuess){
    var whatToReturn = 0;
    for(var i = 0; i < this.letters.length; i++){
      if(this.letters[i].charac === usrGuess){
        this.letters[i].appear = true;
        whatToReturn += 1;
      }
    } 
    return whatToReturn;
  } */

//Word.prototype.charArray = function() {
  //  var str = [];
    //for (var i = 0; i < this.letters.length; i++){
      //  str += this.letters[i].display();
    //}
   // return str;
//}

Word.prototype.charArray = function() {   // did we find the word?
    // we need to iterate over the letters ARRAY WHICH CONTAINS
    // LETTER OBJECTS and grab all the characters WHICH ARE STRINGS
    var allChars = [];
    for (var i = 0; i < this.letters.length; i++) {
        // grab currentCharacter
        var currChar = this.letters[i].character;
        // push into allChars
        allChars.push(currChar);

    }
    return allChars;
};
// 
// 
// 
// 
// method displayWord() to show the word
// // eg (with apple) appleWrd = new Word('apple');
// with no correct guesses
// appleWrd.displayWord() -> _ _ _ _ _
// with 'p' guessed
// appleWrd.displayWord() -> _ p p _ _
Word.prototype.displayWord = function() {  // wordRender
    // console.log()
    // display letters array
    // create a variable for the displayed letters shownLetter [];
    var shownLetters = [];
    // iterate over array and show each letter

    for (var i = 0; i < this.letters.length; i++) {
        // grab the current letter
        var currLetter = this.letters[i];
        // call display on current letts
        // push to shownLetters
       // shownLetter.push(currLetter.display());
        //shownLetters = shownLetters + this.letters[i].display();
       // console.log("test " + this.letters[i]);
        //console.log("inside the wordDislay :" + shownLetters);
        shownLetters.push(currLetter.display());
    };
    // return letters array
    // 
    return shownLetters;
};
// 
// Word.prototype.checkLetter = function(usrGuess) {
// prevent user from guessing twice
// if usrGuess in guessedArray then somehow stop function
// and console log ('u guessed that already');
//if (this.guessedLetters.indexOf(usrGuess) > -1) {
//    console.log('u guessed that already');
//    return;
//};
//}
//// break this.letters into an array of strings via method call;
//var myChars = this.charArray();
//// allChars now has all the characters
//// if it is in the letters array do one thing
//if (myChars.indexOf(usrGuess) > -1) {
//    // assumin that the allChars index is the same as the letters index
//    // make a variable for the correct position
//    var correctIndex = myChars.indexOf(usrGuess);
//    // grab correct letter
//    var correctLetter = this.letters[correctIndex];
//    currLet.guessedCorrectly = true;
//    // 
//    // **************************
//    // find all matching letters
//    // go through all the letters
//    
// check for the letter again
// // this.checkLetter(usrGuess);
// } else {
// // if not do another
// console.log('youre wrong');
// }
// change guessedLetters, to include usrGuess
// this.guessedLetters.push(usrGuess);
// }
// 
// 
// 
// 
module.exports = Word;
// 
