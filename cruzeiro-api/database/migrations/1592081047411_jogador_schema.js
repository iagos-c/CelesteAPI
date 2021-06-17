'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class JogadorSchema extends Schema {
  up () {
    this.create('jogadors', (table) => {
      table.increments()
      table.string('posicao', 200).notNullable()
      table.string('nome', 200).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('jogadors')
  }
}

module.exports = JogadorSchema
