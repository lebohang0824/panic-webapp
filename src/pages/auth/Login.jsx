import { Form } from 'react-router-dom';
import Button from '../../components/button/Button';
import EmailInput from '../../components/form/EmailInput';
import PasswordInput from '../../components/form/PasswordInput';
import style from './login.module.css';

const LoginPage = () => {
    return (
        <main className={style.loginContainer}>
            <div className='section'>
                <div className={style.loginHeaer}>
                    <h1>Sign in</h1>
                    <p>Please enter your login and password</p>
                </div>
                <Form method='post'>
                    <div className={style.inputContainer}>
                        <label>Email Address</label>
                        <EmailInput
                            name='email'
                            placeholder='Email address'
                        />
                    </div>
                    <div className={style.inputContainer}>
                        <label>Email Address</label>
                        <PasswordInput name='password' />
                    </div>
                    <div className={style.inputContainer}>
                        <label>
                            <input type='checkbox' />
                            Remember me
                        </label>
                    </div>
                    <div>
                        <Button text='Sign in' />
                    </div>
                </Form>
            </div>
        </main>
    );
};

export default LoginPage;
