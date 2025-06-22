console.log("=== 1. Creating a Map ===");
const sessionMap = new Map();
sessionMap.set("user1", "active");
sessionMap.set("user2", "inactive");
sessionMap.set("user3", "pending");
console.log(sessionMap); // Map(3) { 'user1' => 'active', ... }

console.log("\n=== 2. Map.set() and get() ===");
sessionMap.set("user4", "active");
console.log(sessionMap.get("user2")); // "inactive"

console.log("\n=== 3. Map.has() ===");
console.log(sessionMap.has("user3")); // true
console.log(sessionMap.has("userX")); // false

console.log("\n=== 4. Map.delete() ===");
sessionMap.delete("user2");
console.log(sessionMap.has("user2")); // false

console.log("\n=== 5. Map.size ===");
console.log(sessionMap.size); // 3

console.log("\n=== 6. Map.clear() ===");
const tempMap = new Map([
  ["a", 1],
  ["b", 2]
]);
tempMap.clear();
console.log(tempMap.size); // 0

console.log("\n=== 7. Iterating with forEach() ===");
sessionMap.forEach((status, user) => {
  console.log(`${user} => ${status}`);
});

console.log("\n=== 8. Map.keys(), values(), entries() ===");
console.log([...sessionMap.keys()]);   // ["user1", "user3", "user4"]
console.log([...sessionMap.values()]); // ["active", "pending", "active"]
console.log([...sessionMap.entries()]); // [["user1", "active"], ...]

console.log("\n=== 9. Using objects as keys ===");
const userObj1 = { id: 1 };
const userObj2 = { id: 2 };
const loginMap = new Map();
loginMap.set(userObj1, "2025-06-21 10:00");
loginMap.set(userObj2, "2025-06-21 11:00");
console.log(loginMap.get(userObj1)); // "2025-06-21 10:00"

console.log("\n=== 10. Converting Map to Array and vice versa ===");
const productMap = new Map([
  ["Laptop", 1200],
  ["Tablet", 800]
]);

const mapToArray = Array.from(productMap);
console.log(mapToArray); // [["Laptop", 1200], ["Tablet", 800]]

const arrayToMap = new Map(mapToArray);
console.log(arrayToMap.get("Tablet")); // 800

console.log("\n=== 11. Chaining .set() ===");
const configMap = new Map()
  .set("theme", "dark")
  .set("language", "en")
  .set("timezone", "UTC");
console.log(configMap); // Map with 3 entries
