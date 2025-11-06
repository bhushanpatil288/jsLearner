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
    name: "1. if Statement",
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
    name: "2. if-else Statement",
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
    name: "3. if-else Ladder",
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
    name: "4. Nested if-else",
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
    name: "5. switch Case",
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

const functions = [
  {
    id: 15,
    image: jsLogo,
    name: "1. Introduction to Functions",
    title: "Introduction to Functions",
    description: [
      "Functions in JavaScript are reusable blocks of code that perform a specific task. They help make your code modular, readable, and maintainable.",
      "You can define a function once and use it multiple times with different inputs. Functions can take parameters (inputs) and return values (outputs)."
    ],
    codeSnippet: `function greet() {
  console.log("Hello, world!");
}

greet(); // Output: Hello, world!`
  },
  {
    id: 16,
    image: jsLogo,
    name: "2. Function Parameters and Arguments",
    title: "Function Parameters and Arguments",
    description: [
      "Parameters are placeholders defined in the function declaration, and arguments are the actual values passed when calling the function.",
      "You can define multiple parameters and pass values dynamically when invoking the function."
    ],
    codeSnippet: `function add(a, b) {
  console.log(a + b);
}

add(5, 10); // Output: 15`
  },
  {
    id: 17,
    image: jsLogo,
    name: "3. Return Statement",
    title: "Return Statement",
    description: [
      "The 'return' statement allows a function to send a value back to where it was called.",
      "Once a 'return' statement executes, the function stops running."
    ],
    codeSnippet: `function multiply(x, y) {
  return x * y;
}

let result = multiply(4, 3);
console.log(result); // Output: 12`
  },
  {
    id: 18,
    image: jsLogo,
    name: "4. Function Expressions",
    title: "Function Expressions",
    description: [
      "A function expression is when a function is assigned to a variable. It can be anonymous or named.",
      "Unlike function declarations, function expressions are not hoisted — they must be defined before use."
    ],
    codeSnippet: `const greet = function(name) {
  return \`Hello, \${name}!\`;
};

console.log(greet("Alice")); // Output: Hello, Alice!`
  },
  {
    id: 19,
    image: jsLogo,
    name: "5. Arrow Functions",
    title: "Arrow Functions",
    description: [
      "Arrow functions provide a shorter syntax for writing functions and automatically bind the 'this' keyword lexically.",
      "They are especially useful for callbacks and inline functions."
    ],
    codeSnippet: `const square = (n) => n * n;

console.log(square(5)); // Output: 25`
  },
  {
    id: 20,
    image: jsLogo,
    name: "6. Default Parameters",
    title: "Default Parameters",
    description: [
      "Default parameters allow you to set default values for function parameters in case no arguments are provided.",
      "This helps prevent 'undefined' results and makes functions more robust."
    ],
    codeSnippet: `function greet(name = "Guest") {
  console.log(\`Hello, \${name}!\`);
}

greet(); // Hello, Guest!
greet("John"); // Hello, John!`
  },
  {
    id: 21,
    image: jsLogo,
    name: "7. Rest Parameters",
    title: "Rest Parameters",
    description: [
      "Rest parameters allow a function to accept an indefinite number of arguments as an array using the '...' syntax.",
      "This is useful for handling variable-length argument lists."
    ],
    codeSnippet: `function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3, 4)); // Output: 10`
  },
  {
    id: 22,
    image: jsLogo,
    name: "8. Callback Functions",
    title: "Callback Functions",
    description: [
      "A callback function is a function passed as an argument to another function and executed later.",
      "They are commonly used in asynchronous operations like event handling or API calls."
    ],
    codeSnippet: `function greetUser(name, callback) {
  console.log("Hello, " + name);
  callback();
}

function sayBye() {
  console.log("Goodbye!");
}

greetUser("Alice", sayBye);
// Output:
// Hello, Alice
// Goodbye!`
  },
  {
    id: 23,
    image: jsLogo,
    name: "9. Higher-Order Functions",
    title: "Higher-Order Functions",
    description: [
      "A higher-order function is a function that either takes another function as an argument or returns one.",
      "These are powerful tools in JavaScript for functional programming patterns."
    ],
    codeSnippet: `function higherOrder(fn) {
  fn();
}

function sayHello() {
  console.log("Hello!");
}

higherOrder(sayHello); // Output: Hello!`
  },
  {
    id: 24,
    image: jsLogo,
    name: "10. Anonymous Functions and IIFE",
    title: "Anonymous Functions and IIFE",
    description: [
      "Anonymous functions have no name and are often used in places where functions are used only once.",
      "IIFE (Immediately Invoked Function Expressions) are anonymous functions that execute immediately after being defined."
    ],
    codeSnippet: `(function() {
  console.log("This runs immediately!");
})();`
  },
  {
  id: 25,
  image: jsLogo,
  name: "25. Nested Functions",
  title: "Nested Functions",
  description: [
    "A nested function is a function defined inside another function. The inner function has access to the variables and parameters of the outer function through a feature called closure.",
    "Nested functions are useful for creating helper functions that are only relevant within a specific context, preventing unnecessary exposure to the global scope."
  ],
  codeSnippet: `function outerFunction(outerValue) {
  function innerFunction(innerValue) {
    console.log(\`Outer: \${outerValue}, Inner: \${innerValue}\`);
  }

  innerFunction("Hello from Inner!");
}

outerFunction("Hello from Outer!");
// Output: Outer: Hello from Outer!, Inner: Hello from Inner!`
}

];




export { Menu, jsLogo, basics, conditions, functions }