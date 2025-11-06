// lucide icons
import { Menu } from 'lucide-react';

// local images
import jsLogo from '../assets/jsLogo.png'

const basics = [
  {
    id: 1,
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
    id: 2,
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
    id: 3,
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
    id: 4,
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
    id: 5,
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
    id: 6,
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
    id: 7,
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
    id: 8,
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
    id: 9,
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

const conditions = [
  {
    id: 10,
    image: jsLogo,
    name: "10. if Statement",
    title: "if Statement",
    description: [
      "The 'if' statement executes a block of code only if a specified condition is true. It’s the most basic form of decision-making in JavaScript."
    ],
    codeSnippet: `let age = 18;

if (age >= 18) {
  console.log("You are eligible to vote.");
}`
  },
  {
    id: 11,
    image: jsLogo,
    name: "11. if-else Statement",
    title: "if-else Statement",
    description: [
      "The 'if-else' statement provides two paths of execution — one when the condition is true and another when it’s false."
    ],
    codeSnippet: `let age = 16;

if (age >= 18) {
  console.log("You are an adult.");
} else {
  console.log("You are a minor.");
}`
  },
  {
    id: 12,
    image: jsLogo,
    name: "12. if-else Ladder",
    title: "if-else Ladder",
    description: [
      "An 'if-else ladder' allows checking multiple conditions sequentially. As soon as one condition evaluates to true, the corresponding block executes."
    ],
    codeSnippet: `let marks = 85;

if (marks >= 90) {
  console.log("Grade A");
} else if (marks >= 75) {
  console.log("Grade B");
} else if (marks >= 60) {
  console.log("Grade C");
} else {
  console.log("Fail");
}`
  },
  {
    id: 13,
    image: jsLogo,
    name: "13. Nested if-else",
    title: "Nested if-else",
    description: [
      "A nested 'if-else' statement means having one or more 'if' statements inside another. It’s used when multiple layers of decisions are needed."
    ],
    codeSnippet: `let num = 10;

if (num > 0) {
  if (num % 2 === 0) {
    console.log("The number is positive and even.");
  } else {
    console.log("The number is positive but odd.");
  }
} else {
  console.log("The number is negative or zero.");
}`
  },
  {
    id: 14,
    image: jsLogo,
    name: "14. switch Case",
    title: "switch Case",
    description: [
      "The 'switch' statement evaluates an expression and executes code based on matching 'case' labels. It’s often used as a cleaner alternative to long if-else ladders."
    ],
    codeSnippet: `let day = 3;
let dayName;

switch (day) {
  case 1:
    dayName = "Monday";
    break;
  case 2:
    dayName = "Tuesday";
    break;
  case 3:
    dayName = "Wednesday";
    break;
  case 4:
    dayName = "Thursday";
    break;
  case 5:
    dayName = "Friday";
    break;
  default:
    dayName = "Weekend";
}

console.log(dayName); // Wednesday`
  }
]



export { Menu, jsLogo, basics, conditions }