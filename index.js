const { returns } = require("chai-spies");

function receivesAFunction(callback) {
    callback();
}

function returnsANamedFunction() {
    return returnsANamedFunction;
    
}
function returnsAnAnonymousFunction() {
    return (function () {
        
    })
}
