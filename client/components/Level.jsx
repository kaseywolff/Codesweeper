import React from 'react';

import '../scss/levels.scss'

export default function Level({ selectedLevel, onLevelChange }) {
  const handleLevelChange = (e) => {
    console.log('clicked', e.target)
    const newLevel = e.target.id;
    onLevelChange(newLevel);
  };

  return (
    <div id='levels-container'>
      <div className='level-row'>
        <b>Level</b>
        <b>Height</b>
        <b>Width</b>
        <b>Mines</b>
      </div>
      {/* beginner, 9x9, 10 mines */}
      <div className='level-row'>
        <label className='level-element'>
          <input 
          type='radio' 
          id='beginner' 
          name='level' 
          checked={selectedLevel === 'beginner'}
          onChange={handleLevelChange}
          />
          <b className='level'>Beginner</b>
        </label>
        <plaintext className='level-element'>9</plaintext>
        <plaintext className='level-element'>9</plaintext>
        <plaintext className='level-element'>10</plaintext>
      </div>
      {/* intermediate, 16x16, 40 mines */}
      <div className='level-row'>
        <label className='level-element'>
          <input 
            type='radio' 
            id='intermediate' 
            name='level' 
            checked={selectedLevel === 'intermediate'}
            onChange={handleLevelChange}
          />
          <b className='level'>Intermediate</b>
        </label>
        <plaintext className='level-element'>16</plaintext>
        <plaintext className='level-element'>16</plaintext>
        <plaintext className='level-element'>40</plaintext>
      </div>
      {/* expert, 16 x 30, 99 mines */}
      <div className='level-row'>
        <label className='level-element'>
          <input 
            type='radio' 
            id='expert' 
            name='level' 
            checked={selectedLevel === 'expert'}
            onChange={handleLevelChange}
          />
          <b className='level'>Expert</b>
        </label>
        <plaintext className='level-element'>16</plaintext>
        <plaintext className='level-element'>30</plaintext>
        <plaintext className='level-element'>99</plaintext>
      </div>
    </div>
  )
}