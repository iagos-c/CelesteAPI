'use strict'

/*
|--------------------------------------------------------------------------
| EstadioSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Estadio = use('App/Models/Estadio')

class EstadioSeeder {
  async run () {
    await Estadio.createMany([
      {nome: 'Estádio Governador Magalhães Pinto - Mineirão',
      capacidade: 62000,},
    ])
  }
}

module.exports = EstadioSeeder
