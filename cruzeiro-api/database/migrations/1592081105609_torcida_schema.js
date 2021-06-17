'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TorcidaSchema extends Schema {
  up () {
    this.create('torcidas', (table) => {
      table.increments()
      table.integer('quantidade').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('torcidas')
  }
}

module.exports = TorcidaSchema
