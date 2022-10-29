import React, { useState, useEffect, ReactElement } from 'react';
import axios from 'axios';

import TodoHead from '../TodoHead';
import TodoList from '../TodoList';
import TodoCreate from '../TodoCreate';
import { checkApiResponseStatus } from '../../utils/auth';
import { Todo } from '../../interface/todo';

import './TodoTemplate.scss';

axios.defaults.withCredentials = true;

const TodoTemplate = (): ReactElement => {
    const [todos, setTodos] = useState<Todo[]>([]);

    useEffect(() => {
        axios
            .get('http://localhost:8000/api/todos/')
            .then((res) => {
                setTodos(res.data.todos);
            })
            .catch((error) => {
                console.log(error);
                // checkApiResponseStatus(error.response.status);
            });
    }, []);

    const onToggle = (id: number) => {
        axios
            .patch(`http://localhost:8000/api/todos/${id}/check/`)
            .then(() => {
                const newTodos = todos.map((todo: Todo) => (todo.id === id ? { ...todo, done: !todo.done } : todo));
                setTodos(newTodos);
            })
            .catch((error) => {
                console.log(error);
                checkApiResponseStatus(error.response.status);
            });
    };

    const onUpdate = (id: number, text: string) => {
        axios
            .patch(`http://localhost:8000/api/todos/${id}/`, { text })
            .then(() => {
                const newTodos = todos.map((todo) => (todo.id === id ? { ...todo, text: text } : todo));
                setTodos(newTodos);
            })
            .catch((error) => {
                console.log(error);
                checkApiResponseStatus(error.response.status);
            });
    };

    const onRemove = (id: number) => {
        axios
            .delete(`http://localhost:8000/api/todos/${id}/`)
            .then(() => {
                const newTodos = todos.filter((todo) => todo.id !== id);
                setTodos(newTodos);
            })
            .catch((error) => {
                console.log(error);
                checkApiResponseStatus(error.response.status);
            });
    };

    const onCreate = (text: string) => {
        const newTodo = { text };
        axios
            .post('http://localhost:8000/api/todos/create/', newTodo)
            .then((res) => {
                setTodos([...todos, res.data.todo]);
            })
            .catch((error) => {
                console.log(error);
                checkApiResponseStatus(error.response.status);
            });
    };

    return (
        <div className="template-container">
            <TodoHead todos={todos} />
            <TodoList todos={todos} onToggle={onToggle} onUpdate={onUpdate} onRemove={onRemove} />
            <TodoCreate onCreate={onCreate} />
        </div>
    );
};

export default TodoTemplate;
