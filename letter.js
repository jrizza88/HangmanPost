// Both letter.js and word.js should be constructor files:
// letter.js should control whether or not a letter 
// appears as a "_" or as itself(character) on-screen.
// 
// create a letter class -> new Letter(char)
// property guessedCorrectly[Boolean] to see if letter if guessed
// property character[String] 
// containing the string htis letter object refers to
// create a method called display() to show "_" or character
//// depending upon guessedCorrectly
function Letter(char) {
    this.guessedCorrectly = false;
    this.character = char;
}

Letter.prototype.display = function() {
    if (this.guessedCorrectly === true) {
        return this.character;
    } else {
        return '_';
    }
};

// export letter constructor
module.exports = Letter;
