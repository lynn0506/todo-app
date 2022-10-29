export interface LoginUserForm {
    username: string;
    password: string;
}

export interface SignUpForm extends LoginUserForm {
    passwordCheck: string;
}
