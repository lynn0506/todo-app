import React, { ReactElement, useState } from 'react';

import Login from '../Login';
import SignUp from '../SignUp';

enum PageName {
    SignUp = 'signup',
    Login = 'login',
}

const LOGIN_PAGE = 'login';

const AuthTemplate = (): ReactElement => {
    const [pageName, setPageName] = useState<PageName>(PageName.Login);

    const routeToClickedPage = (e: any) => {
        e.preventDefault();

        const nextPageName = e.target.name;
        setPageName(nextPageName);
    };

    if (pageName === LOGIN_PAGE) {
        return <Login onClickSignUpBtn={routeToClickedPage} />;
    } else {
        return <SignUp onClickLoginBtn={routeToClickedPage} />;
    }
};

export default AuthTemplate;
