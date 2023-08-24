import React, { Component, useState, useEffect } from 'react';
import Square from './Square.jsx';

// import logic functions
import mineGenerator from '../logic/mines.js';
import checkForMines from '../logic/checkForMines.js';
import emptyNeighbors from '../logic/emptyNeighbors.js'
import winner from '../logic/winner';

