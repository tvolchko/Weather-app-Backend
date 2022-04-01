
exports.up = function(knex) {
  return knex.schema
  .createTable('users', tbl => {
      tbl.increments('user_id')
      tbl.string('username')
      tbl.string('password')
  })
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('users')
};
