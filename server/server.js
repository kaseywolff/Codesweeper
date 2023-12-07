const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = 3030;

// middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// serve static files
app.use(express.static(path.join(__dirname, '../src')));

// API routes
const highScoreRouter = require('./routes/highScoreRouter');
app.use('/api/highscores', highScoreRouter);



// 404 error handler
app.use('*', (req, res) => {
  res.status(404).send('Not Found');
});

// global error handler
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send({ error: 'Internal Server Error' });
});



app.listen(PORT, () => {
  console.log(`Beep boop 🤖 Listening on port ${PORT}...`);
});
