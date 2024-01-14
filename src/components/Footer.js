import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-1">
      <div className="container mx-auto flex justify-between items-center">
        <div className=" flex justify-start social-media">
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
            <img src="/images/facebook-icon.png" alt="Facebook" className="w-6 h-6 mr-2" />
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
            <img src="/images/instagram-icon.png" alt="Instagram" className="w-6 h-6 mr-2" />
          </a>
          <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer mr-2">
            <img src="/images/youtube-icon.png" alt="YouTube" className="w-6 h-6" />
          </a>
        </div>
        <div className="footer-links">
          <a href="/about" className="text-gray-300 hover:text-white mr-4">About Us</a>
          <a href="/contact" className="text-gray-300 hover:text-white">Contact Us</a>
        </div>
      </div>
      <div className="container mx-auto mt-4">
        <p className="text-center text-gray-500">&copy; 2024 Bhookad. Anyone can use the source code.</p>
      </div>
    </footer>
  );
};

export default Footer;
