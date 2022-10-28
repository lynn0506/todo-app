import React from 'react';

import TodoItem from '../TodoItem';
import './TodoList.scss';

function TodoList({ todos, onToggle, onUpdate, onRemove }) {
    return (
        <div className="list-container">
            {todos.map((todo) => (
                <TodoItem key={todo.id} todo={todo} onToggle={onToggle} onUpdate={onUpdate} onRemove={onRemove} />
            ))}
        </div>
    );
}

export default TodoList;
