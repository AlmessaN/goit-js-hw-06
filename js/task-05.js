const nameSpam = document.querySelector('#name-output');
const nameInput = document.querySelector('#name-input');

const onInputPrinting = event => {
    nameSpam.textContent = event.currentTarget.value;
    event.currentTarget.value.trim() === ''? nameSpam.textContent = 'Anonymous': null;
}

nameInput.addEventListener('input', onInputPrinting);