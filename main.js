/**
 * DEFINITIONS
 * These are like utility libraries
 */
const reg = /[+|*|\-|/]$/;
const regToken = /(\d+|\+|\-|\*|\/)$/;

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
    // if not +-x/ then run
    if(!currentFormula.match(reg)){
        currentFormula = currentFormula + arg; // business-logic
        renderView();
    } else {
        // last char is a operand
        currentFormula = currentFormula.slice(0,-1) + arg;
        renderView();
    }
}



const inputDecimal = () => {
    console.log('decimal');
}

/* DELETE */
const clearAll = () => {
    currentFormula = '0';
    renderView();
}
const clearEntry =() => {
    renderView();
}

/* UPDATE */
const doComputation = () => {
    isLastButtonPressedEqualSign = true;
    renderView();
}
const changeSign = () => {
    renderView();
}

/* RENDER VIEW */
// don't change currentFormula here, just pull that information in
const renderView = () => {
    if(isLastButtonPressedEqualSign){
        currentValue = eval(currentFormula);
        isLastButtonPressedEqualSign = false;
        displayFormula.innerHTML = currentFormula;
        displayValue.innerHTML = currentValue;
        
        currentFormula = currentValue +'';
    } else {
        currentValue = regToken.exec(currentFormula)[0]; // else run this
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
