const express = require('express')
const app = express()
const port = 5000
const knexConfig   = require("./knexfile");
const knex = require("knex")(knexConfig["development"]);
const fundRouter = require('./routes/fund');

app.listen(port, () => {
  console.log(`Server listening at: http://localhost:${port}`)
})

app.use('/fund', fundRouter(knex));

module.exports = app;