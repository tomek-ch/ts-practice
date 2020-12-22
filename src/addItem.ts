import { addItem } from './toDoList.js';
import displayItems from './displayItems.js';

const handleAdd = (e: Event): void => {

    const id = Date.now();
    const text = document.querySelector<HTMLInputElement>('#add-text').value;
    
    addItem({ id, text, time: id, completed: false });
    displayItems();

    e.preventDefault();
    (<HTMLFormElement>e.target).reset();
    (<HTMLInputElement>document.querySelector('#add-text')).focus();
};

export default handleAdd;