import { createBrowserRouter } from 'react-router-dom';
import HomePage from '../pages/home/Home';
import LoginPage from '../pages/auth/Login';
import loginAction from '../actions/login-action';
import sendPanicAction from '../actions/send-panic-action';
import ErrorPage from '../pages/errors/ErrorPage';
import HistoryPage from '../pages/history/History';
import cancelPanicAction from '../actions/cancel-panic-action';

const AppRoute = () => {
    return createBrowserRouter([
        {
            path: '/',
            element: <HomePage />,
            errorElement: <ErrorPage />,
            action: sendPanicAction,
        },
        {
            path: 'login',
            element: <LoginPage />,
            action: loginAction,
        },
        {
            path: 'history',
            element: <HistoryPage />,
            errorElement: <ErrorPage />,
            action: cancelPanicAction,
        },
    ]);
};

export default AppRoute;
