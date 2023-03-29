import React from 'react';
import { AppUI } from './AppUI';

function useLocalStorage(itemName, initValue) {
  const localStorageItems = localStorage.getItem(itemName);
  let parsedItem;
  if (localStorageItems) {
    parsedItem = JSON.parse(localStorageItems);
  }else{
    localStorage.setItem(itemName, JSON.stringify(initValue))
    parsedItem = initValue;
  }
  const [item, setItem] = React.useState(parsedItem)
  const saveItems = (newItems) => {
    const stringifiedItems = JSON.stringify(newItems);
    localStorage.setItem(itemName, stringifiedItems);
    setItem(newItems);
  }
  return [
    item,
    saveItems
  ];
}
function App() {
  const [todos, saveTodos] = useLocalStorage('TODOS_V1', []);
  
  const [searchValue, setSearchValue] = React.useState('');
  const completedTodos = todos.filter(todo=> todo.completed).length;
  const totalTodos = todos.length;

  let searchedTodos = [];
  if (searchValue.length === 0 ) {
    searchedTodos = todos;
  }else{
    searchedTodos = todos.filter(todo=>{
      const todoText = todo.text.toLocaleLowerCase();
      const searchText = searchValue.toLocaleLowerCase();
      return todoText.includes(searchText);
    })
  }

  
  const completeTodo = (text) => {
    const todoIndex = todos.findIndex(todo=>todo.text===text);
    const newTodo = [...todos];
    newTodo[todoIndex].completed = !newTodo[todoIndex].completed;
    saveTodos(newTodo);
  }
  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex(todo=>todo.text===text);
    const newTodo = [...todos];
    newTodo.splice(todoIndex,1);
    saveTodos(newTodo);
  }
  return (
    <AppUI
      completedTodos={completedTodos}
      totalTodos={totalTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedTodos={searchedTodos}
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}
    />
  );
}

export default App;
