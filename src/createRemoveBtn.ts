import { removeItem } from './toDoList.js';

const createRemoveBtn = (item) => {
    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.addEventListener('click', () => removeItem(item.id));
    return removeBtn;
};

export default createRemoveBtn;