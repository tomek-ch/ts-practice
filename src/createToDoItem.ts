import createRemoveBtn from './createRemoveBtn.js';
import createCheckbox from './createCheckbox.js';
import createTextInput from './createTextInput.js';

const createToDoItem = (item) => {
    const li = document.createElement('li');

    const checkbox = createCheckbox(item);
    li.appendChild(checkbox);

    const text = createTextInput(item);
    li.appendChild(text);

    const removeBtn = createRemoveBtn(item);
    li.appendChild(removeBtn);

    return li;
};

export default createToDoItem;