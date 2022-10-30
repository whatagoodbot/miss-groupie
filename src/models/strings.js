const tableName = 'strings'

export default (knex) => {
  return {
    get: async (name) => {
      return await knex(tableName)
        .where({ name })
    },
    getAll: async () => {
      return await knex(tableName)
    },
    getMany: async (names) => {
      return await knex(tableName)
        .whereIn('name', names)
    }
  }
}
