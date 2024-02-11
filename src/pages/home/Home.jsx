import { useEffect, useState } from 'react';
import Button from '../../components/button/Button';
import TextInput from '../../components/form/TextInput';
import TextareaInput from '../../components/form/TextareaInput';
import Header from '../../layout/Header';
import style from './home.module.css';
import { Form, Navigate } from 'react-router-dom';
import useAuthenticate from '../../hooks/useAuthenticate';

const HomePage = () => {
    const [longitude, setLongitude] = useState(0);
    const [latitude, setLatitude] = useState(0);

    const isAuthenticated = useAuthenticate();

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((pos) => {
                setLongitude(pos.coords.longitude);
                setLatitude(pos.coords.latitude);
            });
        }
    }, []);

    return (
        <>
            {!isAuthenticated && <Navigate to='/login' />}
            <main>
                <Header />
                <div className={style.homeContainer}>
                    <div className='section'>
                        <div className={style.homeHeader}>
                            <h1>Send Panic</h1>
                            <p>
                                Please ensure the below information is correct
                            </p>
                        </div>
                        <Form method='post'>
                            <div className={style.coodinatesContainer}>
                                <div>
                                    <label>Long: {longitude}</label>
                                    <input
                                        type='hidden'
                                        name='longitude'
                                        value={longitude}
                                    />
                                </div>
                                <div>
                                    <label>Lat: {latitude}</label>
                                    <input
                                        type='hidden'
                                        name='latitude'
                                        value={latitude}
                                    />
                                </div>
                            </div>
                            <div className={style.inputContainer}>
                                <label>Panic Type</label>
                                <TextInput
                                    name='panic_type'
                                    placeholder='Panic type'
                                />
                            </div>
                            <div className={style.inputContainer}>
                                <label>Details</label>
                                <TextareaInput
                                    name='details'
                                    placeholder='Details'
                                />
                            </div>
                            <div className={style.inputContainer}>
                                <label>
                                    <input type='checkbox' />I agree to the
                                    terms &amp; conditions
                                </label>
                            </div>
                            <div>
                                <Button text='Send' />
                            </div>
                        </Form>
                    </div>
                </div>
            </main>
        </>
    );
};

export default HomePage;
