console.log("=== 1. Performance Measurement with console.time() ===");
console.time("Processing");

const bigArray = Array.from({ length: 1e6 }, (_, i) => i * 2);
const filtered = bigArray.filter(n => n % 3 === 0);

console.timeEnd("Processing"); // Shows time taken in ms

console.log("\n=== 2. console.log(), warn(), error(), table() ===");
const user = { id: 101, name: "Guest", role: "member" };
console.log("User Info:", user);
console.warn("This is a warning about quota.");
console.error("Something failed during fetch!");
console.table([user]);

console.log("\n=== 3. Debugging with debugger keyword ===");
function testDebugger(a, b) {
  debugger; // Triggers breakpoint in browser dev tools
  return a + b;
}
testDebugger(10, 20);

console.log("\n=== 4. Using performance.now() for high-precision timing ===");
const start = performance.now();
let total = 0;
for (let i = 0; i < 1e5; i++) total += Math.sqrt(i);
const end = performance.now();
console.log(`Loop duration: ${(end - start).toFixed(2)}ms`);

console.log("\n=== 5. Avoiding layout thrashing ===");
const box = document.createElement("div");
document.body.appendChild(box);
box.style.width = "100px";
box.style.height = "100px";
box.style.background = "blue";

// ❌ inefficient: read + write repeatedly
for (let i = 0; i < 100; i++) {
  box.style.width = `${100 + i}px`;
  const height = box.clientHeight; // forces reflow
}

// ✅ better: use a batch read/write strategy (here just for demo)

console.log("\n=== 6. Memoization for heavy function ===");
const factorialMemo = (() => {
  const cache = {};
  return function f(n) {
    if (n in cache) return cache[n];
    if (n <= 1) return 1;
    cache[n] = n * f(n - 1);
    return cache[n];
  };
})();
console.log("Factorial 10:", factorialMemo(10));

console.log("\n=== 7. Debouncing (limit high-frequency events) ===");
function debounce(fn, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), delay);
  };
}
const logInput = debounce((value) => console.log("Search for:", value), 300);
// Simulated usage
logInput("hel");
logInput("hell");
logInput("hello"); // Only "hello" gets logged after 300ms

console.log("\n=== 8. Throttling (limit rate of execution) ===");
function throttle(fn, interval) {
  let last = 0;
  return function (...args) {
    const now = Date.now();
    if (now - last >= interval) {
      last = now;
      fn.apply(this, args);
    }
  };
}
const resizeLogger = throttle(() => console.log("Resize event"), 1000);
// Simulated usage
resizeLogger(); // Allowed
setTimeout(resizeLogger, 500);  // Skipped
setTimeout(resizeLogger, 1100); // Allowed

console.log("\n=== 9. Avoiding memory leaks (event cleanup) ===");
function setup() {
  const element = document.createElement("button");
  element.textContent = "Click";
  document.body.appendChild(element);

  const handleClick = () => console.log("Clicked");
  element.addEventListener("click", handleClick);

  // Simulate cleanup
  setTimeout(() => {
    element.removeEventListener("click", handleClick);
    element.remove();
    console.log("Cleaned up");
  }, 3000);
}
setup();
