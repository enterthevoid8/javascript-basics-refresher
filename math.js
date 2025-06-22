console.log("=== 1. Math.abs() - Absolute value ===");
const balanceChange = -150;
console.log(Math.abs(balanceChange)); // 150

console.log("\n=== 2. Math.round(), floor(), ceil(), trunc() ===");
const rating = 4.7;
console.log(Math.round(rating)); // 5
console.log(Math.floor(rating)); // 4
console.log(Math.ceil(rating));  // 5
console.log(Math.trunc(rating)); // 4

console.log("\n=== 3. Math.max() and Math.min() ===");
const prices = [120, 550, 300, 900];
console.log(Math.max(...prices)); // 900
console.log(Math.min(...prices)); // 120

console.log("\n=== 4. Math.pow() and Math.sqrt() ===");
console.log(Math.pow(5, 3));     // 125 (5³)
console.log(Math.sqrt(225));     // 15 (√225)

console.log("\n=== 5. Math.random() - Random numbers ===");
const randomNum = Math.floor(Math.random() * 10) + 1; // 1 to 10
console.log("Random (1–10):", randomNum);

console.log("\n=== 6. Math.sign() ===");
console.log(Math.sign(-50)); // -1
console.log(Math.sign(0));   // 0
console.log(Math.sign(42));  // 1

console.log("\n=== 7. Math.cbrt() - Cube root ===");
console.log(Math.cbrt(27));  // 3

console.log("\n=== 8. Math.clz32() - Leading zero bits in 32-bit binary ===");
console.log(Math.clz32(1)); // 31 (binary: 000...0001)
console.log(Math.clz32(1000)); // 22

console.log("\n=== 9. Math.imul() - 32-bit integer multiplication ===");
console.log(Math.imul(2, 4)); // 8
console.log(Math.imul(-1, 8)); // -8

console.log("\n=== 10. Math.log(), log2(), log10() ===");
console.log(Math.log(10));     // natural log (base e)
console.log(Math.log2(8));     // 3
console.log(Math.log10(100));  // 2

console.log("\n=== 11. Math.exp() - e^x ===");
console.log(Math.exp(2)); // ≈ 7.389

console.log("\n=== 12. Math.fround() - 32-bit float rounding ===");
console.log(Math.fround(1.337)); // 1.3370000123977661

console.log("\n=== 13. Math.hypot() - Pythagorean theorem (√x² + y² + ...) ===");
console.log(Math.hypot(3, 4)); // 5 (like a^2 + b^2 = c^2)

console.log("\n=== 14. Math constants ===");
console.log("PI:", Math.PI);             // 3.14159...
console.log("E:", Math.E);               // 2.718...
console.log("SQRT2:", Math.SQRT2);       // 1.414...
console.log("LN2:", Math.LN2);           // 0.693...

console.log("\n=== 15. Trigonometry (in radians) ===");
const angle = Math.PI / 6; // 30 degrees
console.log("sin(30°):", Math.sin(angle)); // 0.5
console.log("cos(30°):", Math.cos(angle)); // ~0.866
console.log("tan(30°):", Math.tan(angle)); // ~0.577
