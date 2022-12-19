function bmiCalculator (weight, height) {
    
    var bmi = Math.round(weight / Math.pow(height, 2))
    var interpretation
    
    if (bmi >24.9) {interpretation= alert("Your BMI is " + bmi + ", so you are overweight.")
        
    } else if ( bmi <18.5) {interpretation = alert("Your BMI is " + bmi + ", so you are underweight.")
       
   } else {interpretation= alert("Your BMI is " + bmi + ", so you have a normal weight.")
   }
    return interpretation;

}

bmiCalculator(60, 2);