let a;
let b;

a = 5;
b = 6;

console.log(a);

function runUpdates() {
    let t = 1;
    1 ? t = 0 : 1;
    
    return t;
}
console.log(runUpdates());
