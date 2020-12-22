import { toggleCompleted } from './toDoList.js';

const createCheckbox = (item) => {
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = item.completed;
    checkbox.addEventListener('change', () => toggleCompleted(item.id));
    return checkbox;
};

export default createCheckbox;