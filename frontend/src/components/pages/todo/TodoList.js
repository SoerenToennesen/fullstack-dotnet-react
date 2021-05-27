import React from 'react'
import TodoItem from './TodoItem';
import '../../TextSections.css';

export default function TodoList({ todos, onTodoUpdating, onTodoDeleting }) {
    const todoList = todos.length
    ? (
        todos.map((todo, idx) => (
            <TodoItem
                key = {idx}
                todo = {todo}
                onTodoDeleting = {onTodoDeleting}
                onTodoUpdating = {onTodoUpdating}
            />
        ))
    ) :
    (
        <p className="center">You don't have any todos :)</p>
    )

    return (
        <div className="title-container">
            <h1>TODOS</h1>
            <ul className="collection">
               {todoList}
            </ul>
        </div>
    )
}