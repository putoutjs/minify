function hi(c) {
    const {a, b} = c;
    console.log(fn(a, b));
}

hi({
    a: 1,
    b: 2,
});

function fn(a, b) {
    return a + b;
}
