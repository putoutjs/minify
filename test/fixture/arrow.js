const m = f => console.log(f());
const b = 'hello';
const c = 'world';

m(function() {
    return 'start';
});

const a = (b, c) => {
    console.log(b, c);
};
a(b, c);
