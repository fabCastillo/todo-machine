import React from 'react';
import { useLocalStorage } from './useLocalStorage';

const TodoContext = React.createContext();

function TodoProvider(props) {
    
    const {
        item: todos, 
        saveItems: saveTodos,
        loading,
        error
    } = useLocalStorage('TODOS_V1', []);

    const [searchValue, setSearchValue] = React.useState('');
    const [openModal, setOpenModal] = React.useState(false);

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
        <TodoContext.Provider value={{
            loading,
            error,
            completedTodos,
            totalTodos,
            searchValue,
            setSearchValue,
            searchedTodos,
            completeTodo,
            deleteTodo,
            openModal,
            setOpenModal
        }}>
            {props.children}
        </TodoContext.Provider>
    )
}

export { TodoContext, TodoProvider }