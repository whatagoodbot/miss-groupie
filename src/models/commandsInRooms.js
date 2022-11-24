const mainTable = 'commandsInRooms'

export default (knex) => {
  return {
    get: async (room) => {
      return await knex(mainTable)
        .where({ room })
    }
  }
}
