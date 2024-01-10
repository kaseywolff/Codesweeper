import React from 'react';
import { Link } from 'react-router-dom';
import { NavBarProps } from '../types';
import '../scss/nav-bar.scss';

export default function NavBar({ onLevelButtonClick }: NavBarProps): JSX.Element {
  return (
    <nav className='navBar'>
      <Link to='/' id='home-button' className='link'>
        <button className='logo-div navLink'>
          {/* <div className='computer'>💻</div> */}
          {/* <div className='play-binary'> */}
            <div className='binary'>01110000 01101100</div>
            <div className='binary'>01100001 01111001</div>
            <span className='label'>Play</span>
          {/* </div> */}
        </button>
      </Link>

      <button id='level-button' className='navLink' onClick={onLevelButtonClick}>
        Level
      </button>

      <Link to='/highscores' id='highscores-button' className='link'>
        <button className='navLink'>
          HighScores
        </button>
      </Link>
      {/* <button className='navLink'>Login</button> */}
    </nav>
  );
};
