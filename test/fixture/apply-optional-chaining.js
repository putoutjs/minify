const a = {
    b: {
        c: 1,
    },
};

if (a && a.b && a.b.c)
    console.log(a.b.c);

const Transition = {};
Transition && (Transition.running = !1);
