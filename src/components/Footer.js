import React from "react";
import '../style/Footer.css'; 

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="social-media">
                    <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                        <img src="/images/facebook-icon.png" alt="Facebook" />
                    </a>
                    <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                        <img src="/images/instagram-icon.png" alt="Instagram" />
                    </a>
                    <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
                        <img src="/images/youtube-icon.png" alt="YouTube" />
                    </a>
                </div>
                <div className="footer-links">
                    <a href="/about">About Us</a>
                    <a href="/contact">Contact Us</a>
                </div>
            </div>
            <div className="copyright">
                <p>&copy; 2024 Bhookad . Any One Can use Source Code .</p>
            </div>
        </footer>
    );
};

export default Footer;
