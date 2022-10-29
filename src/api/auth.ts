import axios from 'axios';
import { LoginUserForm, SignUpForm } from '../interface/user';
import { checkApiResponseStatus } from '../utils/auth';

axios.defaults.withCredentials = true;

export const signUp = ({ username, password }: LoginUserForm) => {
    axios
        .post('http://localhost:8000/api/accounts/signup/', { username, password })
        .then((res) => {
            console.log(res);
            alert('회원가입 완료');
        })
        .catch((error) => {
            console.log(error);
        });
};

export const login = ({ username, password }: LoginUserForm) => {
    axios
        .post('http://localhost:8000/api/accounts/login/', { username, password })
        .then((res) => {
            console.log(res);
            window.sessionStorage.setItem('isLoggedIn', 'true');
            window.location.reload();
        })
        .catch((error) => {
            console.log(error);
        });
};

export const logout = () => {
    axios
        .post('http://localhost:8000/api/accounts/logout/')
        .then(() => {
            window.sessionStorage.clear();
            window.location.reload();
        })
        .catch((error) => {
            console.log(error);
            checkApiResponseStatus(error.response.status);
        });
};
