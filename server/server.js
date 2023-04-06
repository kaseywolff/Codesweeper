const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');

const PORT = 3000;

const app = experss();

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded());

app.use('/', express.static(path.resolve(__dirname, '../client')));

/**
* signup
*/
app.get('/signup', 
  (req, res) => {
    res.sendFile(path.resolve(__dirname, './signup.html'));
  }
);



/**
 * 404 handler
 */
app.use('*', (req,res) => {
  res.status(404).send('Not Found');
});

/**
 * Global error handler
 */
app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).send({ error: err });
});

app.listen(PORT, ()=>{ console.log(`Beep boop. Listening on port ${PORT}...`); });

module.exports = app;

