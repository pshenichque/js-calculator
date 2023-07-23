const inputFirst = document.getElementById('input1');
const inputSecond = document.getElementById('input2');
const plusBtn = document.getElementById('plus');
const minusBtn = document.getElementById('minus');
const multBtn = document.getElementById('multiplication');
const divBtn = document.getElementById('division');
const submitBtn = document.getElementById('submit');
const resultElement = document.getElementById('result');
let action = '+';

// plusBtn.onclick = () => {
//     action = '+';
// };

// minusBtn.onclick = () => {
//     action = '-';
// };

// multBtn.onclick = () => {
//     action = '*';
// };

// divBtn.onclick = () => {
//     action = '/';
// };

// Делегирование событий https://learn.javascript.ru/switch
document.getElementById('js-actions').onclick = (event) => {
    let sign = event.target.dataset.action;
    if (!sign) { return }
    switch(sign) {
        case 'plus': action = '+'; break;
        case 'minus': action = '-'; break;
        case 'mult': action = '*'; break;
        case 'div': action = '/'; break;
        case 'equal': onEqual(); break;
    }
};

function printResult(result) {
    if (result < 0) {
        resultElement.style.color = 'red';
    }  else {
        resultElement.style.color = 'green';
    }
    resultElement.textContent = result;
};

// Делегирование событий https://learn.javascript.ru/switch
function computeNumbersWithAction (valFirst, valSecond, actionSymbol) {
    const numberFirst = Number(valFirst.value);
    const numberSecond = Number(valSecond.value);
    // if (actionSymbol === '+') {
    //     return numberFirst + numberSecond;
    // }
    // if (actionSymbol ==='-') {
    //     return numberFirst - numberSecond;
    // }
    // if (actionSymbol === '*') {
    //     return numberFirst * numberSecond;
    // }
    // if (actionSymbol ==='/') {
    //     return numberFirst / numberSecond;
    // }
    switch(actionSymbol) {
        case '+': return numberFirst + numberSecond;
        case '-': return numberFirst - numberSecond;
        case '*': return numberFirst * numberSecond;
        case '/': return numberFirst / numberSecond;
    }
};

const onEqual = () => {
    const result = computeNumbersWithAction(inputFirst, inputSecond, action);
    printResult(result);
};


// Свитч вообще имба пиздец запомнить! https://seanbarry.dev/posts/switch-true-pattern
// switch(true) {
//     case action === '+' || action === '-': 
// }







