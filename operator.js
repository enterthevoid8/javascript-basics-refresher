console.log("=== 1. Arithmetic Operators ===");
const price = 1000;
const tax = 180;
console.log("Total:", price + tax);      // 1180
console.log("Discounted:", price - 200); // 800
console.log("Double:", price * 2);       // 2000
console.log("Split in 4:", price / 4);   // 250
console.log("Remainder:", price % 3);    // 1
console.log("Power:", 2 ** 3);           // 8

console.log("\n=== 2. Assignment Operators ===");
let total = 500;
total += 200; // total = total + 200
console.log("Updated total:", total); // 700
total *= 2;
console.log("Doubled total:", total); // 1400

console.log("\n=== 3. Comparison Operators ===");
const age = 25;
console.log(age > 18);   // true
console.log(age === 25); // true
console.log(age !== 30); // true
console.log(age <= 20);  // false

console.log("\n=== 4. Logical Operators ===");
const isVerified = true;
const hasAccess = false;
console.log(isVerified && hasAccess); // false
console.log(isVerified || hasAccess); // true
console.log(!isVerified);             // false

console.log("\n=== 5. Ternary Operator ===");
const status = age >= 18 ? "Adult" : "Minor";
console.log("Status:", status); // Adult

console.log("\n=== 6. Type Operators ===");
console.log(typeof price);     // "number"
console.log(typeof "hello");   // "string"
console.log(typeof null);      // "object"
console.log(typeof undefined); // "undefined"
console.log(price instanceof Number); // false (primitive, not object)

console.log("\n=== 7. Bitwise Operators ===");
console.log(5 & 1); // 1 (0101 & 0001)
console.log(5 | 1); // 5 (0101 | 0001)
console.log(5 ^ 1); // 4 (0101 ^ 0001)
console.log(~5);    // -6 (inverts bits)
console.log(5 << 1); // 10 (left shift)
console.log(5 >> 1); // 2 (right shift)

console.log("\n=== 8. Nullish Coalescing Operator (??) ===");
const userInput = null;
const fallback = "Default";
console.log(userInput ?? fallback); // "Default"

console.log("\n=== 9. Optional Chaining Operator (?.) ===");
const user = { profile: { name: "Guest" } };
console.log(user?.profile?.name);   // "Guest"
console.log(user?.settings?.theme); // undefined

console.log("\n=== 10. Comma Operator ===");
let x = (1 + 2, 3 + 4);
console.log(x); // 7 (last expression result)

console.log("\n=== 11. Unary Operators ===");
let count = 5;
console.log(++count); // 6 (pre-increment)
console.log(count--); // 6 (post-decrement)
console.log(count);   // 5

console.log("\n=== 12. Spread and Rest Operators (...) ===");
const nums = [1, 2, 3];
const copy = [...nums]; // spread
function sumAll(...args) {
  return args.reduce((a, b) => a + b, 0);
}
console.log(sumAll(1, 2, 3, 4)); // 10
