const dotenv = require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT;

app.get('/', (req, res) => {
  res.send('Hola Diego!');
});

app.listen(PORT, () => {
  console.log(`App escuchando en Puerto ${PORT}`);
});
