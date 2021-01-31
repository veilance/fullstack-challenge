const express = require('express')
const knexConfig   = require("./knexfile");
const knex = require("knex")(knexConfig["development"]);
const fundRouter = require('./routes/fund');

const app = express()
const port = 5000

app.listen(port, () => {
  console.log(`Server listening at: http://localhost:${port}`)
})

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Methods', 'POST');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  next();
});

app.use('/fund', fundRouter(knex));

module.exports = app;