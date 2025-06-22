console.log("=== 1. Variable Declarations: let, const, var ===");

let userName = "Guest";       // block-scoped, can be updated
const MAX_LOGIN_ATTEMPTS = 5; // block-scoped, cannot be changed
var legacyId = 101;           // function-scoped (use with care)

console.log(userName, MAX_LOGIN_ATTEMPTS, legacyId);

console.log("\n=== 2. String ===");
const welcomeMsg = "Welcome to the system!";
console.log(welcomeMsg); // String literal
console.log(typeof welcomeMsg); // "string"

console.log("\n=== 3. Number ===");
const price = 149.99;
const quantity = 3;
console.log("Total:", price * quantity); // 449.97
console.log(typeof price); // "number"

console.log("\n=== 4. Boolean ===");
const isLoggedIn = true;
const isExpired = false;
console.log("Session active?", isLoggedIn && !isExpired); // true
console.log(typeof isLoggedIn); // "boolean"

console.log("\n=== 5. Null ===");
let coupon = null; // Explicitly empty
console.log("Coupon applied:", coupon);
console.log(typeof coupon); // "object" (quirk in JS)

console.log("\n=== 6. Undefined ===");
let tempUser;
console.log("Temp user:", tempUser); // undefined
console.log(typeof tempUser); // "undefined"

console.log("\n=== 7. Symbol ===");
const sessionId = Symbol("session-id");
console.log(sessionId);
console.log(typeof sessionId); // "symbol"

console.log("\n=== 8. BigInt ===");
const largeNumber = 9007199254740991n; // > Number.MAX_SAFE_INTEGER
console.log(largeNumber);
console.log(typeof largeNumber); // "bigint"

console.log("\n=== 9. Object ===");
const product = {
  id: 123,
  name: "Laptop",
  price: 74999,
  inStock: true
};
console.log(product);
console.log(typeof product); // "object"

console.log("\n=== 10. Array ===");
const tags = ["electronics", "sale", "new"];
console.log(tags);
console.log(typeof tags); // "object" (Array is an object)

console.log("\n=== 11. Function ===");
function greet(name) {
  return `Hello, ${name}`;
}
console.log(greet("Admin"));
console.log(typeof greet); // "function"

console.log("\n=== 12. typeof Summary ===");
console.log(typeof "Text");        // "string"
console.log(typeof 123);           // "number"
console.log(typeof true);          // "boolean"
console.log(typeof undefined);     // "undefined"
console.log(typeof null);          // "object" (known bug in JS)
console.log(typeof {});            // "object"
console.log(typeof []);            // "object"
console.log(typeof function () {}); // "function"
console.log(typeof 123n);          // "bigint"
console.log(typeof Symbol("x"));   // "symbol"
