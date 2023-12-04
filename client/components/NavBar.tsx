import React from 'react';
import { NavBarProps } from '../types';
import '../scss/nav-bar.scss';

export default function NavBar({ onLevelButtonClick }: NavBarProps): JSX.Element {
  return (
    <nav className='navBar'>
      <button id='level-button' className='navLink' onClick={onLevelButtonClick}>Level</button>
      <div></div>
      {/* <button className='navLink'>Login</button> */}
    </nav>
  );
};
