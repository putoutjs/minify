const now = new Date();
now.setDate(1);

if (now.getMonth() < 11) {
    // increase month by 1 if it is not currently December
    now.setMonth(now.getMonth() + 1);
} else {
    // else, consider year rollover and go to next January
    now.setMonth(0);
    now.setFullYear(now.getFullYear() + 1);
}

const then = new Date();
then.setFullYear(then.getFullYear() + 1);

const [first] = String(now).split('-');
const [second] = String(then).split('-');

console.log(first === second);
