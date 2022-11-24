const mainTable = 'commands'

export default (knex) => {
  return {
    get: async (command) => {
      return await knex(mainTable)
        .where({ command })
        .first()
    },
    getAll: async () => {
      return await knex(mainTable)
    }
  }
}
