let a = 1;
let b = () => {};
let c = () => {};

if (a)
    b();
else
    c();
    

if (a) {
    console.log('hello')
    return 'hello';
} else {
    console.log('world');
}
