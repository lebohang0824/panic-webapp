import style from './errors.module.css';

const ServerErrorPage = () => {
    return (
        <main className={style.errorContainer}>
            <div>
                <h1>501 Error</h1>
                <p>Snap, something is really bad</p>
                <span>Server error</span>
            </div>
        </main>
    );
};

export default ServerErrorPage;
