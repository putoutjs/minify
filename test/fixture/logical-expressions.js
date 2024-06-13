const a = () => {};
const b = () => {};
a() && b;
true && a();
a === true && b();
