import React, { ReactElement } from 'react';

import { logout } from '../../api/auth';
import { Todo } from '../../interface/todo';
import './TodoHead.scss';

interface TodoHeadProps {
    todos: Todo[];
}

const TodoHead = ({ todos }: TodoHeadProps): ReactElement => {
    const undoneTodos = todos.filter((todo) => !todo.done);
    const today = new Date();
    const dateString = today.toLocaleDateString('ko-KR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });
    const dayName = today.toLocaleDateString('ko-KR', { weekday: 'long' });

    return (
        <div className="head-container">
            <h1>{dateString}</h1>
            <div className="day">{dayName}</div>
            <div className="info-bar">
                <div className="todos-left">할 일 {undoneTodos.length}개 남음</div>
                <button onClick={logout}>로그아웃</button>
            </div>
        </div>
    );
};

export default TodoHead;
