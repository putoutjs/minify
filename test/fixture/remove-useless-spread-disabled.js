const getPlaces = () => [3, 4];
const fn = () => ({});
const b = [1, 2];

for (const a of [...b])
    console.log(a);

const places = [...getPlaces()];
const a = {
    ...fn(),
};

console.log(...places);
console.log(Object.keys(a).length);
