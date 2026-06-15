function a() {
    const hello = {
        world: 1,
    };
    
    const h = '';
    
    switch(h) {
    case '':
        return Object.entries(hello).forEach(([name, value]) => {
            console.log(value);
        });
    }
}
a();
