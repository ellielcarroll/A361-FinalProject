//Javascript Source Code

//Static Scoping:
let a = 1; // global variable

function innerStatic() {
  console.log('The static scoping result of a is: ', a);
}

function outerStatic() {
  let a = 2; // local variable 
  innerStatic();
}
outerStatic(); // static scoping will return the global variable a = 1


// Simulated Dynamic Scoping:
function innerFunctionWithArg(contextValue) {
  console.log('The dynamic-simulated scoping result of a is: ', contextValue);
}

function dynamicScoping() {
  let a = 3; // local variable
  innerFunctionWithArg(a);
}

dynamicScoping(); //


// Dynamic Binding:
let dynamicVar = 42; // dynamic data type, given an integer 
console.log(typeof dynamicVar); // return the type integer

dynamicVar = "Ellie"; // the variable is dynamically rebound to a string
console.log(typeof dynamicVar); // return the type string

dynamicVar = true; // the variable is dynamically rebound to a boolean
console.log(typeof dynamicVar); // return the type boolean


// Variable shadowing, Edge cases, and Closures:
// variable function shadowing with var
var b = 10; // global scope variable 

function varShadow() {
  var b = 20; // function scope variable with shadowing
  console.log('The variable shadowing result of b is: ', b); // will return b = 20
}

console.log('The variable b is:', b); // returns global
varShadow(); // returns shadowed b


//variable shadowing with let and const
let c = 50; // outer block scope variable
console.log('The variable c is: ', c)

if (true) {
  let c = 100; // inner block scope variable with shadowing
  console.log('The variable shadowing result of c is: ', c) // returns shadowed c
}

// closure with currying
const add = (x) => {
  // return y has a closure over variable x
  return (y) => {
      // return z has a closure over variable x
    return (z) => {
      return x + y + z;
    };
  };
};

const result = add(1)(2)(3);
console.log('The curried closure over x,y,z is: ', result)
