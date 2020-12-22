import addItem from './addItem.js';
import displayItems from './displayItems.js';

displayItems();
document.querySelector<HTMLFormElement>('#add-form').addEventListener('submit', addItem);