const inputFirst = document.getElementById('input1');
const inputSecond = document.getElementById('input2');
const plusBtn = document.getElementById('plus');
const minusBtn = document.getElementById('minus');
const multBtn = document.getElementById('multiplication');
const divBtn = document.getElementById('division');
const submitBtn = document.getElementById('submit');
const resultElement = document.getElementById('result');
let action = '+';

plusBtn.onclick = () => {
    action = '+';
};

minusBtn.onclick = () => {
    action = '-';
};

multBtn.onclick = () => {
    action = '*';
};

divBtn.onclick = () => {
    action = '/';
};

function printResult(result) {
    if (result < 0) {
        resultElement.style.color = 'red';
    }  else {
        resultElement.style.color = 'green';
    }
    resultElement.textContent = result;
};

function computeNumbersWithAction (valFirst, valSecond, actionSymbol) {
    const numberFirst = Number(valFirst.value);
    const numberSecond = Number(valSecond.value);
    if (actionSymbol == '+') {
        return numberFirst + numberSecond;
    }
    if (actionSymbol == '-') {
        return numberFirst - numberSecond;
    }
    if (actionSymbol == '*') {
        return numberFirst * numberSecond;
    }
    if (actionSymbol == '/') {
        return numberFirst / numberSecond;
    }
};

submitBtn.onclick = () => {
    const result = computeNumbersWithAction(inputFirst, inputSecond, action);
    printResult(result);
};





