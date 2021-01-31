const express = require('express');
const router = express.Router();
var bodyParser = require('body-parser')

var jsonParser = bodyParser.json()

module.exports = (knex) => {
  router.post("/", jsonParser, (req, res) => {
    console.log('req.body', req.body);

    // if (!req || !req.body) {
      res.send(`<p>${req.body}</p>`);
    // }

    // knex('fund')
    // .returning("*")
    //   .insert({
    //     investor: req.body.investor,
    //     total_investment: req.body.totalInvestment,
    //   }).then((results) => {
    //     res.json(results);
    //   });
  });

  return router;
};