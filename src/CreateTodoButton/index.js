import React from 'react';
import { TodoContext } from '../TodoContext';
import './CreateTodoButton.css';

function CreateTodoButton() {
    
    //obtener del contexto los estados del Modal
    const { openModal, setOpenModal } = React.useContext(TodoContext);

    const onClickActive = () => {
        setOpenModal(!openModal);
    };

    return (
        <button 
            className="CreateTodoButton"
            onClick={onClickActive}
        >+</button>
    )
}
export { CreateTodoButton }