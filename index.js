
//Word generation
// var randomWords = require('random-words');
// var randWord = new Word(randomWords(1));
// console.log(randWord);

var inquirer = require ('inquirer'); //for guess input
var randomWords = require('random-words');

function genWord(){ //generate word
    randomWords(1); //our word
};

genWord(); //word generator called

function Guess (){
    inquirer.prompt(
        [{
            name:"guess",
            type: "input",
            message: "Guess a letter!"
        }]).then(reply =>{
            var userInput = reply.guess;
            console.log(reply.guess) // the name of the letter added is what we want
            // we've obtained the letter and now we need to send it to the word constructor so that
            //it can check it against our word
            Word.applyGuess(userInput); //sent to our apply guess method



            
        })
}
