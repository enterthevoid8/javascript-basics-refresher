console.log("=== 1. Creating a Set ===");
const onlineUsers = new Set(["user1", "user2", "user3"]);
console.log(onlineUsers); // Set(3) { 'user1', 'user2', 'user3' }

console.log("\n=== 2. Set.add() ===");
onlineUsers.add("user4");
onlineUsers.add("user1"); // Duplicate - ignored
console.log(onlineUsers); // Set(4) { 'user1', 'user2', 'user3', 'user4' }

console.log("\n=== 3. Set.has() ===");
console.log(onlineUsers.has("user3")); // true
console.log(onlineUsers.has("user5")); // false

console.log("\n=== 4. Set.delete() ===");
onlineUsers.delete("user2");
console.log(onlineUsers.has("user2")); // false

console.log("\n=== 5. Set.size ===");
console.log(onlineUsers.size); // 3

console.log("\n=== 6. Set.clear() ===");
const tempTags = new Set(["featured", "popular"]);
tempTags.clear();
console.log(tempTags.size); // 0

console.log("\n=== 7. Iterating over Set ===");
const productIds = new Set([101, 102, 103]);
productIds.forEach(id => console.log("Product ID:", id));
for (const id of productIds) {
  console.log("Loop ID:", id);
}

console.log("\n=== 8. Removing duplicates using Set ===");
const rawData = ["apple", "orange", "apple", "banana", "orange"];
const uniqueFruits = [...new Set(rawData)];
console.log(uniqueFruits); // ['apple', 'orange', 'banana']

console.log("\n=== 9. Set operations: Union, Intersection, Difference ===");
const setA = new Set([1, 2, 3, 4]);
const setB = new Set([3, 4, 5, 6]);

// Union
const union = new Set([...setA, ...setB]);
console.log("Union:", [...union]); // [1, 2, 3, 4, 5, 6]

// Intersection
const intersection = new Set([...setA].filter(x => setB.has(x)));
console.log("Intersection:", [...intersection]); // [3, 4]

// Difference
const difference = new Set([...setA].filter(x => !setB.has(x)));
console.log("Difference (A - B):", [...difference]); // [1, 2]

console.log("\n=== 10. Converting Set to Array and vice versa ===");
const tagSet = new Set(["js", "html", "css"]);
const tagArray = Array.from(tagSet);
console.log(tagArray); // ['js', 'html', 'css']

const restoredSet = new Set(tagArray);
console.log(restoredSet.has("html")); // true
