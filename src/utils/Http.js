import axios from 'axios';

const baseURL = import.meta.env.VITE_BASE_URL;
const contentType = import.meta.env.VITE_CONTENT_TYPE;
const timeout = import.meta.env.VITE_TIMEOUT;

const HttpRequest = axios.create({
    baseURL,
});

HttpRequest.defaults.headers.post['Content-Type'] = contentType;
HttpRequest.defaults.timeout = timeout;

export default HttpRequest;
