console.log("=== 1. Number creation and typeof ===");
const price = 1499.99;
const quantity = 3;
const total = price * quantity;
console.log(typeof price); // "number"
console.log("Total:", total); // 4499.97

console.log("\n=== 2. toFixed() - Round to fixed decimal places ===");
console.log(total.toFixed(2)); // "4499.97" (string)

console.log("\n=== 3. toPrecision() - Format with significant digits ===");
console.log(total.toPrecision(4)); // "4500"

console.log("\n=== 4. toString() - Convert number to string ===");
const id = 42;
console.log(id.toString());        // "42"
console.log(id.toString(2));       // "101010" (binary)
console.log(id.toString(16));      // "2a" (hex)

console.log("\n=== 5. Number.isFinite() and isNaN() ===");
console.log(Number.isFinite(100));         // true
console.log(Number.isFinite(Infinity));    // false
console.log(Number.isNaN(NaN));            // true
console.log(isNaN("abc"));                 // true (but typeof is string)

console.log("\n=== 6. Number.parseInt() and parseFloat() ===");
console.log(Number.parseInt("120px"));     // 120
console.log(Number.parseFloat("99.5kg"));  // 99.5
console.log(Number.parseInt("abc"));       // NaN

console.log("\n=== 7. Number.isInteger() and isSafeInteger() ===");
console.log(Number.isInteger(42));         // true
console.log(Number.isInteger(42.5));       // false
console.log(Number.isSafeInteger(2 ** 53)); // false (exceeds JS safe integer)

console.log("\n=== 8. Math.round(), floor(), ceil(), trunc() ===");
const rating = 4.7;
console.log(Math.round(rating)); // 5
console.log(Math.floor(rating)); // 4
console.log(Math.ceil(rating));  // 5
console.log(Math.trunc(rating)); // 4

console.log("\n=== 9. Math.min() and max() ===");
console.log(Math.min(10, 5, 20)); // 5
console.log(Math.max(10, 5, 20)); // 20

console.log("\n=== 10. Math.random() ===");
const randomNumber = Math.floor(Math.random() * 100);
console.log("Random number (0-99):", randomNumber);

console.log("\n=== 11. Math.pow() and sqrt() ===");
console.log(Math.pow(2, 5));  // 32
console.log(Math.sqrt(144)); // 12

console.log("\n=== 12. Formatting as currency (Intl.NumberFormat) ===");
const formatted = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR"
}).format(price);
console.log(formatted); // ₹1,499.99
