
export const up = (knex) => {
  return knex.schema
    .createTable('roomGreetings', function (table) {
      table.increments('id').notNullable().primary()
      table.string('room', 255).notNullable()
      table.string('greeting', 1000).notNullable()
      table.timestamps(true, true, true)
    })
}

export const down = (knex) => {
  return knex.schema
    .dropTable('roomGreetings')
}
