import React, { ReactElement, MouseEvent, useState } from 'react';

import Login from '../Login';
import SignUp from '../SignUp';

enum PageName {
    SignUp = 'signup',
    Login = 'login',
}

const LOGIN_PAGE = 'login';

const AuthTemplate = (): ReactElement => {
    const [pageName, setPageName] = useState<PageName>(PageName.Login);

    const routeToClickedPage = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        const nextPageName = (e.target as HTMLButtonElement).name as PageName;
        setPageName(nextPageName);
    };

    if (pageName === LOGIN_PAGE) {
        return <Login onClickSignUpBtn={routeToClickedPage} />;
    } else {
        return <SignUp onClickLoginBtn={routeToClickedPage} />;
    }
};

export default AuthTemplate;
