console.log("=== 1. Classic for Loop (Usernames) ===");
const users = ["alice", "bob", "carol", "dave"];
for (let i = 0; i < users.length; i++) {
  console.log(`Welcome, ${users[i]} (user#${i + 1})`);
}

console.log("\n=== 2. while Loop (Retry System) ===");
let retryCount = 0;
const maxRetries = 3;
while (retryCount < maxRetries) {
  console.log(`Retry attempt ${retryCount + 1}`);
  retryCount++;
}

console.log("\n=== 3. do...while Loop (At least once) ===");
let formValid = false;
let attempts = 0;
do {
  console.log(`Validating form... (try ${attempts + 1})`);
  attempts++;
} while (!formValid && attempts < 1); // simulated one attempt

console.log("\n=== 4. for...of Loop (Product Tags) ===");
const tags = ["sale", "exclusive", "limited"];
for (const tag of tags) {
  console.log("Tag:", tag);
}

console.log("\n=== 5. for...in Loop (Product Properties) ===");
const product = {
  id: 101,
  name: "Smartwatch",
  price: 3999,
  available: true
};
for (const key in product) {
  console.log(`${key.toUpperCase()}: ${product[key]}`);
}

console.log("\n=== 6. forEach Loop (Order List) ===");
const orders = [201, 202, 203];
orders.forEach((order, i) => {
  console.log(`Order #${order} at index ${i}`);
});

console.log("\n=== 7. break & continue (Search in Array) ===");
const items = ["pen", "pencil", "eraser", "marker"];
for (let i = 0; i < items.length; i++) {
  if (items[i] === "eraser") continue; // skip
  if (items[i] === "marker") break;    // stop
  console.log("Item:", items[i]);
}

console.log("\n=== 8. Nested for Loops (Inventory Grid) ===");
const inventory = [
  ["item1", "item2"],
  ["item3", "item4"],
];
for (let row = 0; row < inventory.length; row++) {
  for (let col = 0; col < inventory[row].length; col++) {
    console.log(`Slot[${row}][${col}] = ${inventory[row][col]}`);
  }
}

console.log("\n=== 9. Labeled Loop with break ===");
outerLoop: for (let i = 0; i < 2; i++) {
  for (let j = 0; j < 2; j++) {
    if (i === 1 && j === 1) {
      console.log("Breaking outer loop at i=1, j=1");
      break outerLoop;
    }
    console.log(`i=${i}, j=${j}`);
  }
}

console.log("\n=== 10. Loop with filter logic ===");
const transactions = [1200, -500, 800, -200, 1300];
const withdrawals = [];
for (const amount of transactions) {
  if (amount < 0) {
    withdrawals.push(amount);
  }
}
console.log("Withdrawals:", withdrawals);

console.log("\n=== 11. Loop with reduce logic (Total balance) ===");
let balance = 0;
for (const tx of transactions) {
  balance += tx;
}
console.log("Final Balance:", balance);

console.log("\n=== 12. Using Array.some() and Array.every() inside loops ===");
const quizScores = [80, 90, 100, 95];
if (quizScores.every(score => score >= 80)) {
  console.log("Passed all quizzes");
}
if (quizScores.some(score => score === 100)) {
  console.log("Perfect score achieved!");
}
