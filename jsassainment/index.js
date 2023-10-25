

// Problem 1: Write a function to calculate the area of a triangle.

// ans:__
        function name(base,height) {
            return((base * height) / 2);
        }
        const ans = name(9,9);
        // console.log(ans);

// Problem 2: Write a function to convert degrees to radians.
 // ans:__
         function name(degrees) {
            return(degrees * (Math.PI / 180))
         }
         const degrees = 360;
         const radians=name(degrees)
        //  console.log(radians);
// Problem 3: Create a function calculateFactorial that takes a number and returns its factorial.
// ans:__
       function calculateFactorial (n) {
       let result = 1;
       for (let i = n; i > 0; i--) {
         result *= i;
       }
       return result;
    }
    //   console.log(calculateFactorial(6));

// Problem 4: Create a function isPrime that takes a number as a parameter and returns true if it's a prime number, and false otherwise.
// ans:__
        function isPrime(n) {
            if (n<2)
            return  false 
                for (let i = 2; i < n; i++) {
                    if(n%i===0){
                        return false
                    }
                }
                return true
            }
            // console.log(isPrime(1));


// Problem 5: Create a function mergeArrays that takes two arrays as parameters and returns a new array that merges both arrays.
// ans:__
         function fruits(fruits1,fruits2) {
            return fruits1.concat(fruits2)
         }
         const fruits1 = ["apple","watermelon","mango"];
         const fruits2 = ["hog plum","orange","banana"];
         const mergeArrays= fruits(fruits1,fruits2);
        //  console.log(mergeArrays);

// Problem 6: Create a function isLeapYear that takes a year as a parameter and returns "This is a leap year" if it's a leap year, and "Not Leap year" otherwise.
// ans:__
function isLeapYear(year) {
    if (year % 400===0 || (year % 4 === 0 && year % 100 !==0)) {
        return "leap year";
    }else {
        return "not leap year"
    }
}
// console.log(isLeapYear(2022));

// Problem 7: Create a function removeDuplicates that takes an array and returns a new array with duplicates removed.
// ans:__
      
       function remove(removeArray) {
        return removeArray.filter((el,index) => removeArray.indexOf(el) === index);
       }
       const numText = ["apple","mango","apple","jackfruit",2,6,7,7,2]

    //    console.log(remove(numText));

// Problem 8: Create a function convertToCelsius that takes a temperature in Fahrenheit and returns the equivalent temperature in Celsius.
// ans:__
        function convertToCelsius(Fahrenheit) {
            let celsius = (Fahrenheit - 32) * 5/9;
            return celsius;
        }
        let toFarenheit = 100;
        let celsiusTemp = convertToCelsius(toFarenheit);
        // console.log(celsiusTemp);

// Problem 9: Write a function to find the maximum of five numbers.
// ans:__
        function maxNum (num1,num2,num3,num4,num5) { 
            return Math.max (num1,num2,num3,num4,num5);
         }
         const number = maxNum(20,12,29,22,100);
        //  console.log(number);

// Problem 10: Create a function called evenOdd() that takes a string as a parameter. Now you have to give the output based on the total number of characters in your String. The output will be 'even' or 'odd'. [ Input: ‘JavaScript’ Output: even, Input: ‘Hello’ Output: odd]
// ans:__
         function evenOdd(oddeven) {
            const length = oddeven.length;
            if (length % 2 ===0) {
                return "even"
            }else {
                return "odd"
            }
         }
         const result1 = evenOdd('javaScript');
         
         const result2 = evenOdd('hello')
        //  console.log(result1);
        //  console.log(result2);



// => Answer any 4 questions.

// 1. Explain the difference between 'if...else' and 'switch' statements for conditional logic.
// ans:__ জাভাস্ক্রিপ্ট (JavaScript) একটি প্রোগ্রামিং ভাষা, যা ওয়েব ডেভেলপমেন্টে ব্যবহৃত হয়। এটি ওয়েব পেজগুলি ডাইনামিক ও ইন্টারেক্টিভ করার জন্য ব্যবহৃত হয|
// -to perform different action/task based on different conditions.
// -very often used.
// -js condition statement:
//       1.if else,
//          a.if,
//          b.else,
//          c.else if,
//       2.switch.
//       -Use switch to specify many alternative blocks of code to be executed.
//       -আমরা জানি if else এর ক্ষেত্রে কন্ডিশন মিলে গেলে এর পরবর্তী ধাপগুলা চেক করা হয় না কিন্তু seitch ক্ষেত্রে কন্ডিশন মিলে গেলেও পরবর্তী যে ধাপগুলো চেক করা হয়
       

// 2. What is JavaScript, and what is its primary purpose in web development?
// ans:__The scope of a variable is the region of space where the value of that variable is valid.

 // There are two types of scope:

//      1:Global Scope
//      2:Local Scope

// 3. Explain the difference between var, let, and const when declaring variables in JavaScript.
// ans:__ Variables defined in the global scope can be accessed anywhere throughout the program.
//      global variables are available from the point they are defined until the end of the scope. 
    //  Variables defined in the local scope are only available inside the functions, loops, or classes in which they are defined.
//      global variables can exist with the same name; however, the compiler will always consider the variables within the local scope     first. This means that global variables will not be called if a similar local variable exists.

// 4. Explain the concept of "scope" in JavaScript and the difference between global and local scope.
// ans:__

// 5. What is the difference between "null" and "undefined" in JavaScript?
// ans:__
// JavaScript is a powerful and efficient scripting language that is used to build dynamic web applications and websites.

// It allows developers to create complex and interactive webpages and applications with the use of different programming techniques and functions.

// JavaScript is used for a wide range of tasks, from creating animations, to developing complex web applications, and from manipulating the Document Object Model (DOM) of a webpage, to creating interactive user interfaces.

// It is also used for creating server-side applications, and for creating mobile applications.

// In sum

