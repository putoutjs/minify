const noop = () => {};
const getPlaces = noop;
const fn = noop;

for (const a of [...b]) {}

const places = [...getPlaces()];
const a = {
    ...fn(),
};
