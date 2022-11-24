const tableName = 'roomGreetings'

export default (knex) => {
  return {
    get: async (room) => {
      return await knex(tableName)
        .where({ room })
    },
    add: async (room, greeting) => {
      return await knex(tableName)
        .insert({ room, greeting })
    },
    delete: async (room) => {
      return await knex(tableName)
        .delete()
        .where({ room })
    }
  }
}
