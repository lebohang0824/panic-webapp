import style from './errors.module.css';

const NotFoundErrorPage = () => {
    return (
        <main className={style.errorContainer}>
            <div>
                <h1>404 Error</h1>
                <p>Snap, we could not locate the page you looking for</p>
                <span>Not found</span>
            </div>
        </main>
    );
};

export default NotFoundErrorPage;
