console.log("=== 1. Variable Declaration Statements ===");
let name = "User";
const MAX_RETRIES = 3;
var legacyVar = "OldVar";
console.log(name, MAX_RETRIES, legacyVar);

console.log("\n=== 2. if / else if / else ===");
const age = 20;
if (age < 13) {
  console.log("Child");
} else if (age < 18) {
  console.log("Teen");
} else {
  console.log("Adult");
}

console.log("\n=== 3. switch Statement ===");
const status = "pending";
switch (status) {
  case "active":
    console.log("User is active");
    break;
  case "inactive":
    console.log("User is inactive");
    break;
  case "pending":
    console.log("User approval is pending");
    break;
  default:
    console.log("Unknown status");
}

console.log("\n=== 4. for Loop ===");
for (let i = 1; i <= 3; i++) {
  console.log("Step", i);
}

console.log("\n=== 5. while Loop ===");
let retry = 0;
while (retry < MAX_RETRIES) {
  console.log(`Attempt ${retry + 1}`);
  retry++;
}

console.log("\n=== 6. do...while Loop ===");
let count = 0;
do {
  console.log("Processing...");
  count++;
} while (count < 1);

console.log("\n=== 7. break and continue ===");
for (let i = 1; i <= 5; i++) {
  if (i === 3) continue;
  if (i === 4) break;
  console.log("Loop value:", i);
}

console.log("\n=== 8. try / catch / finally ===");
try {
  const data = JSON.parse('{"valid": true}');
  console.log("Parsed:", data);
} catch (error) {
  console.log("Invalid JSON:", error.message);
} finally {
  console.log("Attempted to parse JSON.");
}

console.log("\n=== 9. function Statement ===");
function greet(user = "Guest") {
  return `Hello, ${user}!`;
}
console.log(greet("Alex"));

console.log("\n=== 10. return Statement ===");
function isAdult(age) {
  if (age < 18) return false;
  return true;
}
console.log("Is adult?", isAdult(20));

console.log("\n=== 11. throw Statement ===");
function checkPermission(role) {
  if (role !== "admin") {
    throw new Error("Access denied");
  }
  return "Access granted";
}
try {
  console.log(checkPermission("user"));
} catch (e) {
  console.log("Error:", e.message);
}

console.log("\n=== 12. label + break (rare case) ===");
outerLoop: for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    if (i === 1 && j === 1) break outerLoop;
    console.log(`i=${i}, j=${j}`);
  }
}
