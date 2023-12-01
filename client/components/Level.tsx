import React from 'react';
import { LevelProps, SelectedLevel } from '../types';
import '../scss/levels.scss';


export default function Level({ selectedLevel, onLevelChange }: LevelProps): JSX.Element {
  const handleLevelChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newLevel = e.target.id as SelectedLevel;
    onLevelChange(newLevel);
  };

  return (
    <div id='levels-container'>
      <div id='level-header' className='level-row'>
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
          <b id='beginner' className='level'>Beginner</b>
        </label>
        <p className='level-element'>9</p>
        <p className='level-element'>9</p>
        <p className='level-element'>10</p>
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
          <b id='intermediate' className='level'>Intermediate</b>
        </label>
        <p className='level-element'>16</p>
        <p className='level-element'>16</p>
        <p className='level-element'>40</p>
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
          <b id='expert' className='level'>Expert</b>
        </label>
        <p className='level-element'>16</p>
        <p className='level-element'>30</p>
        <p className='level-element'>99</p>
      </div>
    </div>
  );
};