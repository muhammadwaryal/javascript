console.log("Script start"); 

setTimeout(() => {
  console.log("Timeout 1 (1000ms)"); 
}, 1000);

setTimeout(() => {
  console.log("Timeout 2 (0ms)");  
}, 0);

Promise.resolve().then(() => {
  console.log("Promise 1"); 
});

Promise.resolve().then(() => {
  console.log("Promise 2"); 
});

console.log("Script end");
