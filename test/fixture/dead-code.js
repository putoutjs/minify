'use strict';

function foo() {var x = 1;}
function bar() { var x = f(); }
function baz() {
    debugger;
    var x = 1;
    console.log(x);
    function unused() {
        return 5;
    }
}
export {
    foo,
    bar,
    baz,
}