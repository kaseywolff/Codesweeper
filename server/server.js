const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false}));

const PORT = 3000;

// require routes
const highScoreRouter = require('./routes/highScoreRouter');

// serve static files
app.use(express.static(path.resolve(__dirname, '../src')));

// API
app.use('/api/highscores/:level', highScoreRouter);


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

app.listen(PORT, ()=>{ console.log(`Beep boop 🤖 Listening on port ${PORT}...`); });

module.exports = app;
