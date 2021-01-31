const express = require('express');
const bodyParser = require('body-parser')

const router = express.Router();
const jsonParser = bodyParser.json()

module.exports = (knex) => {
  const updateInvestment = (id, totalInvestment) => {
    return knex('fund')
      .returning("*")
      .where('id', '=', id)
      .increment('total_investment', totalInvestment)
  };
  
  const createNewInvestment = (investor, totalInvestment) => {
    return knex('fund')
      .returning("*")
      .insert({
        investor: investor,
        total_investment: totalInvestment,
      })
  }

  router.post("/", jsonParser, (req, res) => {
    const investmentData = req.body;

    console.log('investmenthere', investmentData)

    knex('fund')
      .select("*")
      .where({ investor: investmentData.investor})
      .then((investment) => {
        if (investment && investment[0] && investment[0].investor) {
          return updateInvestment(investment[0].id, investmentData.totalInvestment)
            .then((results) => res.json(results)); 
        }

        return createNewInvestment(investmentData.investor, investmentData.totalInvestment)
          .then((results) => res.json(results));
      });
  });

  return router;
};