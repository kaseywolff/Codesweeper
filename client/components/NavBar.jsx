import React from 'react';
import '../scss/nav-bar.scss';

function NavBar({ onLevelButtonClick }) {
  return (
    <nav className='navBar'>
      <button className='navLink' onClick={onLevelButtonClick}>Level</button>
      <div></div>
      <button className='navLink'>Login</button>
    </nav>
  )
};

export default NavBar;