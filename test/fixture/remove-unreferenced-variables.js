let a;
let b;

a = 5;
b = 6;

__minify_log(a);

function runUpdates() {
    let t = 1;
    1 ? (t = 0) : 1;
    return t;
}
__minify_log(runUpdates())