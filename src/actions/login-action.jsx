import { redirect } from 'react-router-dom';
import { loginAuth } from '../services/authService';

const loginAction = async ({ request }) => {
    const formData = await request.formData();

    const email = formData.get('email');
    const password = formData.get('password');

    if (!email || !password) {
        return redirect('/login');
    }

    await loginAuth(email, password);

    return redirect('/');
};

export default loginAction;
