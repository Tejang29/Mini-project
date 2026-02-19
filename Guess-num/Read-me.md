# Number Guessing Game 🎯

An interactive number guessing game where players try to guess a randomly generated number between 1 and 100 within 10 attempts.

## 🎯 Features

- Random number generation between 1 and 100
- 10 attempts to guess the correct number
- Real-time feedback (too high, too low, or correct)
- Previous guesses tracking
- Remaining attempts counter
- Input validation
- Game over detection
- Restart game functionality
- Clean and modern dark-themed UI

## 🖼️ Preview

The game displays:
- Number input field for guesses
- Submit button
- Previous guesses history
- Remaining attempts counter
- Hint messages (too high/too low)
- Game over message with correct number
- "Start new Game" button after game ends

## 🚀 Technologies Used

- HTML5
- CSS3
- Vanilla JavaScript (ES6)
- DOM Manipulation
- Event Handling
- Math.random() for number generation

## 📂 Project Structure
```
number-guessing-game/
│
├── index.html          # Main HTML structure
├── sty.css             # Game styling
├── scri.js             # Game logic
└── README.md           # Project documentation
```

## 🛠️ How It Works

### Game Flow:

1. **Random Number Generation**: Game generates a random number between 1-100
2. **User Input**: Player enters their guess
3. **Validation**: System validates the input (must be 1-100)
4. **Feedback**: Game provides hints (too high/too low/correct)
5. **Tracking**: Previous guesses and remaining attempts are displayed
6. **Game Over**: After 10 attempts or correct guess, game ends
7. **Restart**: Player can start a new game with a new random number

### Core JavaScript Functions:
```javascript
// Generate random number
let randomNumber = parseInt(Math.random() * 100 + 1);

// Validate user input
function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('Please enter a valid number');
  } else if (guess < 1 || guess > 100) {
    alert('Please enter a number between 1 and 100');
  } else {
    // Process valid guess
  }
}

// Check if guess is correct
function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage('You guessed it right');
    endGame();
  } else if (guess < randomNumber) {
    displayMessage('Number is TOO low');
  } else {
    displayMessage('Number is TOO High');
  }
}
```

## 🎓 Learning Outcomes

This project demonstrates:
- **Math.random()**: Generating random numbers
- **parseInt()**: Converting strings to integers
- **Event Listeners**: Handling form submissions
- **preventDefault()**: Preventing form default behavior
- **DOM Manipulation**: Dynamic content updates
- **Input Validation**: Checking user input validity
- **Game State Management**: Tracking guesses and attempts
- **Dynamic Element Creation**: Creating "New Game" button
- **Array Methods**: Storing and displaying previous guesses
- **Conditional Logic**: Game flow control

## 🔧 Installation

1. Clone the repository:
```bash
git clone https://github.com/Tejang29/number-guessing-game.git
```

2. Navigate to the project directory:
```bash
cd number-guessing-game
```

3. Open `index.html` in your browser:
```bash
open index.html
```

Or simply double-click the `index.html` file.

## 📝 Usage

1. Open the game in your web browser
2. Read the instructions (guess a number between 1-100)
3. Enter your guess in the input field
4. Click "Submit guess" button
5. Read the feedback message:
   - "Number is TOO low" - guess higher
   - "Number is TOO High" - guess lower
   - "You guessed it right" - you won!
6. Track your previous guesses and remaining attempts
7. If you run out of attempts, the game reveals the answer
8. Click "Start new Game" to play again

## 💻 Code Breakdown

### Key Variables:
```javascript
let randomNumber = parseInt(Math.random() * 100 + 1);  // The secret number
let prevGuess = [];        // Array of previous guesses
let numGuess = 1;          // Current attempt number
let playGame = true;       // Game state flag
```

### Key Functions:

| Function | Purpose |
|----------|---------|
| `validateGuess()` | Checks if input is valid (1-100, not NaN) |
| `checkGuess()` | Compares guess with random number |
| `displayGuess()` | Updates UI with guess and remaining attempts |
| `displayMessage()` | Shows feedback messages to player |
| `endGame()` | Disables input, shows "New Game" button |
| `newGame()` | Resets game state for new round |

### Math.random() Explained:
```javascript
Math.random()           // 0.0 to 0.999...
Math.random() * 100     // 0.0 to 99.999...
Math.random() * 100 + 1 // 1.0 to 100.999...
parseInt(...)           // 1 to 100 (integer)
```

## 🎮 Game Rules

- **Range**: Numbers between 1 and 100 (inclusive)
- **Attempts**: 10 guesses maximum
- **Win Condition**: Guess the exact number
- **Lose Condition**: Run out of attempts
- **Validation**: Input must be a valid number between 1-100

## 🌟 Future Enhancements

- [ ] Add difficulty levels (Easy: 1-50, Medium: 1-100, Hard: 1-200)
- [ ] Add timer/speed challenge mode
- [ ] Track high scores and best attempts
- [ ] Add sound effects for feedback
- [ ] Implement hint system (multiples, odd/even)
- [ ] Add animations for correct/wrong guesses
- [ ] Include statistics (win rate, average attempts)
- [ ] Add multiplayer mode
- [ ] Make it responsive for mobile devices
- [ ] Store game history in localStorage

## 🎨 Styling Features

- Dark theme (#212121 background)
- Modern card-based layout
- Centered design with max-width for readability
- Color-coded feedback messages
- Rounded buttons and inputs
- Previous guesses display with background highlight
- Responsive text sizing

## 🐛 Error Handling

The game handles:
- Non-numeric input (NaN)
- Numbers less than 1
- Numbers greater than 100
- Empty input fields
- Multiple clicks after game over

## 👨‍💻 Author

**Tejang29**
- GitHub: [@Tejang29](https://github.com/Tejang29)
- Project Link: [https://github.com/Tejang29/number-guessing-game](https://github.com/Tejang29/number-guessing-game)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 Contact

Project Link: [https://github.com/Tejang29/number-guessing-game](https://github.com/Tejang29/number-guessing-game)

## 🎯 Tips for Players

1. Start with 50 (middle of range)
2. Use binary search strategy
3. Pay attention to "too high" vs "too low" messages
4. Track your previous guesses mentally
5. Average winning attempts: 5-7 guesses with optimal strategy

## 📊 Algorithm: Binary Search Strategy
```
Range: 1-100
Guess 1: 50
- If too high, new range: 1-49
- If too low, new range: 51-100

Guess 2: Middle of new range
Repeat until found

Theoretical minimum: 1 guess (lucky)
Theoretical maximum: 7 guesses (binary search)
Game allows: 10 guesses
```

---

⭐ If you found this project helpful, please give it a star!

## 📚 Resources

- [MDN Math.random()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random)
- [MDN parseInt()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt)
- [JavaScript Game Development Guide](https://javascript.info/)
