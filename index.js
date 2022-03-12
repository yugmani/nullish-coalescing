// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

// Nullish coalescing operator '??'
// ************************************************

// The nullish coalescing operator is written as two question marks ??.

// The result of a ?? b is:

//1. if a is defined, then a,
//2. if a isn’t defined, then b.

// In other words, ?? returns the first argument if it’s not null/undefined. Otherwise, the second one.

// It’s just a nice syntax to get the first “defined” value of the two.

// Equivalent to:
// result = (a !== null && a !== undefined) ? a : b;

// The common use case for ?? is to provide a default value for a potentially undefined variable.

//example 1
let user;
console.log(user ?? "Anonymous");     // Anonymous

user = "John";
console.log(user ?? "Anonymous");     // John

//example 2
let firstName = null;
let lastName = null;
let nickName = "Supercoder";

//shows the first defined value;
console.log(firstName ?? lastName ?? nickName ?? "Supercoder");   // Supercoder
