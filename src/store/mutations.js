const addOneItem = (state, todoItem) => {
  var obj = { completed: false, item: todoItem };
  localStorage.setItem(todoItem, JSON.stringify(obj));
  state.todoItems.push(obj);
};

const removeOneItem = (state, payload) => {
  console.log('remove!');
  console.log('payload : ', payload);
  localStorage.removeItem(payload.todoItem.item);
  state.todoItems.splice(payload.index, 1);
};
const toggleOneItem = (state, payload) => {
  let { todoItem, index } = payload;
  state.todoItems[index].completed = !state.todoItems[index].completed;
  //localStorage에 updateItem 메서드가 없어서 removeItem하고 setItem 한다.
  localStorage.removeItem(todoItem.item);
  localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
};
const removeAllItems = state => {
  localStorage.clear();
  state.todoItems = [];
};
const setTodoItems = (state, items) => {
  state.todoItems = items;
};

export { addOneItem, removeOneItem, toggleOneItem, removeAllItems, setTodoItems };
