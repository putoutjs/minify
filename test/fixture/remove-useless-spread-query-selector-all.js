const document = {
    querySelectorAll: selector => new Set([1]),
};
const elms = [...document.querySelectorAll('div')];

elms.map(e => {
    console.log(e);
});
