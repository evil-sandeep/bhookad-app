import React, { useState,useContext } from 'react';
import Logo from '../assests/img/bhookadLogo.png';
import { Link } from 'react-router-dom';
import useOnline from '../utils/useOnline';
import UserContext from '../utils/userContext';
import { useSelector } from 'react-redux';

const Header = () => {
    const [isLoggedIn, setLoggedIn] = useState(false);
    const [isMenuOpen, setMenuOpen] = useState(false);
    const isOnline = useOnline();
    const {user}=useContext(UserContext);

    const cartSlice=useSelector((store)=>store.cart.items)
    console.log(cartSlice)

    const handleToggleLogin = () => {
        setLoggedIn(!isLoggedIn);
    };

    const handleToggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    return (
        <header className="bg-gray-800 text-white p-3">
            <div className="container mx-auto flex items-center justify-between">
                <div className="flex items-center">
                    <Link to="/">
                        <img data-testid='logo' src={Logo} alt="Bhookad" className="h-12" />
                    </Link>
                   
                </div>
                <div className="lg:hidden">
                    <button
                        className="text-white focus:outline-none"
                        onClick={handleToggleMenu}
                    >
                        {isMenuOpen ? '✕' : '☰'}
                    </button>
                </div>
                <nav className={`hidden lg:flex ${isMenuOpen ? 'hidden' : ''}`}>
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
                            <Link to="/cart">Cart {cartSlice.length}</Link>
                        </li>
                        <li>
                            <Link to="/instamart">InstaMart</Link>
                        </li>
                    </ul>
                <h4 data-testid="online-status"  className="check  ml-10">{isOnline ? 'Online✅' : 'Offline🔴'}</h4> 
                </nav>
                <strong>{user.name}</strong>
                <div className="login-toggle hidden lg:block">
                    <button
                        className="bg-blue-500 text-white px-4 py-2 rounded"
                        onClick={handleToggleLogin}
                    >
                        {isLoggedIn ? 'Logout' : 'Login'}
                    </button>
                </div>
            </div>
            {/* Toggle menu for small screens */}
            <div className={`lg:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
                <ul className="flex flex-col">
                    <li>
                        <Link
                            to="/"
                            onClick={handleToggleMenu}
                            className={`${
                                isMenuOpen ? ' text-black bg-gray-500 mt-3 rounded ' : ''
                            } transition duration-300`}
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/about"
                            onClick={handleToggleMenu}
                            className={`${
                                isMenuOpen ? ' text-black bg-gray-500 rounded ' : ''
                            } transition duration-300`}
                        >
                            About
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/contact"
                            onClick={handleToggleMenu}
                            className={`${
                                isMenuOpen ? ' rounded  text-black bg-gray-500 shadow-sm' : ''
                            } transition duration-300`}
                        >
                            Contact
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/cart"
                            data-testid="cart"
                            onClick={handleToggleMenu}
                            className={`${
                                isMenuOpen ? 'shadow-sm  text-black bg-gray-500  rounded' : ''
                            } transition duration-300`}
                        >
                            Cart
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/instamart"
                            onClick={handleToggleMenu}
                            className={`${
                                isMenuOpen ? ' text-black bg-gray-500 shadow-sm rounded ring-offset-0 ' : ''
                            } transition duration-300`}
                        >
                            InstaMart
                        </Link>
                    </li>
                </ul>
            </div>
        </header>
    );
};

export default Header;
