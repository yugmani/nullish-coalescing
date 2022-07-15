// Import stylesheets
import './style.css';

// Write Javascript code!

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
console.log(user ?? 'Anonymous'); // Anonymous

user = 'John';
console.log(user ?? 'Anonymous'); // John

//example 2
let firstName = null;
let lastName = null;
let nickName = 'Supercoder';

//shows the first defined value;
console.log(firstName ?? lastName ?? nickName ?? 'Supercoder'); // Supercoder

// Comparison with ||
// **************************************

// The OR || operator can be used in the same way as ??

// For example, in the code above we could replace ?? with || and still get the same result:
console.log(firstName || lastName || nickName || 'Anonymous'); // Supercoder

// The important difference between them is that:

//1. || returns the first truthy value.
//2. ?? returns the first defined value.

// In other words, || doesn’t distinguish between false, 0, an empty string "" and null/undefined.
// They are all the same – falsy values. If any of these is the first argument of ||, then we’ll get the second argument as the result.
// In practice though, we may want to use default value only when the variable is null/undefined. That is, when the value is really unknown/not set.

let height = 0;
console.log(height || 100); //100;
console.log(height ?? 100); // 0

// In practice, the zero height is often a valid value, that shouldn’t be replaced with the default. So ?? does just the right thing.

// Using ?? with && or ||
// **************************************

// Due to safety reasons, JavaScript forbids using ?? together with && and || operators, unless the precedence is explicitly specified with parentheses.

// let x = 1 && 2 ?? 3;  // Error: Unexpected token '??'

// Use explicit parentheses to work around it:
let x = (1 && 2) ?? 3;
console.log(x); // 2;

// ********************************************
// https://devdojo.com/smpnjn/what-is-nullish-coalescing-or-in-javascript
// ********************************************

//Is it set to zero(0)?
let x1 = 0 ?? 'Hello';
console.log('x1: ', x1); //x1: 0

//Is set to goodbye?
let y1 = undefined ?? 'goodbye';
console.log('y1: ', y1); //y1: goodbye

//Is set to hello
let z1 = null ?? 'hello';
console.log('z1: ', z1); //z1: hello

//Is set to false?
let a1 = false ?? 'See you later.';
console.log('a1: ', a1); //a1: false

let b1 = '' ?? 'Nothing!';
console.log('b1: ', b1); //b1:

let d1 = true ?? 'Something';
console.log('d1: ', d1); //d1: true

let e1 = 'Dell' ?? 'Apple';
console.log('e1: ', e1); //e1: Dell

let coalescingFunction = (a) => {
  if (a >= 5) {
    return 'hello world';
  }
};

//Will return 'goodbye world', since the `coalescingFunction(4)` returns undefined.
let coalescingValue = coalescingFunction(4) ?? 'goodbye world';
console.log(coalescingValue); //goodbye world

//Differences between the logical OR operator and Nullish Coalescing operator
// ********************************************

//Is set to 0
let x2 = 0 ?? 5;
console.log('x2: ', x2); //x2: 0

//Is set to 5
let y2 = 0 || 5;
console.log('y2: ', y2); //y2: 5;

//Is set to ""
let x3 = '' ?? 'Default Text';
console.log('x3: ', x3); //x3:

let y3 = '' || 'Default Text';
console.log('y3: ', y3); //y3: Default Text

//Is set to false
let x4 = false ?? 'Default Text';
console.log('x4: ', x4); //x4: false

let y4 = false || 'Default Text';
console.log('y4: ', y4); //y4: Default Text

//Is set to NaN
let x5 = NaN ?? 'Default Text';
console.log('x5: ', x5); //x5: null

let y5 = NaN || 'Default Text';
console.log('y5: ', y5); //y5: Default Text

//Is set to null
let x6 = null ?? 'Default Text';
console.log('x6: ', x6); //x6: Default Text

let y6 = null || 'Default Text';
console.log('y6: ', y6); //y6: Default Text

//Is set to undefined
let x7 = undefined ?? 'Default Text';
console.log('x7: ', x7); //x7: Default Text

let y7 = undefined || 'Default Text';
console.log('y7: ', y7); //y7: Default Text
