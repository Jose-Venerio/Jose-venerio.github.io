let randomNumber = Math.floor(Math.random() * 10) + 1;
let userGuess;
let attempts = 0;

// Prompt user for a number between 1 and 10, or type 999 to exit.
userGuess = prompt("Pick a number between 1 and 10, or type 999 to exit");

// Create while loop that continues for as long as the user guesses are incorrect.
while (userGuess != randomNumber) {
// Loop should count the number of guesses.
    attempts += 1;
// Loop should exit if user enters 999 and not display "Too high!"
    if (userGuess == 999) 
        break;
// If the guess is too low, the user should be promped "Too low!" and be able to guess again.
    if (userGuess < randomNumber)
        userGuess = prompt("Too low! Please try again");
// If the guess is too high, the user should be promped 'Too high!" and be able to guess again.
    if (userGuess > randomNumber)
        userGuess = prompt("Too high! Please try again");
// If anything else is entered, the user should be prompted that their input is invalid and 
// to guess again.
    if (userGuess > 10)
        userGuess = prompt("input is invalid Please try again");
    if (userGuess == 0)
        userGuess = prompt("input is invalid Please try again");
// If the guess is correct, the user should be alerted of their win and 
// be told the number of guesses they made.
    if (userGuess == randomNumber)
        window.alert("You Win! You got it in " + (attempts + 1) + " trys");
}