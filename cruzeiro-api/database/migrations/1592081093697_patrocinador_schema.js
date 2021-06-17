'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PatrocinadorSchema extends Schema {
  up () {
    this.create('patrocinadors', (table) => {
      table.increments()
      table.string('nome', 200).unique().notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('patrocinadors')
  }
}

module.exports = PatrocinadorSchema
