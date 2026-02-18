# BMI Calculator

A simple and interactive Body Mass Index (BMI) Calculator web application that calculates your BMI based on height and weight, and provides health category feedback.

## 🎯 Features

- Calculate BMI using height (cm) and weight (kg)
- Input validation for height and weight
- Real-time BMI category display:
  - **Under Weight**: BMI < 18.6
  - **Normal Range**: BMI 18.6 - 24.9
  - **Over Weight**: BMI > 24.9
- Clean and user-friendly interface
- Form submission without page reload

## 🖼️ Preview

The calculator displays:
- Input fields for height (in cm) and weight (in kg)
- Calculate button
- BMI result display
- Weight category message (Under Weight, Normal Range, or Over Weight)

## 🚀 Technologies Used

- HTML5
- CSS3
- Vanilla JavaScript (ES6)
- DOM Manipulation
- Form Validation

## 📂 Project Structure
```
bmi-calculator/
│
├── index.html          # Main HTML structure
├── styles.css          # Styling
├── scriptt.js          # JavaScript logic
└── README.md           # Project documentation
```

## 🛠️ How It Works

### JavaScript Logic:

1. **Form Submission Handler**: Prevents default form submission and page reload
2. **Input Validation**: 
   - Checks if height/weight are valid numbers
   - Ensures values are greater than 0
   - Displays error messages for invalid inputs
3. **BMI Calculation**: Uses the formula `BMI = weight / (height² / 10000)`
4. **Category Display**: Shows appropriate health category based on BMI value

### BMI Formula:
```
BMI = weight (kg) / (height (cm)² / 10000)
```

## 💻 Code Snippet
```javascript
const form = document.querySelector('form');

form.addEventListener('submit', function(e){
  e.preventDefault();
  
  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const result = document.querySelector('#result');
  
  if(height <= 0 || isNaN(height)){
    result.innerHTML = `Please enter a valid height`;
  } else if(weight <= 0 || isNaN(weight)){
    result.innerHTML = `Please enter a valid weight`;
  } else {
    const bmi = (weight/((height*height)/10000)).toFixed(2);
    result.innerHTML = `<span>${bmi}</span>`;
    
    const message = document.querySelector('#message');
    if(bmi > 24.9){
      message.textContent = 'OVER-WEIGHT';
    } else if(bmi >= 18.6 && bmi <= 24.9){
      message.textContent = 'NORMAL-RANGE';
    } else {
      message.textContent = 'UNDER-WEIGHT';
    }
  }
});
```

## 🎓 Learning Outcomes

This project demonstrates:
- Form handling with `addEventListener`
- Using `e.preventDefault()` to prevent default form submission
- Input validation using `parseInt()`, `isNaN()`, and conditional checks
- DOM manipulation with `querySelector`
- Dynamic content updates with `innerHTML` and `textContent`
- Mathematical calculations in JavaScript
- User-friendly error handling

## 🔧 Installation

1. Clone the repository:
```bash
https://github.com/Tejang29
```

2. Navigate to the project directory:
```bash
cd bmi-calculator
```

3. Open `index.html` in your browser:
```bash
open index.html
```

Or simply double-click the `index.html` file.

## 📝 Usage

1. Enter your height in centimeters (e.g., 170)
2. Enter your weight in kilograms (e.g., 65)
3. Click the "Calculate" button
4. View your BMI result and health category

## 📊 BMI Categories

| Category | BMI Range |
|----------|-----------|
| Under Weight | Less than 18.6 |
| Normal Range | 18.6 - 24.9 |
| Over Weight | Greater than 24.9 |

## 🌟 Future Enhancements

- [ ] Add BMI chart/graph visualization
- [ ] Include more detailed health categories (Obese Class I, II, III)
- [ ] Add metric/imperial unit toggle
- [ ] Store calculation history using localStorage
- [ ] Add BMI trend tracking over time
- [ ] Include recommended calorie intake based on BMI
- [ ] Make it responsive for mobile devices
- [ ] Add animations and transitions

## ⚠️ Disclaimer

This BMI calculator is for informational purposes only and should not be used as a substitute for professional medical advice. BMI is a screening tool and does not diagnose body fatness or health. Consult with a healthcare provider for health concerns.

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

https://github.com/Tejang29/Mini-project/new/master/BMI-CALC

---

⭐ If you found this project helpful, please give it a star!

## 📚 Resources

- [WHO BMI Classification](https://www.who.int/news-room/fact-sheets/detail/obesity-and-overweight)
- [CDC BMI Information](https://www.cdc.gov/healthyweight/assessing/bmi/index.html)
