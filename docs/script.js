const display = document.getElementById('display');

function appendNumber(number) {
  display.innerText += number;
}

function appendOperator(operator) {
  if (display.innerText === '') return;
  const lastChar = display.innerText.slice(-1);
  if (['+', '-', '*', '/'].includes(lastChar)) return;
  display.innerText += operator;
}

function clearDisplay() {
  display.innerText = '';
}

function backspace() {
  display.innerText = display.innerText.slice(0, -1);
}

function calculate() {
  try {
    display.innerText = eval(display.innerText.replace(/÷/g, '/').replace(/×/g, '*'));
  } catch {
    display.innerText = 'Error';
  }
}
