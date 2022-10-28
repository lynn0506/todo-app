import React, { useState } from 'react';

import { login } from '../../api/auth';
import './Login.scss';

const Login = ({ onClickSignUpBtn }: { onClickSignUpBtn: any }) => {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
    });

    const onChangeFormData = (e: any) => {
        const name = e.target.name;
        const value = e.target.value;

        setFormData({
            ...formData,
            [name]: value.trim(),
        });
    };

    const onSubmit = (e: any) => {
        e.preventDefault();

        login(formData);
    };

    return (
        <div className="template-container">
            <div className="head-container">
                <h1>로그인</h1>
            </div>
            <form className="login-form" onSubmit={onSubmit}>
                <input
                    required
                    autoComplete="username"
                    autoFocus
                    type="text"
                    id="username"
                    name="username"
                    value={formData.username}
                    onChange={onChangeFormData}
                    placeholder="아이디"
                />
                <input
                    required
                    autoComplete="current-password"
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={onChangeFormData}
                    placeholder="비밀번호"
                />
                <button type="submit">로그인</button>
                <button name="singup" onClick={onClickSignUpBtn}>
                    회원가입
                </button>
            </form>
        </div>
    );
};

export default Login;
