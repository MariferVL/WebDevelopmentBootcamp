function fibonacciGenerator (n) {
//Do NOT change any of the code above 👆
    
    //Write your code here:
    var fibonacci_seq = [];
    var num = 0;
    var a = 0;
    var b = 0
    
    while(fibonacci_seq.length < n) {
        fibonacci_seq.push(num);
        
        if (fibonacci_seq.length = 2){
            b = 1
        } else if (fibonacci_seq.length > 2) {
            a = fibonacci_seq[-2];
            b = fibonacci_seq[-1];       
        };
        num = a + b;
        console.log(num);
    }
    return fibonacci_seq;
    
    //Return an array of fibonacci numbers starting from 0.
    
//Do NOT change any of the code below 👇
}

fibonacciGenerator(4);