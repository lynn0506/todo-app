import React, { ReactElement } from 'react';
import { Todo } from '../../interface/todo';

import TodoItem from '../TodoItem';
import './TodoList.scss';

interface TodoListProps {
    todos: Todo[];
    onToggle: (id: number) => void;
    onUpdate: (id: number, text: string) => void;
    onRemove: (id: number) => void;
}

const TodoList = ({ todos, onToggle, onUpdate, onRemove }: TodoListProps): ReactElement => {
    return (
        <div className="list-container">
            {todos.map((todo) => (
                <TodoItem key={todo.id} todo={todo} onToggle={onToggle} onUpdate={onUpdate} onRemove={onRemove} />
            ))}
        </div>
    );
};

export default TodoList;
