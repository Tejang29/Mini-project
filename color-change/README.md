# Color Scheme Switcher

A simple interactive web application that allows users to change the background color of the page by clicking on colored boxes.

## 🎯 Features

- Four clickable color boxes (Grey, White, Blue, Yellow)
- Instant background color change on click
- Clean and responsive design
- Smooth hover effects

## 🖼️ Preview

The application displays four colored boxes arranged in a grid layout. Clicking any box changes the entire page's background to that color.

## 🚀 Technologies Used

- HTML5
- CSS3
- Vanilla JavaScript (DOM Manipulation)

## 📂 Project Structure
```
color-switcher/
│
├── index.html          # Main HTML file
├── style.css           # Styling
├── script.js           # JavaScript logic
└── README.md           # Project documentation
```

## 🛠️ How It Works

1. **HTML Structure**: Contains four `<span>` elements with unique IDs (grey, white, blue, yellow)
2. **CSS Styling**: Each box has a specific background color and border styling
3. **JavaScript Logic**: 
   - Selects all buttons using `querySelectorAll`
   - Adds click event listeners to each button
   - Changes body background color based on clicked button's ID

## 💻 Code Snippet
```javascript
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function(button){
    button.addEventListener('click', function(e){
        body.style.backgroundColor = e.target.id;
    });
});
```

## 🎓 Learning Outcomes

This project demonstrates:
- DOM manipulation with `querySelector` and `querySelectorAll`
- Event handling with `addEventListener`
- Using `event.target` to identify clicked elements
- Dynamic CSS styling with JavaScript
- CSS Grid/Flexbox layout

## 🔧 Installation

1. Clone the repository:
```bash
git clone https:(https://github.com/Tejang29)
```

2. Navigate to the project directory:
```bash
cd color-switcher
```

3. Open `index.html` in your browser:
```bash
open index.html
```

Or simply double-click the `index.html` file.

## 📝 Usage

1. Open the application in a web browser
2. Click on any of the four colored boxes
3. Watch the background color change instantly!

## 🌟 Future Enhancements

- [ ] Add more color options
- [ ] Include color picker functionality
- [ ] Add animations and transitions
- [ ] Save user's preferred color to localStorage
- [ ] Add dark/light mode toggle
- [ ] Make it mobile responsive

## 👨‍💻 Author

Your Name - [Tejang29](https://github.com/Tejang29))

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
(https://github.com/Tejang29)

---

⭐ If you found this project helpful, please give it a star!
