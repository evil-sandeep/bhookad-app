
import React, { useState } from 'react';
import '../style/Header.css' // Import your CSS for styling
import Logo from '../assests/img/bhookadLogo.png'
import { Link } from 'react-router-dom'


const Header = () => {
    const [isLoggedIn, setLoggedIn] = useState(false);

    const handleToggleLogin = () => {
        setLoggedIn(!isLoggedIn);
    };

    return (
        <header>
            <div className="logo">

                <Link to='/'><img src={Logo} alt="Bhookad" /></Link>
            </div>
            <nav>
                <ul className="nav-links">
                    <Link to="/">  <li>Home</li>   </Link>
                    <Link to='/about'> <li>About</li></Link>
                    <Link to='/contact'> <li>Contact</li></Link>
                    <Link to='/cart'> <li>Cart</li></Link>
                </ul>
            </nav>

            <div className="login-toggle">
                <button onClick={handleToggleLogin}>
                    {isLoggedIn ? 'Logout' : 'Login'}
                </button>
            </div>
        </header>
    );
}

export default Header;
