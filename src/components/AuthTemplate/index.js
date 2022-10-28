import React, { useState } from 'react';

import Login from '../Login';
import SignUp from '../SignUp';

const LOGIN_PAGE = 'login';

function AuthTemplate() {
    const [pageName, setPageName] = useState(LOGIN_PAGE);

    const routeToClickedPage = (e) => {
        e.preventDefault();

        const nextPageName = e.target.name;
        setPageName(nextPageName);
    };

    if (pageName === LOGIN_PAGE) {
        return <Login onClickSignUpBtn={routeToClickedPage} />;
    } else {
        return <SignUp onClickLoginBtn={routeToClickedPage} />;
    }
}

export default AuthTemplate;
