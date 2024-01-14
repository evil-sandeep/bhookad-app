import React, { useState } from 'react';
import Logo from '../assests/img/bhookadLogo.png';
import { Link } from 'react-router-dom';
import useOnline from '../utils/useOnline';

const Header = () => {
    const [isLoggedIn, setLoggedIn] = useState(false);
    const isOnline = useOnline();

    const handleToggleLogin = () => {
        setLoggedIn(!isLoggedIn);
    };

    return (
        <header className="bg-gray-800 text-white p-3">
            <div className="flex items-center justify-between">
                <Link to="/">
                    <img src={Logo} alt="Bhookad" className="h-12 " />
                </Link>
                <nav>
                    <ul className="flex space-x-4">
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contact</Link>
                        </li>
                        <li>
                            <Link to="/cart">Cart</Link>
                        </li>
                        <li>
                            <Link to="/instamart">InstaMart</Link>
                        </li>
                    </ul>
                </nav>
                <h4 className="check">{isOnline ? '✅' : '🔴'}</h4>
                <div className="login-toggle">
                    <button
                        className="bg-blue-500 text-white px-4 py-2 rounded"
                        onClick={handleToggleLogin}
                    >
                        {isLoggedIn ? 'Logout' : 'Login'}
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
