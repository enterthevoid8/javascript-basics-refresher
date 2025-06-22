console.log("=== 1. Function Declaration ===");
function greetUser(name) {
  return `Hello, ${name}!`;
}
console.log(greetUser("Guest")); // Hello, Guest!

console.log("\n=== 2. Function Expression ===");
const calculateTotal = function (price, quantity) {
  return price * quantity;
};
console.log(calculateTotal(250, 3)); // 750

console.log("\n=== 3. Arrow Function ===");
const getDiscountedPrice = (price, discount = 0.1) => price * (1 - discount);
console.log(getDiscountedPrice(1000)); // 900

console.log("\n=== 4. Immediately Invoked Function Expression (IIFE) ===");
(function () {
  const time = new Date().toLocaleTimeString();
  console.log("App initialized at:", time);
})();

console.log("\n=== 5. Higher-Order Function ===");
function applyOperation(a, b, operation) {
  return operation(a, b);
}
const sum = (x, y) => x + y;
console.log(applyOperation(5, 7, sum)); // 12

console.log("\n=== 6. Callback Function ===");
function fetchData(callback) {
  const data = { id: 1, title: "Sample" };
  callback(data);
}
fetchData((response) => {
  console.log("Received:", response);
});

console.log("\n=== 7. Recursive Function ===");
function factorial(n) {
  return n <= 1 ? 1 : n * factorial(n - 1);
}
console.log(factorial(5)); // 120

console.log("\n=== 8. Rest Parameters ===");
function logActivities(user, ...activities) {
  console.log(`${user} did:`, activities.join(", "));
}
logActivities("user123", "login", "viewed product", "logout");

console.log("\n=== 9. Default Parameters ===");
function createUser(username = "Anonymous") {
  return { id: Date.now(), username };
}
console.log(createUser()); // { id: ..., username: 'Anonymous' }

console.log("\n=== 10. Closures (Function with private state) ===");
function counter() {
  let count = 0;
  return function () {
    count++;
    return count;
  };
}
const clickCounter = counter();
console.log(clickCounter()); // 1
console.log(clickCounter()); // 2

console.log("\n=== 11. Function.bind() ===");
const user = { name: "Admin" };
function sayHi() {
  console.log(`Hi, I’m ${this.name}`);
}
const boundSayHi = sayHi.bind(user);
boundSayHi(); // Hi, I’m Admin

console.log("\n=== 12. Function.call() and apply() ===");
function showRole(role) {
  console.log(`${this.name} is a ${role}`);
}
const employee = { name: "Alex" };
showRole.call(employee, "Manager");        // Alex is a Manager
showRole.apply(employee, ["Developer"]);  // Alex is a Developer

console.log("\n=== 13. Named vs Anonymous Function ===");
const named = function namedFunc() {
  return "I'm a named function";
};
const anonymous = function () {
  return "I'm an anonymous function";
};
console.log(named());      // I'm a named function
console.log(anonymous());  // I'm an anonymous function

console.log("\n=== 14. Pure Function ===");
function add(a, b) {
  return a + b;
}
console.log(add(2, 3)); // 5 (no side effects)

console.log("\n=== 15. Impure Function ===");
let external = 5;
function impureAdd(x) {
  external += x;
  return external;
}
console.log(impureAdd(2)); // 7 (changes external state)
