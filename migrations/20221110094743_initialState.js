
export const up = (knex) => {
  return knex.schema
    .createTable('commands', table => {
      table.string('command', 255).notNullable().primary()
      table.string('service', 255).notNullable()
      table.string('topic', 255).notNullable()
      table.boolean('isLimited', 255).notNullable().defaultTo(0)
      table.timestamps(true, true, true)
    })
    .createTable('commandsInRooms', table => {
      table.string('command', 255).notNullable()
      table.string('room', 255).notNullable()
      table.timestamps(true, true, true)
    })
    .createTable('rooms', table => {
      table.string('id', 255).notNullable().primary()
      table.string('slug', 255)
      table.string('name', 255)
      table.enu('client', ['rvrb', 'ttl']).notNullable()
      table.json('lastfm')
      table.json('spotify')
      table.json('botConfig')
      table.boolean('isEnabled', 255).notNullable().defaultTo(1)
      table.timestamps(true, true, true)
    })
    .createTable('strings', table => {
      table.increments('id').notNullable().primary()
      table.string('name', 255).notNullable()
      table.string('value', 255).notNullable()
      table.timestamps(true, true, true)
    })
}

export const down = (knex) => {
  return knex.schema
    .dropTable('commands')
    .dropTable('commandsInRooms')
    .dropTable('rooms')
    .dropTable('strings')
}
