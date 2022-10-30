const tableName = 'commands'

export default (knex) => {
  return {
    get: async (command) => {
      return await knex(tableName)
        .where({ command })
    },
    getAll: async () => {
      return await knex(tableName)
    }
  }
}
