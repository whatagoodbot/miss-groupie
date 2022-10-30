module.exports = (knexfile) => {
  const knex = require('knex')(knexfile)
  return { knex }
}
