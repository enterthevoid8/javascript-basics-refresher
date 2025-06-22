console.log("=== 1. String Creation ===");
const username = "user123";
const welcomeMsg = "  Welcome to the portal!  ";

console.log("\n=== 2. length, toUpperCase(), toLowerCase() ===");
console.log(username.length);           // 7
console.log(username.toUpperCase());   // USER123
console.log(username.toLowerCase());   // user123

console.log("\n=== 3. trim(), trimStart(), trimEnd() ===");
console.log(welcomeMsg.trim());        // "Welcome to the portal!"
console.log(welcomeMsg.trimStart());   // no leading spaces
console.log(welcomeMsg.trimEnd());     // no trailing spaces

console.log("\n=== 4. slice(), substring(), substr() ===");
const sample = "JavaScriptMaster";
console.log(sample.slice(0, 10));       // JavaScript
console.log(sample.substring(4, 10));   // Script
console.log(sample.substr(4, 6));       // Script (deprecated but still works)

console.log("\n=== 5. includes(), startsWith(), endsWith() ===");
const email = "contact@example.com";
console.log(email.includes("@"));           // true
console.log(email.startsWith("contact"));   // true
console.log(email.endsWith(".com"));        // true

console.log("\n=== 6. indexOf(), lastIndexOf() ===");
const path = "/home/user/profile/settings";
console.log(path.indexOf("user"));         // 6
console.log(path.lastIndexOf("/"));        // 24

console.log("\n=== 7. replace(), replaceAll() ===");
const text = "Please visit support portal. Our portal is open 24x7.";
console.log(text.replace("portal", "help center")); // first match
console.log(text.replaceAll("portal", "hub"));      // all matches

console.log("\n=== 8. concat() ===");
const firstName = "Alex";
const lastName = "Morgan";
console.log(firstName.concat(" ", lastName)); // Alex Morgan

console.log("\n=== 9. split() ===");
const tags = "html,css,javascript,react";
const tagArray = tags.split(",");
console.log(tagArray); // ['html', 'css', 'javascript', 'react']

console.log("\n=== 10. repeat() ===");
const separator = "-".repeat(10);
console.log(separator); // ----------

console.log("\n=== 11. padStart(), padEnd() ===");
const orderId = "42";
console.log(orderId.padStart(5, "0")); // 00042
console.log(orderId.padEnd(5, "#"));   // 42###

console.log("\n=== 12. charAt(), charCodeAt(), codePointAt() ===");
const code = "A7";
console.log(code.charAt(0));       // A
console.log(code.charCodeAt(0));   // 65
console.log(code.codePointAt(0));  // 65

console.log("\n=== 13. localeCompare() ===");
console.log("apple".localeCompare("banana"));  // -1 (apple comes before banana)

console.log("\n=== 14. normalize() ===");
const accented = "Café";
const normalized = accented.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
console.log(normalized); // Cafe

console.log("\n=== 15. String.raw (template literal) ===");
const name = "Guest";
console.log(String.raw`Hello\n${name}`); // outputs: Hello\nGuest (no actual newline)
