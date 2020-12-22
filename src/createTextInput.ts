import { editText } from './toDoList.js';

const createTextInput = item => {
    const text = document.createElement('input');
    text.addEventListener('input', e => editText(item.id, (<HTMLInputElement>e.target).value));
    text.value = item.text;
    return text;
};

export default createTextInput;