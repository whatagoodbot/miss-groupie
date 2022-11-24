const tableName = 'rooms'

export default (knex) => {
  return {
    get: async (id) => {
      return await knex(tableName)
        .where({ id })
        .first()
    },
    getAll: async (client) => {
      return await knex(tableName)
        .where({ isEnabled: true })
        .andWhere(queryBuilder => {
          if (client) queryBuilder.andWhere('client', client)
        })
    }
  }
}
