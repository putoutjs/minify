var a = prompt('Base64 Encode');
var b;
try {
    b = atob(a)
} catch(error) {
    b = error;
}
var c = '\n' + b + '\n';
alert(c);
console.log(c);