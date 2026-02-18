const form = document.querySelector('form');

form.addEventListener('submit', function(e){
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const result = document.querySelector('#result');
   
  if(height <= 0 || isNaN(height)){
    result.innerHTML = `plz enter a valid height`;
  } else if(weight <= 0 || isNaN(weight)){
    result.innerHTML = `plz enter a valid weight`;
  } else {
    const bmi = (weight/((height*height)/10000)).toFixed(2);
    result.innerHTML = `<span>${bmi}</span>`;
    
    // ADD THESE LINES HERE (inside else block)
    const message = document.querySelector('#message');
    if(bmi > 24.9){
      message.textContent = 'OVER-WEIGHT';
    } else if(bmi >= 18.6 && bmi <= 24.9){
      message.textContent = 'NORMAL-RANGE';
    } else {
      message.textContent = 'UNDER-WEIGHT';
    }
  } // ← This closes the else block
}); // ← This closes addEventListener
