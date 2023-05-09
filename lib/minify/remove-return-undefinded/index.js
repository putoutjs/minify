export const report = () => `Remove 'return undefined'`;

export const match = () => ({
    'return undefined': check,
    'return void 0': check,
});

export const replace = () => ({
    'return undefined': '',
    'return void 0': '',
});

function check(vars, {parentPath}) {
    if (!parentPath.isBlockStatement())
        return false;
    
    return parentPath.parentPath.isFunction();
}
