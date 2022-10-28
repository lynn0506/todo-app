import React from 'react';

import TodoTemplate from './components/TodoTemplate';
import AuthTemplate from './components/AuthTemplate';

import './App.scss';

function App() {
    if (window.sessionStorage.getItem('isLoggedIn')) {
        return <TodoTemplate />;
    }

    return <AuthTemplate />;
}

export default App;
