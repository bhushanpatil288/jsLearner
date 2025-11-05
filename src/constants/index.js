// lucide icons
import { Menu } from 'lucide-react';

// local images
import jsLogo from '../assets/jsLogo.png'

const basics = [
  {
    image: jsLogo,
    name: "1. Introduction to JavaScript",
    title: "Introduction to JavaScript",
    description: [
      "JavaScript is a powerful, high-level programming language primarily used to make web pages interactive and dynamic. It was created in 1995 by Brendan Eich while he was working at Netscape Communications. Originally, it was developed in just 10 days and was first called Mocha, later renamed LiveScript, and finally released as JavaScript to capitalize on the popularity of Java at the time.",
      "JavaScript was initially designed to add simple interactivity to websites, such as form validation and animations. Over time, it has evolved into a full-fledged programming language that runs on both the client and server (thanks to environments like Node.js). Today, JavaScript powers almost all modern web applications and is one of the core technologies of the web, alongside HTML and CSS."
    ],
    codeSnippet: '',
  },
  {
    image: jsLogo,
    name: "1. Introduction to JavaScript Operators",
    title: "Introduction to JavaScript Operators",
    description: [
      "Operators in JavaScript are special symbols or keywords used to perform operations on values and variables. They allow you to manipulate data, compare values, and perform logical decisions in your code.",
      "For example, the '+' operator adds numbers or concatenates strings, while '===' checks for both value and type equality. Understanding operators is essential to writing effective and efficient JavaScript programs."
    ],
    codeSnippet: 
    `let a = 10;
let b = 5;
let sum = a + b; // 15
console.log(sum);`
  },
  {
    image: jsLogo,
    name: "2. Arithmetic Operators",
    title: "Arithmetic Operators",
    description: [
      "Arithmetic operators are used to perform basic mathematical operations on numbers. These include addition, subtraction, multiplication, division, modulus (remainder), increment, and decrement.",
      "They are the building blocks for any kind of mathematical computation in JavaScript."
    ],
    codeSnippet: 
    `let x = 8;
let y = 3;

console.log(x + y);  // 11 (Addition)
console.log(x - y);  // 5  (Subtraction)
console.log(x * y);  // 24 (Multiplication)
console.log(x / y);  // 2.666... (Division)
console.log(x % y);  // 2  (Remainder)
x++;
console.log(x);      // 9 (Increment)
y--;
console.log(y);      // 2 (Decrement)`
  },
  {
    image: jsLogo,
    name: "3. Assignment Operators",
    title: "Assignment Operators",
    description: [
      "Assignment operators assign values to variables. The most common one is '=', but JavaScript also supports compound assignments that combine arithmetic and assignment in one step.",
      "For example, 'x += 5' adds 5 to the current value of x and updates x."
    ],
    codeSnippet: 
    `let num = 10;
num += 5;  // Equivalent to num = num + 5
console.log(num);  // 15

num *= 2;  // Equivalent to num = num * 2
console.log(num);  // 30`
  },
  {
    image: jsLogo,
    name: "4. Comparison Operators",
    title: "Comparison Operators",
    description: [
      "Comparison operators compare two values and return a boolean (true or false). They are used in decision-making structures like if statements.",
      "The strict comparison operators ('===' and '!==') check both value and type, while the loose ones ('==' and '!=') perform type conversion before comparison."
    ],
    codeSnippet: 
    `let a = 5;
let b = '5';

console.log(a == b);   // true  (loose equality)
console.log(a === b);  // false (strict equality)
console.log(a != b);   // false
console.log(a !== b);  // true
console.log(a > 3);    // true
console.log(a <= 5);   // true`
  },
  {
    image: jsLogo,
    name: "5. Logical Operators",
    title: "Logical Operators",
    description: [
      "Logical operators are used to combine or invert boolean values. They are commonly used in conditional statements and loops.",
      "The main logical operators are AND (&&), OR (||), and NOT (!)."
    ],
    codeSnippet: 
    `let isAdult = true;
let hasID = false;

console.log(isAdult && hasID); // false (both must be true)
console.log(isAdult || hasID); // true (at least one is true)
console.log(!isAdult);         // false (negates the value)`
  },
  {
    image: jsLogo,
    name: "6. String Operators",
    title: "String Operators",
    description: [
      "In JavaScript, the '+' operator is used to concatenate strings. You can also use '+=' to append a string to another.",
      "Template literals (using backticks ``) provide an easier way to combine strings with variables."
    ],
    codeSnippet: `let firstName = 'John';
let lastName = 'Doe';
let fullName = firstName + ' ' + lastName;
console.log(fullName); // John Doe

// Using template literals
let greeting = \`Hello, \${firstName}!\`;
console.log(greeting); // Hello, John!`
  },
  {
    image: jsLogo,
    name: "7. Ternary Operator",
    title: "Ternary Operator",
    description: [
      "The ternary operator is a shorthand for an if-else statement. It takes three operands: a condition, a result if true, and a result if false.",
      "It’s useful for writing concise conditional expressions."
    ],
    codeSnippet: `let age = 20;
let message = age >= 18 ? 'You are an adult.' : 'You are a minor.';
console.log(message); // You are an adult.`
  },
  {
    image: jsLogo,
    name: "8. Type Operators",
    title: "Type Operators",
    description: [
      "JavaScript provides 'typeof' to check the type of a variable and 'instanceof' to test if an object is an instance of a particular class or constructor.",
      "These operators are essential for debugging and type-checking in dynamic code."
    ],
    codeSnippet: `let name = 'Alice';
console.log(typeof name); // string

let date = new Date();
console.log(date instanceof Date); // true`
  }

]


export { Menu, jsLogo, basics }