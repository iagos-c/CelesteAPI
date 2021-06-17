'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ClubeSchema extends Schema {
  up () {
    this.create('clubes', (table) => {
      table.increments()
      table.string('nome', 200).notNullable()
      table.date('fundacao')
      table.string('estado', 45).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('clubes')
  }
}

module.exports = ClubeSchema
