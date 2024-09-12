const a = [{b: 'b', c: 'c'}, {b: 'bb', c: 'cc'}];

a.forEach(({b, c}) => {
    console.log(b, c);
});
