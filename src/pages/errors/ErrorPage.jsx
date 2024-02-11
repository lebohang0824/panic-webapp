import { Navigate, useRouteError } from 'react-router-dom';
import NotFoundErrorPage from './NotFoundError';
import ServerErrorPage from './ServerError';

const ErrorPage = () => {
    const error = useRouteError();

    if (error.status === 404) {
        return <NotFoundErrorPage />;
    }

    if (!error.status && error.response.status === 401) {
        // Remove token
        sessionStorage.clear();

        return <Navigate to='/login' />;
    }

    return <ServerErrorPage />;
};

export default ErrorPage;
