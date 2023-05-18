import React from 'react';
import { Routes, Route } from 'react-router-dom';
import App from './App.jsx';
// trying out hooks here
import { useState, useEffect } from 'react';

// import login page
// import signup page
// import leaderboard
// import personal scoreboard

const WebPackage = () => {

  return (
    <div className='container'>
      <Routes>
        <Route path='/' element={<App />}/>
        {/* <Route path='/signup' element={signup}/> */}
        {/* <Route path='/login' element={login}/>
        <Route path='/game' element={loggedInGame}/>
        <Route path='/leaderboard' element={leaderboard}/> */}
      </Routes>
    </div>
  )
}

export default WebPackage;