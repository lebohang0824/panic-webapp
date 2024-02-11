import HttpRequest from '../utils/Http';

export const loginAuth = async (email, password) => {
    const res = await HttpRequest.post('/login', {
        email,
        password,
    });

    const { data } = res;

    if (data) {
        sessionStorage.setItem('api-key', data.data.api_access_token);
    }

    console.log(data);
};
