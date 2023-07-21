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

submitBtn.onclick = () => {
    if (action == '+') {
        const sum = Number(inputFirst.value) + Number(inputSecond.value);
        resultElement.textContent = sum;
    } else  if (action == '-') {
        const sum = Number(inputFirst.value) - Number(inputSecond.value);
        resultElement.textContent = sum;
    } else if (action == '*') {
        const sum = Number(inputFirst.value) * Number(inputSecond.value);
        resultElement.textContent = sum;
    } else if (action == '/') {
        const sum = Number(inputFirst.value) / Number(inputSecond.value);
        resultElement.textContent = sum;
    }
};






