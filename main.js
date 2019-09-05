/**
 * DEFINITIONS
 * These are like utility libraries
 */
const reg = /[+|*|\-|/]$/;
const regToken = /(\d+\.\d+|\d+\.|\d+|\+|\-|\*|\/)$/; 
// match ending number token w/ decimals, and operator

/**
 * SOURCE-OF-TRUTH
 * This is the state in Angular, React, Vue, etc
 */
var currentFormula = '';
var isLastButtonPressedEqualSign = false;

/**
 * DEPENDENT ON SOURCE-OF-TRUTH
 * Angular, React, Vue's built in way of rendering HTML
 */
var currentValue = ''; // superficial (rendering stuff on screen)
const displayFormula = document.querySelector('#current-formula');
const displayValue = document.querySelector('#current-value');


// 123+567+

/**
 * FUNCTIONS
 */

/* CREATE */
const inputValue = (arg) => {
    if(currentFormula == '0'){
        currentFormula = '';
    } 
    currentFormula = currentFormula + arg; // business-logic
    renderView();
}

const inputOperand = (arg) => {
    // if +-x/ then run
    if(currentFormula.match(reg)){
        currentFormula = currentFormula.slice(0,-1) + arg;
    } else {
        currentFormula = currentFormula + arg; // business-logic
    }
    renderView();
}

const inputDecimal = () => {
    if(currentFormula.match(reg)){
        currentFormula = currentFormula + '0'
    }

    if(currentFormula.substr(-1) !== "." && !currentValue.includes('.')){
        currentFormula = currentFormula + '.';
    }
    renderView();
}

/* DELETE */
const clearAll = () => {
    currentFormula = '0';
    renderView();
}
const clearEntry =() => {
    if(currentFormula === currentValue){
        currentFormula = '0'
    } else {
        currentFormula = currentFormula.slice(0,-currentValue.length);
    }
    renderView();
}

/* UPDATE */
const doComputation = () => {
    isLastButtonPressedEqualSign = true;
    renderView();
}
const changeSign = () => {
    // If currentFormula and currentValue equal, change both signs
    // Disallow multiple - in currentFormula
    if(currentFormula[0] !== '-'){
        currentFormula = '-' + currentFormula;
    } else {
        currentFormula = currentFormula.substring(1);
    }
    renderView();
}

/* RENDER VIEW */
// don't change currentFormula here, just pull that information in
const renderView = () => {
    if(isLastButtonPressedEqualSign){
        currentValue = eval(currentFormula) + '';
        isLastButtonPressedEqualSign = false;
        displayFormula.innerHTML = currentFormula;
        displayValue.innerHTML = currentValue;

        currentFormula = currentValue; // hard reset
    } else {
        currentValue = regToken.exec(currentFormula)[0];
        displayFormula.innerHTML = currentFormula;
        displayValue.innerHTML = currentValue;
    }

    
    console.log("currentFormula", currentFormula);
    console.log('CurrentValue', currentValue);
    console.log('isLastButtonEqualSign',isLastButtonPressedEqualSign)
}

// var myString = "something format_abc";
// var myRegexp = /(?:^|\s)format_(.*?)(?:\s|$)/g;
// var match = myRegexp.exec(myString);
// console.log(match[1]); // abc

// displayFormula.innerHTML = displayFormula.innerHTML + arg;
// document.querySelector('#current-formula').innerHTML = '123123';
// document.querySelector('#current-value').innerHTML = '555';
// document.querySelector()
