'use strict'

/*
|--------------------------------------------------------------------------
| ClubeSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Clube = use('App/Models/Clube')

class ClubeSeeder {
  async run () {
    await Clube.createMany([
      {nome: 'Cruzeiro Esporte Clube',
      fundacao: '1921-01-02',
      estado: 'Minas Gerais'},
    ])
  }
}

module.exports = ClubeSeeder
