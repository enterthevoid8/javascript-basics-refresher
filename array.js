console.log("=== 1. Array Creation ===");
const products = ["Laptop", "Phone", "Tablet"];
console.log(products); // ["Laptop", "Phone", "Tablet"]

console.log("\n=== 2. Array.push(), pop(), shift(), unshift() ===");
products.push("Camera");     // Add to end
products.unshift("Monitor"); // Add to start
console.log(products);       // ["Monitor", "Laptop", "Phone", "Tablet", "Camera"]
products.pop();              // Remove from end
products.shift();            // Remove from start
console.log(products);       // ["Laptop", "Phone", "Tablet"]

console.log("\n=== 3. Array.concat() ===");
const accessories = ["Charger", "Headphones"];
const catalog = products.concat(accessories);
console.log(catalog); // ["Laptop", "Phone", "Tablet", "Charger", "Headphones"]

console.log("\n=== 4. Array.slice() and splice() ===");
const top2 = catalog.slice(0, 2); // non-destructive
console.log(top2); // ["Laptop", "Phone"]
catalog.splice(2, 1, "Smartwatch"); // remove 1 item at index 2, insert new
console.log(catalog); // ["Laptop", "Phone", "Smartwatch", "Charger", "Headphones"]

console.log("\n=== 5. Array.forEach() ===");
catalog.forEach((item, index) => {
  console.log(`Item ${index + 1}: ${item}`);
});

console.log("\n=== 6. Array.map() ===");
const prices = [500, 1200, 800];
const withTax = prices.map(price => price * 1.18);
console.log(withTax); // [590, 1416, 944]

console.log("\n=== 7. Array.filter() ===");
const filtered = withTax.filter(price => price > 1000);
console.log(filtered); // [1416]

console.log("\n=== 8. Array.find() and findIndex() ===");
const firstExpensive = withTax.find(price => price > 900);
const indexExpensive = withTax.findIndex(price => price > 900);
console.log(firstExpensive); // 1416
console.log(indexExpensive); // 1

console.log("\n=== 9. Array.includes(), indexOf(), lastIndexOf() ===");
console.log(catalog.includes("Phone")); // true
console.log(catalog.indexOf("Phone"));  // 1
console.log(catalog.lastIndexOf("Phone")); // 1

console.log("\n=== 10. Array.some() and every() ===");
console.log(prices.some(p => p > 1000));  // true
console.log(prices.every(p => p > 100));  // true

console.log("\n=== 11. Array.reduce() ===");
const total = prices.reduce((sum, p) => sum + p, 0);
console.log(total); // 2500

console.log("\n=== 12. Array.sort() and reverse() ===");
const names = ["Eva", "John", "Zara", "Adam"];
names.sort();
console.log(names); // ["Adam", "Eva", "John", "Zara"]
names.reverse();
console.log(names); // ["Zara", "John", "Eva", "Adam"]

console.log("\n=== 13. Array.fill() and flat() ===");
const filled = new Array(3).fill("N/A");
console.log(filled); // ["N/A", "N/A", "N/A"]
const nested = [1, [2, [3, 4]], 5];
console.log(nested.flat(2)); // [1, 2, 3, 4, 5]

console.log("\n=== 14. Array.from() and isArray() ===");
const str = "code";
console.log(Array.from(str)); // ['c', 'o', 'd', 'e']
console.log(Array.isArray(str)); // false
console.log(Array.isArray(prices)); // true

console.log("\n=== 15. Array.at() ===");
const last = prices.at(-1);
console.log(last); // 800