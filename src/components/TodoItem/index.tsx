import React, { ChangeEvent, FormEvent, ReactElement, useState } from 'react';
import { MdDone, MdDelete, MdEdit } from 'react-icons/md';

import { Todo } from '../../interface/todo';
import './TodoItem.scss';

interface TodoItemProps {
    todo: Todo;
    onToggle: (id: number) => void;
    onUpdate: (id: number, todoText: string) => void;
    onRemove: (id: number) => void;
}

const TodoItem = ({ todo, onToggle, onUpdate, onRemove }: TodoItemProps): ReactElement => {
    const { id, text, done } = todo;
    const [isIconVisible, setIsIconVisible] = useState(false);

    const [isTodoEditable, setIsTodoEditable] = useState(false);
    const [todoText, setTodoText] = useState(text);

    const onChangeText = (e: ChangeEvent<HTMLInputElement>) => {
        setTodoText(e.target.value);
    };

    const onSubmitTextUpdatedTodo = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onUpdate(id, todoText);
        setIsTodoEditable(false);
    };

    return (
        <div className="item-block" onMouseEnter={() => setIsIconVisible(true)} onMouseLeave={() => setIsIconVisible(false)}>
            <div className={done ? 'check-circle circle-done' : 'check-circle'} onClick={() => onToggle(id)}>
                {done && <MdDone />}
            </div>
            <div className={done ? 'text text-done' : 'text'}>
                {isTodoEditable ? (
                    <form onSubmit={onSubmitTextUpdatedTodo}>
                        <input value={todoText} onChange={onChangeText} />
                    </form>
                ) : (
                    text
                )}
            </div>
            <div className="edit-icon" style={{ display: isIconVisible ? 'initial' : 'none' }} onClick={() => setIsTodoEditable(true)}>
                <MdEdit />
            </div>
            <div className="remove-icon" style={{ display: isIconVisible ? 'initial' : 'none' }} onClick={() => onRemove(id)}>
                <MdDelete />
            </div>
        </div>
    );
};

export default TodoItem;
