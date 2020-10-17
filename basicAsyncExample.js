// Please note: selectedText is the first argument( a string) and the second argument is an options object containing various params like absolutePath etc. TODO: document the options passed in the second argument
/**
 * 
 * @param {String} selectedText 
 * @param {Object} options 
 */
function basicAsyncExample( selectedText, { absolutePath }) {
    console.log("started timer");
    // This actually calls vscode.window.showInformationMessage (console.log and console.error are overwritten, so that calls to them 
    // in your script will actually show up in vscode itself as informationMessage or errorMessage. warn and info are NOT supported yet.
    // NOTE: This function is not as powerful as native console.log as arguments passed need to be stringified for display

    // resolve a string value, replaced: selection, where selection is the text selected by the user
    return new Promise(res => setTimeout(() => res("replaced: " + selectedText), 2000))
};
module.exports = basicAsyncExample;
