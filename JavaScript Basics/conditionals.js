// Conditionals
// Conditionals lets us evaluate a condition. Its used for logic.
// If (this is true) { do this }

// To evaluate an expression
x = 5;
y = 10;

if(x < y) {
  console.log('X is smaller than Y');
} else if (y == x) {
  console.log('X is the same as Y');
  // Can have as many else if you want
} else {
  console.log('Y is smaller than X');
  // default fallback if the if or else if's are not true
}

== // 2 equals checking: 1) the value is the same
=== // 3 equals checking 1) the value is the same, 2) theyre the same type (number and number vs number and string) RECOMMEND

let x = 12;
let name = 'Eoin';

if(x === name) {
 // shouldnt work
}

// You might see conditionals written like this:
if(x < y) {
  console.log('X is smaller than Y'); // only shown if true
}

console.log('Y is smaller than X'); // shown if above is false, just exclude the else for brevity


// (condition) ? true : false
x < y ? console.log('x lss than y') : console.log('y less than x');

// Ternary Operator
// Lets evaluate if something is true or not and based on boolean logic, set a value
let canGoIceSkating = (momSaysYes && dadSaysYes) ? true : false; // true : false
// (conditional to evaluate) ? goToRink() : stayHome();
// If both mom and dad say yes, set canGoIceSkating to true, if one of them says no,
// set canGoIceSkating to false
// Shorthand form, really only used with quick evaluations
// condition ? true case : false case

// Switch:
let date = new Date().getDay(); // Sunday: 0, Monday: 1, ..., Saturday: 6 // Today is 2
switch (date) {
  case 1: // Monday
    // doSomething if its Monday
    // got cans
    break; // needed so it stops evaluating, otherwise it will see if date == y, z, a and so on
  case 2:
    // doSomething if its Tuesday
    // got more can
    break;
  case 3:
  case 4:
    // both z & a doSameThing here (if its either Wed. or Thurs.)
    // got pints
  default: // like else
  // doSomething
  // got to Roisin
}

switch(thing to compare) {
  case thing to comapre TO:
  ...
  default:
    //  do this thing
}
