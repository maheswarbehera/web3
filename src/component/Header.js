import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <>
      <div className="header" style={{padding:'20px'}}>
       <div className="container">
        <div className="d-flex gap-3 justify-content-between align-items-center">
        <div><Link to="/" className='logo text-sm-center text-decoration-none'>Web3-Converter</Link></div>
          <div className='d-flex gap-4'>
           <Link className='nav_link' to="/converter">Converter</Link>
          <Link className='nav_link' to="/wallet">Wallet</Link>
          </div>
        </div>
       </div>
      </div>
    </>
  );
}

export default Header;
