import React from 'react';
const Todos = ({ todos, deleteTodo }) => {
    const todosList = todos.length ? (
        todos.map(todo => {
            return(
            < div className="collection-item" key={todo.id}>
                <span >{todo.content}</span>
                <button onClick={() => { deleteTodo(todo.id) }}>Delete todo</button> 
            </div >
            )
        })
    ) : (
    <p className="center">You have no todos's left, hooray!</p>
    )

    return (
        <div className="todo-list">
            {todosList}
        </div>
    )
}

export default Todos