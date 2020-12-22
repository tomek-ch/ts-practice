import displayItems from "./displayItems.js";

interface ToDoItem {
    id: number,
    text: string,
    time: number,
    completed: boolean,
}

let toDoList: ToDoItem[] = JSON.parse(localStorage.getItem('list')) || [];

const setToDoList = (newList: ToDoItem[], rerender: boolean) => {
    toDoList = newList
        .sort((a, b) => Number(b.time) - Number(a.time))
        .sort((a, b) => Number(a.completed) - Number(b.completed));

    rerender && displayItems();
    localStorage.setItem('list', JSON.stringify(toDoList));
};

const addItem = (toDoItem: ToDoItem): void => {
    setToDoList([...toDoList, toDoItem], true);
};

const editText = (id: number, newText: string): void => {
    setToDoList(toDoList.map(item => item.id === id ? { ...item, text: newText, time: Date.now() } : item), false);
};

const toggleCompleted = (id: number): void => {
    setToDoList(toDoList.map(item => item.id === id ? { ...item, completed: !item.completed } : item), true);
};

const removeItem = (id: number): void => {
    setToDoList(toDoList.filter(item => item.id !== id), true);
};

export { toDoList, addItem, editText, toggleCompleted, removeItem };