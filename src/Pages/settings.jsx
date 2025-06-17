import { Link } from 'react-router-dom';
import

function Settings() {
    return (
        <>
            <nav>
                <h1> Countly </h1>
                <div className='nav-items'>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/settings">Settings</Link>
                </div>
            </nav>


            <h1> Settings Page </h1>
        </>
    )
}

export default Settings;