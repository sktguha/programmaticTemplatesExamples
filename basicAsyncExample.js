function basicAsyncExample({ selectedText, log }) {
    // example usage of log function. calling this function will show an information box in vscode
    // This actually calls vscode.window.showInformationMessage
    // NOTE: This function only takes one argument, a string
    log("started timer");
    // resolve a string value, replaced: selection, where selection is the text selected by the user
    return new Promise(res => setTimeout(() => res("replaced: " + selectedText), 2000))
};
module.exports = basicAsyncExample;