export const isValidUserName = (username: string): boolean => {
    if (username.length < 4) {
        alert('4자 이상의 아이디를 설정해 주세요');
        return false;
    }

    const regex = /^[a-z0-9]+$/i;
    if (!regex.test(username)) {
        alert('아이디는 영문과 숫자로만 입력해 주세요');
        return false;
    }

    return true;
};

export const isValidPassword = (password: string, passwordCheck: string): boolean => {
    if (password !== passwordCheck) {
        alert('비밀번호가 서로 다릅니다');
        return false;
    }

    if (password.length < 8) {
        alert('8자리 이상의 비밀번호를 설정해 주세요');
        return false;
    }

    return true;
};

export const checkApiResponseStatus = (status: number) => {
    if (status === 401) {
        alert('다시 로그인해 주세요.');
        sessionStorage.clear();
        window.location.reload();
    }
};
