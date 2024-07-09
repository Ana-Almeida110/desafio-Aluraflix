import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { FaPlus } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src='./imagens/Logo.png' className='' alt='' />
      </div>
      <div className="links">
        <Link to="/" className='link-home'>Home</Link>
        <Link to="/novo-video" className='link-novo-video'>Novo Video</Link>
        <Link to='/novo-video' className='link-add-video' aria-label='Adicionar Novo Vídeo'>
        <FaPlus/>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
