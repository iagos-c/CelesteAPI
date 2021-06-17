'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class EstadioSchema extends Schema {
  up () {
    this.create('estadios', (table) => {
      table.increments()
      table.string('nome', 200).notNullable()
      table.integer('capacidade').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('estadios')
  }
}

module.exports = EstadioSchema
