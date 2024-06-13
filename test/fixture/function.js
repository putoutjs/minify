function hello() {
    return undefined;
}

function getWorld(a, b) {
    if (a)
        return undefined;
    
    return b;
}

console.log(hello(getWorld(1, 2)));
