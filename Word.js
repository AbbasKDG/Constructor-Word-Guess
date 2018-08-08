fs=require('fs')
Letter = require('Letter.js')

Word = function(word){ //word sent from index.js
    this.word=list(word);  // breaks that  word into array

    this.stringWord = function(){  //takes letters and strings them together
        for(i=0;i<this.word;i++){  //
            console.log(Letter.this.word[i].char(this.word[i])) ; // for all letters
            
        }
            
    }

    this.showWord = function(){
        for(i=0;i<this.word;i++){
            console.log(Letter.this.word[i].showLetter(this.word[i]));
            
        }
        

    }

    this.applyGuess= function(guess){
        for(i=0;i<this.word;i++){
            console.log(Letter.this.word[i].checkLetter(guess));
        }
        
    }

}