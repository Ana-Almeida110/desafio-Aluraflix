import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaPlus } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className='footer-logo'> 
      <img src='/imagens/Logo.png' alt='Logo' />
      </div>
      <nav className='footer-nav'>
        <Link to='/' className='footer-link'><FaHome />Home</Link>
        <Link to='/novo-video' className='footer-link-mais'><FaPlus /></Link>
      </nav>
    </footer>
  );
};

export default Footer;
