async () => {
    const result = transformer.transform(realTransformer, transformCode, code, parser);
    
    const result2 = await Promise.resolve(result);
    
    return result2;
};

const x = () => {
    return runCli();
}

async function runCli() {}
