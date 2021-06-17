'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class GerenciaSchema extends Schema {
  up () {
    this.create('gerencias', (table) => {
      table.increments()
      table.string('presidente', 200).notNullable()
      table.string('diretores', 200).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('gerencias')
  }
}

module.exports = GerenciaSchema
