url = 'https://cdnjs.cloudflare.com/ajax/libs/d3/7.9.0/d3.min.js';
let p;
const document = {
    createElement: () => ({}),
};
(p = document.createElement('script')).type = 'application/javascript', p.src = url;
console.log(p.type);

(function() {
    console.log('hello');
}.call(this));
