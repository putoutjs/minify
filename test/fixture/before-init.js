const q = 1,
    signalOptions = {};
function createSignal(e, n) {
    return Object.assign({}, signalOptions, n);
}
const transPending = createSignal(!q);
__minify_log(transPending[q] && transPending || 0);

const c = (e) => e.w;
const w = (c) => c;
function f(e) {
    const { n } = e;
    e.w = n;
    const q = c(e);
    return q && w(q)
}
__minify_log(f({n:1}));