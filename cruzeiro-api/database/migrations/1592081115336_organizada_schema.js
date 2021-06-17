'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class OrganizadaSchema extends Schema {
  up () {
    this.create('organizadas', (table) => {
      table.increments()
      table.string('nome', 150).notNullable()
      table.integer('quantidade')
      table.timestamps()
    })
  }

  down () {
    this.drop('organizadas')
  }
}

module.exports = OrganizadaSchema
