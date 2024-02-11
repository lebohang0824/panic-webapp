import { Form, Navigate } from 'react-router-dom';
import useAuthenticate from '../../hooks/useAuthenticate';
import style from './history.module.css';
import Header from '../../layout/Header';
import Button from '../../components/button/Button';
import { useEffect, useState } from 'react';
import { panicHistory } from '../../services/panicService';

const HistoryPage = () => {
    const [panicList, setPanicList] = useState([]);
    const isAuthenticated = useAuthenticate();

    useEffect(() => {
        panicHistory().then((res) => {
            const { panics } = res.data;
            setPanicList(panics);
        });
    }, []);

    return (
        <>
            {!isAuthenticated && <Navigate to='/login' />}
            <main>
                <Header />
                <div className={style.historyContainer}>
                    <div className='section-wide'>
                        <div className={style.historyHeader}>
                            <h1>Panic History</h1>
                        </div>
                        <div>
                            {panicList.map((panic) => (
                                <div
                                    key={panic.id}
                                    className={style.card}>
                                    <Form method='post'>
                                        <h1>{panic.panic_type}</h1>
                                        <p>{panic.details}</p>
                                        <div className={style.position}>
                                            <div>Long: {panic.longitude}</div>
                                            <div>Lat: {panic.latitude}</div>
                                        </div>
                                        <input
                                            type='hidden'
                                            name='panic_id'
                                            value={panic.id}
                                        />
                                        <div className={style.action}>
                                            <Button text='Cancel' />
                                        </div>
                                    </Form>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
};

export default HistoryPage;
