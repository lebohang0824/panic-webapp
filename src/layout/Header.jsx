import { Link } from 'react-router-dom';
import Button from '../components/button/Button';

const Header = () => {
    const onLogout = () => {
        //
    };

    return (
        <header>
            <nav>
                <div>
                    <span className='title'>Panic System</span>
                </div>
                <div>
                    <ul>
                        <li>
                            <Link to='/'>Home</Link>
                        </li>
                        <li>
                            <Link to='/history'>History</Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <div>
                        <Button
                            text='Logout'
                            onClick={onLogout}
                        />
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;
