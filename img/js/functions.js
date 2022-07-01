
           
function bmi() {
  var h = document.getElementById("HEIGHT").value;
  var w = document.getElementById("WEIGHT").value;
  var bmi = w / (h / 100 * h / 100);
  var total = bmi.toFixed(2);
  document.getElementById("result").innerHTML = "your BMI index = " + total;
 
  if (bmi < 18.6) 
  result.innerHTML =`YOUR BMI IS <u> Under Weight <u> i.e : <span>${bmi}</span>`;
  else if (bmi >= 18.6 && bmi < 24.9) 
            result.innerHTML = 
                `YOUR BMI IS Normal : <span>${bmi}</span>`;
  
        else result.innerHTML =
            `YOUR BMI IS Over Weight() : <span>${bmi}</span>`;
}
