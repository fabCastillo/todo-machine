import './CreateTodoButton.css';

function CreateTodoButton() {
    
    const onClickActive = () => {
        console.log('hola');
    };

    return (
        <button 
            className="CreateTodoButton"
            onClick={onClickActive}
        >+</button>
    )
}
export { CreateTodoButton }