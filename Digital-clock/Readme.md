# Digital Clock

A real-time digital clock web application that displays the current time and updates every second.

## 🎯 Features

- Real-time clock display
- Updates automatically every second
- Clean and minimal interface
- 12-hour format with AM/PM
- Responsive design

## 🖼️ Preview

The clock displays the current time in a readable format (e.g., "2:30:45 PM") and updates in real-time without requiring page refresh.

## 🚀 Technologies Used

- HTML5
- CSS3
- Vanilla JavaScript (ES6)
- DOM Manipulation
- JavaScript Date Object
- setInterval() for real-time updates

## 📂 Project Structure
```
digital-clock/
│
├── index.html          # Main HTML structure
├── styles.css          # Styling
├── script.js           # JavaScript logic
└── README.md           # Project documentation
```

## 🛠️ How It Works

### JavaScript Logic:

1. **Select DOM Element**: Gets the clock display element using `querySelector`
2. **Create Date Object**: Creates a new Date() object to get current time
3. **Format Time**: Uses `toLocaleTimeString()` to format time as readable string
4. **Update Display**: Sets the innerHTML of the clock element
5. **Repeat**: Uses `setInterval()` to execute every 1000ms (1 second)

### Core Function:
```javascript
const clock = document.querySelector('#clock');

setInterval(function(){
    let date = new Date();
    clock.innerHTML = date.toLocaleTimeString();
}, 1000);
```

## 💻 Code Breakdown

### `new Date()`
Creates a JavaScript Date object representing the current date and time.
```javascript
let date = new Date();
console.log(date);  // Mon Feb 19 2026 14:30:45 GMT+0530
```

### `toLocaleTimeString()`
Converts the time to a human-readable format based on locale.
```javascript
date.toLocaleTimeString();  // "2:30:45 PM"
```

### `setInterval()`
Executes a function repeatedly at specified intervals.
```javascript
setInterval(function, milliseconds)
// 1000ms = 1 second
```

## 🎓 Learning Outcomes

This project demonstrates:
- JavaScript `Date` object and its methods
- `setInterval()` for repeated execution
- Real-time DOM manipulation
- `toLocaleTimeString()` for time formatting
- Callback functions with timers
- Live data updates without page refresh

## 🔧 Installation

1. Clone the repository:
```bash
git clone https://github.com/Tejang29/digital-clock.git
```

2. Navigate to the project directory:
```bash
cd digital-clock
```

3. Open `index.html` in your browser:
```bash
open index.html
```

Or simply double-click the `index.html` file.

## 📝 Usage

1. Open the application in a web browser
2. The current time will be displayed
3. Watch as it updates automatically every second
4. No user interaction required!

## ⏰ Time Format Options

You can customize the time display format:
```javascript
// 24-hour format
date.toLocaleTimeString('en-US', { hour12: false });

// Custom format
date.toLocaleTimeString('en-US', {
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit'
});

// With date
date.toLocaleString();  // "2/19/2026, 2:30:45 PM"
```

## 🌟 Future Enhancements

- [ ] Add date display alongside time
- [ ] Toggle between 12-hour and 24-hour format
- [ ] Add timezone selector
- [ ] Include stopwatch functionality
- [ ] Add countdown timer feature
- [ ] Display multiple timezone clocks
- [ ] Add alarm functionality
- [ ] Include animations and transitions
- [ ] Add dark/light theme toggle
- [ ] Make it fully responsive for mobile

## 🔄 Alternative Implementations

### Using Arrow Function:
```javascript
setInterval(() => {
    clock.innerHTML = new Date().toLocaleTimeString();
}, 1000);
```

### Using requestAnimationFrame (smoother):
```javascript
function updateClock() {
    clock.innerHTML = new Date().toLocaleTimeString();
    requestAnimationFrame(updateClock);
}
updateClock();
```

## 📚 JavaScript Concepts Used

### 1. **Date Object**
```javascript
const now = new Date();
now.getHours();        // 14
now.getMinutes();      // 30
now.getSeconds();      // 45
```

### 2. **setInterval()**
```javascript
setInterval(callback, delay);
// Runs callback every 'delay' milliseconds
```

### 3. **Callback Functions**
```javascript
// Function passed as argument
setInterval(function() {
    console.log('Tick');
}, 1000);
```

## 👨‍💻 Author

Tejang29 - [GitHub Profile](https://github.com/Tejang29)

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

Project Link: [https://github.com/Tejang29/digital-clock](https://github.com/Tejang29/digital-clock)

## 🎨 Styling Ideas
```css
/* Example clock styling */
#clock {
  font-family: 'Courier New', monospace;
  font-size: 48px;
  color: #00ff00;
  background-color: #000;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0 0 20px rgba(0, 255, 0, 0.5);
}
```

---

⭐ If you found this project helpful, please give it a star!

## 📖 Additional Resources

- [MDN Date Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)
- [MDN setInterval()](https://developer.mozilla.org/en-US/docs/Web/API/setInterval)
- [JavaScript Timers Guide](https://javascript.info/settimeout-setinterval)
