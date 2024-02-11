import HttpRequest from '../utils/Http';
import Authenticator from '../utils/Authenticator';

export const sendPanic = async (longitude, latitude, panic_type, details) => {
    Authenticator();

    const res = await HttpRequest.post('/panic', {
        longitude,
        latitude,
        panic_type,
        details,
    });

    console.log(res);
};

export const cancelPanic = async (panic_id) => {
    Authenticator();

    const res = await HttpRequest.post(`/panic/${panic_id}`);

    console.log(res);
};

export const panicHistory = async () => {
    Authenticator();

    const res = await HttpRequest.get(`/panic`);

    const { data } = res;

    return data;
};
