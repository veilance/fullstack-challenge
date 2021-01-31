exports.up = function(knex) {
  return knex.schema.createTable('fund', function (table) {
    table.increments();
    table.string('investor').unique();;
    table.integer('total_investment');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('fund');
};
