function hi(c) {
    const {a, b} = c;
    fn(a, b);
}

hi();

function fn(a, b) {return a + b}