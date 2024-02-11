import HttpRequest from './Http';

const Authenticator = () => {
    const apiKey = sessionStorage.getItem('api-key');
    const token = `Bearer ${apiKey}`;

    if (!apiKey) {
        return false;
    }

    HttpRequest.defaults.headers.common['Authorization'] = token;
    return true;
};

export default Authenticator;
