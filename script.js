// TODO: Solve these problems:

//TODO: #1 Create a one line function that adds two parameters

const sumNum = (a, b) => a + b;

//TODO: Closure: What does the last line return?
const addTo = (x) => (y) => x + y;
let addToTen = addTo(10);
addToTen(3); //* returns 13

//TODO: Currying: What does the last line return?
const sum = (a, b) => a + b;
const curriedSum = (a) => (b) => a + b;
curriedSum(30)(1); //* returns 31

//TODO: Currying: What does the last line return?
const sum2 = (a, b) => a + b;
const curriedSumNumers = (a) => (b) => a + b;
const add5 = curriedSumNumers(5);
add5(12); //* returns 17

//TODO: Composing: What does the last line return?
const compose = (f, g) => (a) => f(g(a));
const add1 = (num) => num + 1;
const add8 = (num) => num + 8;
compose(add1, add5)(10); //* returns 19

//TODO: What are the two elements of a pure function?

//* 1. Deterministic --> always produces the same results given the same inputs
//* 2. No Side Effects -->  It does not depend on any state, or data, change during a program’s execution. It must only depend on its input elements.
