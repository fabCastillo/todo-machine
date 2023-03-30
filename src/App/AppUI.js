import React from 'react';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';

function AppUI({
    loading,
    error,
    completedTodos,
    totalTodos,
    searchValue,
    setSearchValue,
    searchedTodos,
    completeTodo,
    deleteTodo
}) {
    return ( 
        //React.Fragment para reemplazar el div.
        <React.Fragment>
            <TodoCounter
                completed={completedTodos}
                total={totalTodos}
            />
            <TodoSearch
                searchValue={searchValue}
                setSearchValue={setSearchValue}
            />
            <TodoList>

                { error && <p>Error, por favor desesperate</p> }
                { loading && <p>Cargando...</p> }
                { (!loading && !searchedTodos.length) && <p>Crea tu primer TODO!</p> }
                
                { searchedTodos.map(todo => (
                    <TodoItem 
                        key={todo.text} 
                        text={todo.text}
                        completed={todo.completed}
                        onComplete={()=>completeTodo(todo.text)}
                        onDelete={()=>deleteTodo(todo.text)}
                    />
                ))}
            </TodoList>
        <CreateTodoButton/>
    </React.Fragment>
    );
}

export { AppUI }