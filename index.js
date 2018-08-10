
//Word generation
var randomWords = require('random-words');

var randWord = JSON.stringify(randomWords(1));





//////////////////////////////////////

//Generate dashes 
function wordCons(word){
    
    this.word = word; 

    this.printThis= function(){
        console.log("Random word: "+word);
    }
    
    
    
    
    
    this.letters= function(){
        
    console.log("Characters for this Word are: "+ word.split(""));
    return word.split("")
    // array= chars.split(",");
    // console.log("And here is the array: "+array)

    }


}

var Game= new wordCons(randWord);
Game.printThis();
var chars =Game.letters();
char=[];
chars.shift();
chars.shift();
chars.slice(chars.length-2);
console.log("Chars is: "+ chars);
for (i=0;i<chars.length-2;i++){
    char.push(chars[i]);
}
console.log(char);
//////////////////////////////////////////////////////

//boxes
var box = [];

function underScore(){
    

    for (i=0;i<char.length;i++){
        box[i]="_";
        
    }
    console.log(box)
}

underScore();

/////////////////////

function reveal(){


    for (i=0;i<char.length;i++){
        console.log(char[i]);
    }
}
////////////////////////////
function userLetter(userGuess){
    for (i=0;i<char.length;i++){
         if(userGuess===char[i]){
             box[i]=char[i];
             console.log(box);
         }
    };
    console.log();
}

///////////////////////////
var inquirer= require("inquirer");

function askForLetter (){
    
    var inquirer = require('inquirer');
    inquirer.prompt([{
            name: "letter",
            type: "input",
            message: "Please type in a letter to guess."

    }]).then(answers => {
        
    console.log(answers.letter)
    var userGuess = answers.letter
    
    userLetter(userGuess);

    // console.log(word.underScores.join(""))
    // console.log(rando)
    // if(word.underScores.join("") != rando){
    //     askForLetter()
    // } else if (word.underScores.join("") == rando ){
    //     console.log("You Win!!!!!!")

    // }
    });
}


askForLetter();



// nul="_";
// for (i=0;i<box.length;){ //work as long as there is an underscore
//     if(box[i]===!nul){
        
//         i+=1;
        
//     }
// }




































// console.log(randWord);

// var inquirer = require ('inquirer'); //for guess input
// var randomWords = require('random-words');

// function genWord(){ //generate word
//     randomWords(1); //our word
// };

// genWord(); //word generator called

// function Guess (){
//     inquirer.prompt(
//         [{
//             name:"guess",
//             type: "input",
//             message: "Guess a letter!"
//         }]).then(reply =>{
//             var userInput = reply.guess;
//             console.log(reply.guess) // the name of the letter added is what we want
//             // we've obtained the letter and now we need to send it to the word constructor so that
//             //it can check it against our word
//             Word.applyGuess(userInput); //sent to our apply guess method
//             joinLetter= Word.underScores.join("")



            
//         })
// }
