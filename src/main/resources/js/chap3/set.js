let s = new Set();
s.add(10);
s.add(5);
s.add(100);
s.add(50);

s.add(5);

console.log(s.size);
console.log(s.has(100));

for (let val of s.values()) {
    console.log(val);
}

for (let val of  s) {
    console.log(val);
}

s.delete(100);
console.log(s.size);
console.log(s.has(100));

s.clear();
console.log(s.size);