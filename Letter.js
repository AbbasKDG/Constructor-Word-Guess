
var Letter = function(alphabet){ // letter takes an alphabet as dictated by word gen
    this.char = alphabet;  // Letter.char = the set alphabet
    this.reveal = false;  //default state of letter is false
    
    this.showLetter = function(){ //checks if letter has been revealed or not
        if(reveal===true){ //checks reveal bolaeen
            console.log(char);
        } else {
            console.log(_)
        }
    }

    this.checkLetter= function(guess){
        if (reveal===false){
            if (guess===char){
                reveal=true;
            }

        }
    }

    

}
