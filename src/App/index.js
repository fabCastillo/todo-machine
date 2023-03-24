import React from 'react';
import { AppUI } from './AppUI';
// import './App.css';

const defaultTodos = [
  { text: 'Cortar Cebolla', completed: true },
  { text: 'Tomar el curso de intro a React', completed: false },
  { text: 'Llorar como la llorona', completed: false },
  { text: 'LALALALALALA', completed: true }
]

function App() {
  const [todos, setTodos] = React.useState(defaultTodos);
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
    setTodos(newTodo);
  }
  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex(todo=>todo.text===text);
    const newTodo = [...todos];
    newTodo.splice(todoIndex,1);
    setTodos(newTodo);
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
