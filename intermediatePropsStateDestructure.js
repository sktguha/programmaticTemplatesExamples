// This semi automates props & state destructuring, esp if you have lots of this.props.someProp statements lying around in your render functions or elsewhere. 
// Meant for use with the vscode extension: https://github.com/sktguha/programmaticTemplates
// Won't fully automate it though. TODO: Will post better instructions on how to use
// but should be possible to figure it out by looking at the code. The code is not that complicated 
// So if you have codebase like 
// this.props.someFn(); 
// console.log(this.props.someProp);
// etc and want to convert to destructure form , like 
// const { someFn, someProp } = this.props
// someFn();
// console.log(someProp);
// this will help
function propsStateAutoFixer(selectedText, { store }) {
    selectedText = selectedText.trim();
    // TODO: can probably output and flush the store, for both props and states destructure statements at once, if no selected text is detected. 
    // but have to check also if store.props is non empty before outputting: const { prop1, prop2 } = this.props , similiar for state.
    if (selectedText === "ps") {
        console.log('flush state', store.states, ' from cache');
        const str = 'const {' + store.states.join(',') + '} = this.state;'
        store.states = [];
        return str;
    } else if (!selectedText || selectedText === "pp") {
        console.log('flush', store.props, ' from cache');
        const str = 'const {' + store.props.join(',') + '} = this.props;'
        store.props = [];
        return str;
    }
    if (selectedText.includes('props')) {
        store.props = store.props || [];
        const prop = selectedText.split('.').pop();
        store.props.push(prop);
        return prop;
    } else if (selectedText.includes('state')) {
        store.states = store.states || [];
        const state = selectedText.split('.').pop();
        store.states.push(state);
        return state;
    }
}
module.exports = propsStateAutoFixer;
