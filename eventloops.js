let a = 20;
Promise.resolve().then(() =>{ console.log("print from promise1")});
process.nextTick(() => { console.log("print from tick1")});
setTimeout(() =>{console.log("timer1")},0)
process.nextTick(() => { console.log("print from tick2")});
process.nextTick(() => { console.log("print from tick3")});
setTimeout(() =>{console.log("timer2")},0)
console.log(a);

/* OUTPUT
20
print from tick1
print from tick2
print from tick3
print from promise1
timer1
timer2
*/

console.log("start");
Promise.resolve().then(() =>{ console.log("print from promise1")});
setTimeout(() =>{
    process.nextTick(() => { console.log("print from tick1")});
},0)
process.nextTick(() => { console.log("print from tick2")});
setTimeout(() =>{console.log("timer2")},0)
console.log("end");

/* OUTPUT
start
end
print from tick2
print from promise1
print from tick1
timer2
*/

const fs = require('fs');

fs.readFile('./text.txt', 'utf8', (err, data) => { 
    if (err) {
      console.error(err);
      return;
    }
    console.log(data);
});

process.nextTick(() => console.log("Next tick"));
Promise.resolve().then(() => console.log("Promise 1"));
setTimeout(() => console.log("Timer 1"), 0);
setImmediate(() => console.log("Immediate callback"));

for(let i = 0 ; i < 10000000000; i++ ) {} 