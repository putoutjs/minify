const a = [1, 2];
const [tmp] = a;

a[1] = a[0];
a[0] = tmp;

console.log(a);
