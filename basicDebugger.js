function basicDebugger(...args) {
    const str = JSON.stringify(args);
    console.log(str);
    return str;
}
module.exports = basicDebugger;
