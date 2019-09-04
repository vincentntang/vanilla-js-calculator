/**
 * DEFINITIONS
 * These are like utility libraries
 */
var reg = /[+|x|\-|/]$/;

/**
 * SOURCE-OF-TRUTH
 * This is the state in Angular, React, Vue, etc
 */
var currentFormula = '';
// var currentValue = '';

/**
 * DEPENDENT ON SOURCE-OF-TRUTH
 * Angular, React, Vue's built in way of rendering HTML
 */
var displayFormula = document.querySelector('#current-formula');
// var displayValue = document.querySelector('#current-value');


// 123+567+

/**
 * FUNCTIONS
 */

/* CREATE */
const inputValue = (arg) => {
    currentFormula = currentFormula + arg; // business-logic
    displayFormula.innerHTML = currentFormula; // side-effect
    console.log("arg", arg);
    console.log("currentFormula", currentFormula);
}

const inputOperand = (arg) => {
    if(!currentFormula.match(reg)){
        currentFormula = currentFormula + arg; // business-logic
        displayFormula.innerHTML = currentFormula; // side-effect
    }
    console.log("arg", arg);
    console.log("currentFormula", currentFormula);
}



const inputDecimal = () => {
    console.log('decimal');
}

/* DELETE */
const clearAll = () => {
    console.log('clearAll');
}
const clearEntry =() => {
    console.log('clearEntry');
}

/* UPDATE */
const doComputation = () => {
    console.log('doComputation');
}
const changeSign = () => {
    console.log('changeSign');
}


// displayFormula.innerHTML = displayFormula.innerHTML + arg;
// document.querySelector('#current-formula').innerHTML = '123123';
// document.querySelector('#current-value').innerHTML = '555';
// document.querySelector()
