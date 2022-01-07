const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});



reader.question("Please make a password containing at least 10 characters!", function(input){
	tokens = input.split(' ');
	
    
    if(input.length < 10){
        console.log('This password is too short')
    } else if(input.length >= 10){
        console.log('Thats a great password!')
    }
    



    // This line closes the connection to the command line interface.
	reader.close()
});