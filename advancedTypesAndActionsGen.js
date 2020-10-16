// TODO: add detailed explanations and how to use it
function capitalize(word) {
    return word[0].toUpperCase() + word.slice(1).toLowerCase();
}

function lower(word) {
    return word[0].toLowerCase() + word.slice(1);
}

function genActions(typeString, typeFileName, absolutePath) {
    const actionString = '' || typeString.split("_").map(wd => capitalize(wd.toLowerCase())).join("");
    const tmap = [typeString, `${typeString}_STARTED`, `${typeString}_SUCCESS`, `${typeString}_FAILURE`];
    const amap = [actionString, `${actionString}Started`, `${actionString}Success`, `${actionString}Failure`];
    return amap.map((act, i) => `export const ${lower(act)} = (payload) => ({\n  type: ${typeFileName}.${tmap[i]},\n  payload,\n});`).join("\n\n") + "\n";
}

function genTypes(typeString) {
    return [typeString, `${typeString}_STARTED`, `${typeString}_SUCCESS`, `${typeString}_FAILURE`].map(str => `export const ${str} = '${str}';`).join('\n');
}

function replacer({ selectedText, store, log, absolutePath }) {
    log(absolutePath);

    const [fname, ...args] = selectedText.split(",").map(s => s.trim());
    if (!selectedText) return genActions(store.typeString, store.typeFileName, absolutePath);

    if (fname === "gt" || fname === "genTypes") {
        const [typeString, typeFileName] = args;
        store.typeString = typeString;
        const typeFileNameFromAbsPath = absolutePath.split("/").pop().split(".")[0];
        // log(typeFileNameFromAbsPath);
        store.typeFileName = typeFileName || typeFileNameFromAbsPath;
        return genTypes(typeString);
    } else {
        log("unknown function: " + fname);
    }
}
module.exports = replacer;
