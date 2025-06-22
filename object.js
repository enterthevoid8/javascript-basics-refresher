console.log("=== 1. Object.create() - Create object with shared behavior ===");
const baseAccount = {
  login() {
    console.log(`${this.username} logged in.`);
  }
};

const account1 = Object.create(baseAccount);
account1.username = "user123";
account1.email = "user123@example.com";
account1.login(); // user123 logged in

console.log("\n=== 2. Object.assign() - Merge settings ===");
const defaultPrefs = { theme: "light", notifications: true };
const userPrefs = { theme: "dark" };
const finalPrefs = Object.assign({}, defaultPrefs, userPrefs);
console.log(finalPrefs); // { theme: 'dark', notifications: true }

console.log("\n=== 3. Object.keys(), values(), entries() ===");
console.log(Object.keys(account1));    // ['username', 'email']
console.log(Object.values(account1));  // ['user123', 'user123@example.com']
console.log(Object.entries(account1)); // [['username', 'user123'], ['email', 'user123@example.com']]

console.log("\n=== 4. Object.freeze() - Lock role ===");
const role = { type: "editor" };
Object.freeze(role);
role.type = "viewer"; // won't change
console.log(role.type); // editor

console.log("\n=== 5. Object.seal() - Allow edits, not additions ===");
const profile = { name: "Guest", city: "CityX" };
Object.seal(profile);
profile.city = "CityY";      // ✅ allowed
profile.country = "RegionZ"; // ❌ not added
console.log(profile); // { name: "Guest", city: "CityY" }

console.log("\n=== 6. Object.hasOwn() ===");
console.log(Object.hasOwn(account1, "username")); // true
console.log(Object.hasOwn(account1, "login"));    // false (inherited)

console.log("\n=== 7. Object.getOwnPropertyNames() ===");
console.log(Object.getOwnPropertyNames(account1)); // ['username', 'email']

console.log("\n=== 8. Object.defineProperty() ===");
const config = {};
Object.defineProperty(config, "version", {
  value: "v1.0",
  writable: false,
  enumerable: true
});
console.log(config.version); // v1.0
config.version = "v2.0"; // ignored
console.log(config.version); // v1.0

console.log("\n=== 9. Object.getPrototypeOf() and setPrototypeOf() ===");
console.log(Object.getPrototypeOf(account1) === baseAccount); // true
Object.setPrototypeOf(account1, {
  logout() {
    console.log(`${this.username} logged out.`);
  }
});
account1.logout(); // user123 logged out

console.log("\n=== 10. Object.fromEntries() ===");
const kvPairs = [["id", 42], ["active", true], ["role", "member"]];
const objFromPairs = Object.fromEntries(kvPairs);
console.log(objFromPairs); // { id: 42, active: true, role: 'member' }

console.log("\n=== 11. Object.is() ===");
console.log(Object.is(100, 100));   // true
console.log(Object.is(NaN, NaN));   // true
console.log(Object.is(+0, -0));     // false

console.log("\n=== 12. Object.preventExtensions() ===");
const report = { title: "Annual Report" };
Object.preventExtensions(report);
report.author = "System"; // ❌ not added
console.log(report); // { title: "Annual Report" }
