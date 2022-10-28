import React, { ChangeEvent, MouseEvent, FormEvent, ReactElement, useState } from 'react';

import { isValidUserName, isValidPassword } from '../../utils/auth';
import { signUp } from '../../api/auth';
import { SignUpForm } from '../../interface/user';

import './SignUp.scss';

interface SignUpProps {
    onClickLoginBtn: (e: MouseEvent<HTMLButtonElement>) => void;
}

const SignUp = ({ onClickLoginBtn }: SignUpProps): ReactElement => {
    const [formData, setFormData] = useState<SignUpForm>({
        username: '',
        password: '',
        passwordCheck: '',
    });

    const onChangeFormData = (e: ChangeEvent<HTMLInputElement>) => {
        const name = e.target.name;
        const value = e.target.value;

        setFormData({
            ...formData,
            [name]: value.trim(),
        });
    };

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const { username, password, passwordCheck } = formData;

        if (isValidUserName(username) && isValidPassword(password, passwordCheck)) {
            signUp({ username, password });
        }
    };

    return (
        <div className="template-container">
            <div className="head-container">
                <h1>회원가입</h1>
            </div>
            <form className="sign-up-form" onSubmit={onSubmit}>
                <label>
                    아이디
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
                </label>
                <label>
                    비밀번호
                    <input
                        required
                        autoComplete="current-password"
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={onChangeFormData}
                        placeholder="6자리 이상의 비밀번호"
                    />
                </label>
                <label>
                    비밀번호 확인
                    <input
                        required
                        autoComplete="new-password"
                        type="password"
                        id="passwordCheck"
                        name="passwordCheck"
                        value={formData.passwordCheck}
                        onChange={onChangeFormData}
                        placeholder="비밀번호 확인"
                    />
                </label>
                <button type="submit">회원가입 완료</button>
                <button name="login" onClick={onClickLoginBtn}>
                    로그인
                </button>
            </form>
        </div>
    );
};

export default SignUp;
