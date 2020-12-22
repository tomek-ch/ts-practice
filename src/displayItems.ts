export {};
import { toDoList, removeItem, editText, toggleCompleted } from './toDoList.js';
import createToDoItem from './createToDoItem.js';

const displayItems = (): void => {
    document.querySelector<HTMLUListElement>('ul').remove();
    const list = document.createElement('ul');

    toDoList.forEach(item => {
        list.appendChild(createToDoItem(item));
    });

    document.body.appendChild(list);
};

export default displayItems;