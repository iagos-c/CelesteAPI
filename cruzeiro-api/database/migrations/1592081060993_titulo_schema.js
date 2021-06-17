'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TituloSchema extends Schema {
  up () {
    this.create('titulos', (table) => {
      table.increments()
      table.string('nome', 200).notNullable()
      table.integer('quantidade').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('titulos')
  }
}

module.exports = TituloSchema
