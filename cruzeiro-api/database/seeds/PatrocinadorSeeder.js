'use strict'

/*
|--------------------------------------------------------------------------
| PatrocinadorSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Patrocinador = use('App/Models/Patrocinador')

class PatrocinadorSeeder {
  async run () {
    await Patrocinador.createMany([
      {nome: 'Adidas',},
    ])
  }
}

module.exports = PatrocinadorSeeder
