//  FUNCTION

// CHP 35 TO 38

// // Q1 ANSWER

// function currentdate (){

//     document.write(new Date);
// }

// currentdate ();


// // Q2 ANSWER

// function greetUser(firstName, lastName){
//   var fullName = firstName + " " + lastName;
//  alert("Hello " + fullName + " !");   
// }

// greetUser("Noor", "Fatima");


// // Q3 ANSWER

// function addNumber(num1,num2){

//     return num1 + num2;
// }

// var sum = addNumber(5,10);

// console.log(sum);


// // Q4 ANSWER

// function calculator(num1, operator, num2) {
// if(operator === "+"){
//     return num1 + num2;
// }
// else if (operator === "-"){
//     return num1 - num2;
// }
// else if(operator === "*"){
//       return num1 * num2;
// }
// else if(operator === "/"){
//       return num1 / num2;
// }
// else {
//       return "incorrect operator";
// }
//     }



// var result = calculator(5, "+", 10) ;

// console.log(result);


// // Q5 ANSWER


// function squareNumber(number){
//     return number * number;
// }

// var result = squareNumber(5);

// console.log(result);



// // another one

// function squareNumber(number1,number2){
//     return number1 * number2;
// }

// var result = squareNumber(5,5);

// console.log(result);


// // Q6 ANSWER

// function factorial (num) {
//     // initialize the result variable with 1
//     var result = 1;
//     // loop from 1 to num
//     for (let i = 1; i <= num; i++) {
//       // multiply the result by i
//       result = result * i;
//     }
//     // return the final result
//     return result;
//   }
  
//   console.log (factorial (5)); // prints 120
// console.log (factorial (0)); // prints 1
// console.log (factorial (-1)); // prints 1

// // Q7 ANSWER

// function counting(start, end) {
// for(var i = start; i <= end; i++)  {
//     document.write(i + " <br>");
// }
// }

// counting(1, 10);

// // Q8 ANSWER

// function calculateHypotenuse(base, perpendicular)
// {
// function calculateSquare(number) {
   
//     return number * number;
// }
// var baseSquare = calculateSquare(base);
// var perpendicularSquare = calculateSquare(perpendicular);
// var HypotenuseSquare = baseSquare + perpendicularSquare;
// var Hypotenuse = Math.sqrt(HypotenuseSquare);

// return Hypotenuse;
// }

// var Hypotenuse1 = calculateHypotenuse(3,4);

// console.log(Hypotenuse1);


// // Q9 ANSWER

// // function that takes width and height as value 

// function calculateArea(width, height) {
//     return width * height;
// }

// // function that takes width and height  as variables

// function calculateArea2() {
//     var width = 5;
//     var height = 10;
//     return width * height;
// }


// var area1 = calculateArea(5,10);
// console.log(area1);


// var area2 = calculateArea2();
// console.log(area2);


// Q10  ANSWER

function Palindrome(str) {
    var check = "";
    for (var i = str.length - 1;i >=0; i--) {
      check += str[i];
    }
    if(check === str) {
        return true;
    }
    else {
        return false;
    }
}

var result = Palindrome("racecar");
console.log(result);



// Q11  ANSWER

function capitalizeFirstLetter(str) {
    return str.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
 
}
var result = capitalizeFirstLetter('the quick brown fox')
console.log(result)


// Q12  ANSWER

function findLongestWord(str) {
    var words = str.split(' ');
    var longestWord = '';
    for (var i = 0; i < words.length; i++) {
      if (words[i].length > longestWord.length) {
        longestWord = words[i];
      }
    }
    return longestWord;
  }
  
  console.log(findLongestWord('Web Development Tutorial')); // Output: 'Development'
  


  // Q13  ANSWER

  function countOccurrences(str, letter) {
    var count = 0;
    for (var i = 0; i < str.length; i++) {
      if (str.charAt(i) == letter) {
        count += 1;
      }
    }
    return count;
  }
  
  console.log(countOccurrences('JSResourceS.com', 'o')); // Output: 2
  


   // Q14  ANSWER

function calcCircumference(radius) {
    var circumference = 2 * Math.PI * radius;
    return "The circumference is " + circumference;  
}


function calcArea(radius) {
    var area = Math.PI * Math.pow(radius, 2);
    return "The area is " + area;
  }


 var result1 = calcCircumference(5);
console.log(result1);


var result2 = calcArea(5);
  console.log(result2);